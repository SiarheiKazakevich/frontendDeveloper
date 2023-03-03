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

/*----2a) выводим приветствие------*/
const placeWelcome = document.querySelector('.greeting');

function showWelcome() {
   let welcome;
   const myDateWelcome = new Date();
   const hour = myDateWelcome.getHours();

   if (hour < 6) {
      welcome = 'Good night ';
   } else if (hour < 12) {
      welcome = 'Good morning ';
   } else if (hour < 18) {
      welcome = 'Good afternoon ';
   } else if (hour < 24) {
      welcome = 'Good evening ';
   } else {
      welcome = 'hi';
   };
   return welcome;
}
setInterval(
   () => placeWelcome.textContent = showWelcome(), 1000
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

/*-------Загаловок -------------*/

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }

         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

/*--------исчезновение блоков--------*//**/
/*
gsap.fromTo('.ma', { opacity: 1 }, {
   opacity: 0,
   scrollTrigger: {
      trigger: '.ma',
      start: 'center',
      end: '820',
      scrub: true
   }
})*/

let magic = document.querySelector('.page-header');
let magicHeight = magic.offsetHeight;

document.addEventListener('scroll', function () {
   magic.style.opacity = 1 + window.scrollY / -magicHeight;
})

/*---------выплывание справа--------*/
/*
let itemsR = gsap.utils.toArray('.gallery-right')

itemsR.array.forEach(item => {
   gsap.fromTo(item, { x: 50, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
         trigger: item,
         start: '-850',
         end: '-100',
         scrub: true
      }
   })
});*/


function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
   observer.observe(elm);
}