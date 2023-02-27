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
