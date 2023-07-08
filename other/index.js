const timerHello = document.getElementById('timer-hello');
const timerToDay = document.getElementById('timer-today');
const timerTime = document.getElementById('timer-time');
const timerRemained = document.getElementById('timer-remained');

// const timeOfDay = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];;


const updateClock = () => {
  let dateNow = new Date();
  let newDate = new Date(`${(dateNow.getFullYear() + 1).toString()}`, '0', '1', '0', '0', '0').getTime();
  let dayRemaining = Math.ceil(((newDate - dateNow.getTime()) / 1000) / 60 / 60 / 24)

  let hour = dateNow.getHours()

  if (hour <= 6) {
    timerHello.textContent = 'Доброе время суток';
  } else if (hour <= 12) {
    timerHello.textContent = 'Доброе утро';
  } else if (hour <= 18) {
    timerHello.textContent = 'Добрый день';
  } else {
    timerHello.textContent = 'Добрый вечер';
  }

  timerToDay.textContent = `Сегодня: ${days[dateNow.getDay()]}`;
  timerTime.textContent = `Текущее время: ${dateNow.toLocaleTimeString()}`
  timerRemained.textContent = `До нового года осталось ${dayRemaining} дней`;
}

setInterval(updateClock, 1000);