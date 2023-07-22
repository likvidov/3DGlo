const validator = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  const nameInputs = document.querySelectorAll('.form-name');
  const emailInputs = document.querySelectorAll('.form-email');
  const phoneInputs = document.querySelectorAll('.form-phone');
  const messageInput = document.getElementById('form2-message');

  calcItems.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D+$/g, "")
    })
  })

  nameInputs.forEach(item => {
    item.addEventListener('input', (e) => {
      item.value = item.value.replace(/[^а-я\s]+/gim, "");
    })
  })

  messageInput.addEventListener('input', () => {
    messageInput.value = messageInput.value.replace(/[^а-я0-9\s\.\,\!]+/gim, "");
  })

  emailInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']+/gi, "");
    })
  })

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^\d\(\)\-\+]+/gi, "");
    })
  })
}

export default validator;