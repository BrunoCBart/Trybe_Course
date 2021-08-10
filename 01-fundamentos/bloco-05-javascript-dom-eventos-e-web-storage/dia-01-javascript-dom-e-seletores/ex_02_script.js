const header = document.querySelector('header')
header.style.backgroundColor = '#47B069'

const emergencyTasks = document.querySelectorAll('.emergency-tasks div')
emergencyTasks[0].style.backgroundColor = '#F59F85'
emergencyTasks[1].style.backgroundColor = '#F59F85'

const h3Emergency = document.querySelectorAll('.emergency-tasks div h3')
h3Emergency[0].style.backgroundColor = '#a51ff3'
h3Emergency[1].style.backgroundColor = '#a51ff3'

const nonEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div')
nonEmergencyTasks[0].style.backgroundColor = '#F9DB5D'
nonEmergencyTasks[1].style.backgroundColor = '#F9DB5D'


const h3NoEmergency = document.querySelectorAll('.no-emergency-tasks div h3')
h3NoEmergency[0].style.backgroundColor = '#232525'
h3NoEmergency[1].style.backgroundColor = '#232525'