window.onload = () => {
  getSavedBgColor()
}

const bgColorSelector = document.querySelector('#bg_color_selector')
const header = document.querySelector('header')

bgColorSelector.addEventListener('change', changeBackgroundColor)

function changeBackgroundColor() {
  if (bgColorSelector.value === 'padrao') {
    header.style.backgroundColor = 'rgb(39, 128, 79)'
    saveBackgroundColor(['rgb(39, 128, 79)', 'padrao'])
  }

  if (bgColorSelector.value === 'color1') {
    header.style.backgroundColor = 'rgb(69, 97, 139)'
    saveBackgroundColor(['rgb(69, 97, 139)', 'color1'])
  }

  if (bgColorSelector.value === 'color2') {
    header.style.backgroundColor = 'rgb(214, 178, 150)'
    saveBackgroundColor(['rgb(214, 178, 150)', 'color2'])
  }

  if (bgColorSelector.value === 'color3') {
    header.style.backgroundColor = 'rgb(214, 178, 225)'
    saveBackgroundColor(['rgb(214, 178, 225)', 'color3'])
  }
}


function saveBackgroundColor(color) {
  localStorage.setItem('bgcolor', JSON.stringify(color))
}

function getSavedBgColor() {
  const color = JSON.parse(localStorage.getItem('bgcolor'))
  if (!color) return
  console.log(color)
  header.style.backgroundColor = color[0]
  bgColorSelector.value = color[1]
}