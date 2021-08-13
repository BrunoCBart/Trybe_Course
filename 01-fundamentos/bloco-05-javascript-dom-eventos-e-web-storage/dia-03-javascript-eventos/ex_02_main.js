function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index in weekDays) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Ex #1 
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDaysOfMonth(dezDaysList)


function createDaysOfMonth(daysList) {
  const ul = document.querySelector('#days')

  for (let days of daysList) {
    const li = document.createElement('li')
    li.classList.add('day')
    li.innerHTML = days
    ul.appendChild(li)

    if (days === 24 || days === 25 || days === 31) {
      li.classList.add('holiday')
    }

    if (days === 4 || days === 11 || days === 18 || days === 25) {
      li.classList.add('friday')
    }

  }

}

// Ex #2

createHolidaysBtn()

function createHolidaysBtn() {
  const div = document.querySelector('.buttons-container')
  const button = document.createElement('button')
  button.id = 'btn-holiday'
  button.innerHTML = 'Feriados'
  div.appendChild(button)
}



// Ex #3

holidays()

function holidays() {
  const holidays = document.querySelectorAll('.holiday')
  console.log(holidays)
  const btnHoliday = document.querySelector('#btn-holiday')

  btnHoliday.addEventListener('click', function () {
    for (let holiday of holidays) {
      holiday.classList.toggle('color')
      holiday.style.backgroundColor = 'rgb(238,238,238)'

      if (holiday.classList.contains('color')) {
        holiday.style.backgroundColor = 'pink'
      }

      // if (!holiday.style.backgroundColor) {
      //   holiday.style.backgroundColor = 'pink'
      // } else {
      //   holiday.style.backgroundColor = ''
      // }

    }
  })

}




// Ex #4

fridayButton('Sexta-feira')
function fridayButton(str) {
  const div = document.querySelector('.buttons-container')
  const button = document.createElement('button')
  button.id = 'btn-friday'
  button.innerHTML = str
  div.appendChild(button)
}


// Ex #5

isFriday()
function isFriday() {
  const fridays = document.querySelectorAll('.friday')
  console.log(fridays)
  const btnFriday = document.querySelector('#btn-friday')

  btnFriday.addEventListener('click', function () {
    for (let friday of fridays) {
      friday.classList.toggle('color2')
      friday.style.backgroundColor = 'rgb(238,238,238)'

      if (friday.classList.contains('color2')) {
        friday.style.backgroundColor = 'lightblue'
      }
      // if (!friday.style.backgroundColor) {
      //   friday.style.backgroundColor = 'lightblue'
      // } else {
      //   friday.style.backgroundColor = ''
      // }
    }
  })
}


// Ex 6


zoomIn()
function zoomIn() {
  const days = document.querySelectorAll('.day')

  for (let day of days) {
    day.addEventListener('mouseenter', function () {
      day.style.fontSize = '32px'
    })
  }

}

zoomOut()
function zoomOut() {
  const days = document.querySelectorAll('.day')

  for (let day of days) {
    day.addEventListener('mouseout', function () {
      day.style.fontSize = '20px'
    })
  }

}

// document.addEventListener('mouseover', function (e) {
//   const el = e.target

//   if (el.classList.contains('day')) {
//     day.style.fontSize = '1.8em'
//   }
// })


// Ex #7

makeTasks('Treinar')
function makeTasks(task) {
  const div = document.querySelector('.my-tasks')
  const span = document.createElement('span')
  span.innerHTML = task
  div.appendChild(span)
}

// Ex #8

addCaption('orange')
function addCaption(cor) {
  const div = document.querySelector('.my-tasks')
  const div2 = document.createElement('div')
  div2.classList.add('task')
  div2.style.backgroundColor = cor
  div.appendChild(div2)

}

// Ex #9
taskSelected()
function taskSelected() {
  const tasks = document.querySelectorAll('.task')
  for (let task of tasks) {
    task.addEventListener('click', function () {
      task.classList.toggle('selected')
    })
  }
}

// Ex #10

taskColor()
function taskColor() {
  const days = document.querySelectorAll('.day')

  for (let day of days) {
    day.addEventListener('click', function () {
      day.classList.toggle('color3')
      day.style.color = 'rgb(119,119,119)'

      if (day.classList.contains('color3')) {
        day.style.color = '#DEB887'
      }
    })
  }

}

// #Bonus
addAppointments()
function addAppointments() {
  const inputContainer = document.querySelector('.input-container')
  const input = document.querySelector('#task-input')
  document.addEventListener('click', (e) => {
    const el = e.target

    if (!input.value) return

    if (el.id === 'btn-add') {
      const p = document.createElement('p')
      p.innerHTML = input.value
      inputContainer.appendChild(p)
    }
  })

}