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