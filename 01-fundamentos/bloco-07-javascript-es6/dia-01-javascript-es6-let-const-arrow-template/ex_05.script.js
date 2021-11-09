const btn = document.querySelector('#btn-click')
const clickP = document.querySelector('#click-count')

let clickCount = 0
btn.addEventListener('click', () => {
  clickCount += 1
  clickP.innerHTML = clickCount
})