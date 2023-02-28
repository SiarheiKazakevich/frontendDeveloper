const mapblur = document.querySelector('.fotosize');
mapblur.addEventListener('click', toggleBlur);

function toggleBlur() {
   this.classList.toggle('blur');
}


/* --скрипт для вращения aboutme --*/

document.getElementById('target').addEventListener('click', function () {
   var elem = this
   elem.classList.add('anim')
   setTimeout(function () {
      elem.classList.remove('anim')
   }, 500)
}, false)


/*-------1a) Текущее время -----*/

const time = document.querySelector('.time');
function showTime() {
   return new Date().toLocaleTimeString();
}
setInterval(
   () => time.textContent = showTime(), 1000
);


/*-----1b) выводим текущую дату-------*/

const placeDate = document.querySelector('.date');
function showFullDate() {
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
   const months = ['Январь', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'November', 'December'];

   const myDate = new Date();
   const fullDate = days[myDate.getDay()] + ', ' +
      months[myDate.getMonth()] + ' ' + myDate.getDate();
   return fullDate;
};
setInterval(
   () => placeDate.textContent = showFullDate(), 1000
);


/*---------------------погода------------------*/
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');

async function getWeather() {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=5e07cc3fbd9370b8c188d3f04953c8ad&units=metric`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data.weather[0].id, data.main.temp);
   weatherIcon.className = 'weather-icon owf';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
}
getWeather();