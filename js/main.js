const elHeader = document.querySelector ('.site-header')
const elNavBtn = elHeader.querySelector('.site-header__burger-js')

elNavBtn.addEventListener('click', function() {
   elHeader.classList.toggle('site-header--active')
})