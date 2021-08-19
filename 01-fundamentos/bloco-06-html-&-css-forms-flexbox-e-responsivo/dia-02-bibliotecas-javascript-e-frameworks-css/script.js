const selecStates = document.querySelector('#estados-brasil')
const startDate = document.querySelector('#data-inicio')
const submitBtn = document.querySelector('#submit')


const states = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

const makeOptionEl = () => {
  const option = document.createElement('option')
  return option
}

function makeStateEl() {
  for (let key in states) {
    const option = makeOptionEl()
    option.innerHTML = states[key]
    option.value = key
    selecStates.appendChild(option)
  }
}

function startDateIsValid(date) {
  let objDate,
    mSeconds,
    day,
    month,
    year;

  if (date.length !== 10) {
    console.log(1)
    return false;
  }

  if (date.substring(2, 3) !== '/' || date.substring(5, 6) !== '/') {
    console.log(2)
    return false;
  }

  day = parseInt(date.substring(0, 2))
  month = parseInt(date.substring(3, 5) - 1);
  year = parseInt(date.substring(6, 10 - 0));

  if (year < 0) return false

  mSeconds = new Date(year, month, day).getTime();

  objDate = new Date()
  objDate.setTime(mSeconds)

  if (objDate.getFullYear() !== year ||
    objDate.getMonth() !== month ||
    objDate.getDate() !== day) {
    console.log(typeof year, typeof month, typeof day)
    console.log(3)
    console.log(objDate.getFullYear())
    console.log(objDate.getMonth())
    console.log(objDate.getDate())
    return false;
  }
  return true;
}

function checkDate() {
  // define date string to test 
  const date = document.getElementById('data-inicio').value;
  // check date and print message 
  if (!startDateIsValid(date)) {
    alert('Data inválida');
  }
}



submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  checkDate()
  if (checkRequired()) displayForm()
})

function checkRequired() {
  const required = document.querySelectorAll('input[required]')
  for (let req of required) {
    if (req.value === '') return false
  }
  return true
}

function createSection() {
  const section = document.createElement('section')
  return section;
}

function createDiv() {
  const div = document.createElement('div')
  return div
}

function createP() {
  const p = document.createElement('p')
  return p
}

function displayForm() {
  const inputText = document.querySelectorAll('input[type="text"]')
  const oldSection = document.querySelector('section')
  if (oldSection) oldSection.remove()
  const section = createSection()
  const div = createDiv()
  section.classList.add('form-result')
  inputText.forEach(input => {
    const p = createP()
    p.innerText = input.value
    div.appendChild(p)
  })
  section.appendChild(div)
  document.body.appendChild(section)
}

window.onload = () => {
  makeStateEl()
}