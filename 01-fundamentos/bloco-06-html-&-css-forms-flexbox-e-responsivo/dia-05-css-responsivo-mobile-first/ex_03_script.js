const bars = document.querySelector('.bars')
const ul = document.querySelector('header nav ul')

bars.addEventListener('click', () => {
  ul.classList.toggle('active')
})