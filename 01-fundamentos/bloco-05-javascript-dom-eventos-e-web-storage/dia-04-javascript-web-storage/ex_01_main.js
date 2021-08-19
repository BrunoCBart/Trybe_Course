window.onload = () => {
  getSavedBgColor()
  getSavedBgColor2()
  getFontSize()
  getLineHeight()
  getSavedFontFamily()
}

const bgColorSelector = document.querySelector('#bg_color_selector')
const bgColorSelector2 = document.querySelector('#bg_color_selector2')
const txtColorSeletor = document.querySelector('#txt_color_selector')
const inputFont = document.querySelector('.input-font')
const lineHeightInput = document.querySelector('.input-line')
const inputFontFamily = document.querySelector('.input-font-family')
const header = document.querySelector('header')


bgColorSelector.addEventListener('change', changeBackgroundColor)
bgColorSelector2.addEventListener('change', changeBackgroundColor2)

txtColorSeletor.addEventListener('change', changeTextColor)
inputFont.addEventListener('keyup', changeFontSize)
lineHeightInput.addEventListener('keyup', changeLineHeight)
inputFontFamily.addEventListener('keyup', changeFontFamily)



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


function changeBackgroundColor2() {

  if (bgColorSelector2.value === 'padrao') {
    document.body.style.backgroundColor = 'rgb(39, 128, 79)'
    saveBackgroundColor2(['rgb(39, 128, 79)', 'padrao'])
  }

  if (bgColorSelector2.value === 'color1') {
    document.body.style.backgroundColor = 'rgb(69, 97, 139)'
    saveBackgroundColor2(['rgb(69, 97, 139)', 'color1'])
  }

  if (bgColorSelector2.value === 'color2') {
    document.body.style.backgroundColor = 'rgb(214, 178, 150)'
    saveBackgroundColor2(['rgb(214, 178, 150)', 'color2'])
  }

  if (bgColorSelector2.value === 'color3') {
    document.body.style.backgroundColor = 'rgb(214, 178, 225)'
    saveBackgroundColor2(['rgb(214, 178, 225)', 'color3'])
  }
}

function saveBackgroundColor2(color) {
  localStorage.setItem('bgcolor2', JSON.stringify(color))
}

function getSavedBgColor2() {
  const color = JSON.parse(localStorage.getItem('bgcolor2'))
  if (!color) return
  console.log(color)
  document.body.style.backgroundColor = color[0]
  bgColorSelector2.value = color[1]
}

function changeTextColor() {

  if (txtColorSeletor.value === 'padrao') {
    document.body.style.color = 'rgb(0, 0, 0)'
    saveTextColor(['rgb(0, 0, 0)', 'padrao'])
  }

  if (txtColorSeletor.value === 'color1') {
    document.body.style.color = 'rgb(255, 255, 255)'
    saveTextColor(['rgb(255, 255, 255)', 'color1'])
  }

  if (txtColorSeletor.value === 'color2') {
    document.body.style.color = 'rgb(150,75,0)'
    saveTextColor(['rgb(150,75,0)', 'color2'])
  }

  if (txtColorSeletor.value === 'color3') {
    document.body.style.color = 'rgb(153,0,230)'
    saveTextColor(['rgb(153,0,230)', 'color3'])
  }
}

function saveTextColor(color) {
  localStorage.setItem('txtcolor', JSON.stringify(color))
}

function getSavedTxtColor() {
  const color = JSON.parse(localStorage.getItem('txtcolor'))
  if (!color) return
  console.log(color)
  document.body.style.color = color[0]
  txtColorSeletor.value = color[1]
}

const main = document.querySelector('main')

function changeFontSize(e) {
  if (e.keyCode === 13) {
    const main = document.querySelector('main')
    const fontSize = inputFont.value
    main.style.fontSize = fontSize
    saveFontSize(fontSize)
  }
}

function saveFontSize(fontSize) {
  localStorage.setItem('fontS', fontSize)
}

function getFontSize() {
  const fontSize = localStorage.getItem('fontS')
  const main = document.querySelector('main')
  main.style.fontSize = fontSize
}

function changeLineHeight(e) {
  if (e.keyCode === 13) {

    const lineHeight = lineHeightInput.value
    main.style.lineHeight = lineHeight
    saveLineHeight(lineHeight)
  }
}

function saveLineHeight(lineHeigth) {
  localStorage.setItem('lineH', lineHeigth)
}

function getLineHeight() {
  const lineHeight = localStorage.getItem('lineH')

  main.style.lineHeight = lineHeight
}

function changeFontFamily(e) {
  if (e.keyCode === 13) {
    const fontFamily = inputFontFamily.value
    main.style.fontFamily = fontFamily
    saveFontFamily(fontFamily)
  }
}

function saveFontFamily(fontFamily) {
  localStorage.setItem('fontF', fontFamily)
}

function getSavedFontFamily() {
  const fontFamily = localStorage.getItem('fontF')
  main.style.fontFamily = fontFamily
}