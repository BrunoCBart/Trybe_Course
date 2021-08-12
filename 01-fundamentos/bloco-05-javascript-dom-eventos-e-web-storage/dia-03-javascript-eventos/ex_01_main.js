const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


document.addEventListener('click', function (e) {
  const el = e.target
  if (el.id === 'first-li') {
    el.classList.add('tech')
    secondLi.classList.remove('tech')
    thirdLi.classList.remove('tech')
  }
  if (el.id === 'second-li') {
    el.classList.add('tech')
    firstLi.classList.remove('tech')
    thirdLi.classList.remove('tech')
  }
  if (el.id === 'third-li') {
    el.classList.add('tech')
    firstLi.classList.remove('tech')
    secondLi.classList.remove('tech')

  }
})

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    if (firstLi.classList.contains('tech')) {
      firstLi.innerHTML = input.value
    }
    if (secondLi.classList.contains('tech')) {
      secondLi.innerHTML = input.value
    }

    if (thirdLi.classList.contains('tech')) {
      thirdLi.innerHTML = input.value
    }
  }
})


function createA() {
  const a = document.createElement('a')
  return a
}

function createH3() {
  const h3 = document.createElement('h3')
  return h3
}

myWebpage.addEventListener('dblclick', function () {
  const url = 'https://www.google.com/'
  window.open(url)

})

// document.addEventListener('click', (e) => {
//   const div = document.querySelector('#div')
//   const el = e.target
//   if (el.id === 'my-spotrybefy') {
//     const a = createA()
//     const h3 = createH3()
//     h3.innerHTML = 'Meu topy 3 do Spotrybef'
//     a.target = '_blank'
//     a.href = 'https://www.youtube.com/watch?v=HQorltxcS_E&list=PLBeFgecT3c0ADizM7RUa7n02UQIHxcZbq&index=2'
//     a.appendChild(h3)
//     div.appendChild(a)
//     el.remove()

//   }
// })

document.addEventListener('mouseover', (e) => {
  const el = e.target
  if (el.id === 'my-spotrybefy') {
    el.style.color = 'red'
  }
})

document.addEventListener('mouseout', (e) => {
  const el = e.target
  if (el.id === 'my-spotrybefy') {
    el.style.color = 'white'
  }
})
