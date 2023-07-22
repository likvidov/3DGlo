const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = `<div class="preloader">
  <svg class="preloader__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor"
      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
    </path>
  </svg>
</div>`;
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (list) => {
    let success = true;

    if (list[0].value.length < 2) {
      success = false;
    }

    if (list[1].value == '') {
      success = false;
    }

    if (list[2].value.length < 11) {
      success = false;
    }

    // list.forEach(input => {
    //   if (!input.classList.contains('success')) {
    //     success = false;
    //   }
    // })

    return success;
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    })

    if (validate(formElements)) {
      sendData(formBody).then(data => {
        statusBlock.textContent = successText;

        formElements.forEach(input => {
          input.value = '';
        })
      })
        .catch(error => {
          statusBlock.textContent = errorText;
        })
    } else {
      alert('Данные не валидны')
    }
  }

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста)')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

      setTimeout(() => form.removeChild(statusBlock), 3000)
    })
  } catch (error) {
    console.log(error.message);
  }
}

export default sendForm;