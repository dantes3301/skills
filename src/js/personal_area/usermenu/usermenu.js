const usermenuDropdownBtn = document.querySelector('#user-dropdown-trigger')
const usermenuDropdownContent = document.querySelector('#user-dropdown-content')
const usermenuDropdownIcon = document.querySelector('.user-dropdown__toggle-icon')
var windowWidth;

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
  console.log(windowWidth)
})

usermenuDropdownBtn.addEventListener('click', () => {
  usermenuDropdownContent.classList.toggle('dropdown__user-menu_active')
  usermenuDropdownIcon.classList.toggle('active')
  windowWidth < 575 || window.innerWidth < 575 ? document.body.classList.toggle('overflow-hidden') : ''
})