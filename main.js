const addButton = document.getElementById('addTask')
const input = document.getElementById('inputTask')
const ul = document.getElementById('todo-list')
const listContainer = document.getElementById('list-container')
const li = document.getElementsByTagName('li')
const mainHeader = document.getElementById('main-header')
const currentDate = document.getElementById('current-date')
const dayOfWeek = document.getElementById('day-of-week')
const taskTrack = document.getElementById('task-tracking')
const trackContainer = document.getElementById('track-container')

let toDoListItems = []

addButton.addEventListener('click', function () {
	if (input.value !== '') {
		addTodo(input.value)
		input.value = ''
		input.focus()
	} else {
		alert('Please add something!')
	}
})

function renderToDo() {

	let customize = document.createElement('div')
	customize.className = 'customize'
	ul.appendChild(customize)

	let label = document.createElement('label')
	label.className = 'check-option'
	customize.appendChild(label)

	let checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.value = 'yes'
	checkbox.className = 'check-input'
	label.appendChild(checkbox)

	let span = document.createElement('span')
	span.className = 'check-box'
	label.appendChild(span)

	let li = document.createElement('li');
	li.className = 'task-li'
	li.innerHTML = input.value
	customize.appendChild(li)

	span.addEventListener('click', function () {
		let poppedItem = null
		if (li.classList.toggle('checked')) {
			poppedItem = toDoListItems.pop()
			taskTracking.innerHTML = `${toDoListItems.length} pending tasks`
		} else {
			toDoListItems.push(poppedItem)
			taskTracking.innerHTML = `${toDoListItems.length} pending tasks`
		}
	})

	li.addEventListener('dblclick', function (e) {
		let field = e.target
		field.contentEditable = field.contentEditable === true ? false : true
		e.preventDefault()
	})

	let button = document.createElement('button')
	button.id = 'deleteButton'
	ul.appendChild(button)

	button.addEventListener("click", function () {
		customize.remove()
		button.remove()
		toDoListItems.pop()
		if (toDoListItems.length === 1) {
			taskTracking.innerHTML = `${toDoListItems.length} pending task`
		} else {
			taskTracking.innerHTML = `${toDoListItems.length} pending tasks`
		}
	})

	buttonCln.addEventListener('click', function () {
		toDoListItems = []
		customize.remove()
		button.remove()
		if (toDoListItems.length === 1) {
			taskTracking.innerHTML = `${toDoListItems.length} pending task`
		} else {
			taskTracking.innerHTML = `${toDoListItems.length} pending tasks`
		}
	})
}

function addTodo(text) {
	let toDoObj = {
		text: text,
		checked: false,
		id: Date.now(),
	}
	toDoListItems.push(toDoObj)
	renderToDo()
	if (toDoListItems.length === 1) {
		taskTracking.innerHTML = `${toDoListItems.length} pending task`
	} else {
		taskTracking.innerHTML = `${toDoListItems.length} pending tasks`
	}
}

let today = new Date()
let dayOfWeekName = today.toLocaleString('default', { weekday: 'long' })
dayOfWeek.innerHTML = dayOfWeekName
let monthName = today.toLocaleString('default', { month: 'long' })

let date = `${monthName} ${today.getDate()}, ${today.getFullYear()}`
currentDate.innerHTML = date

const trackCont = document.createElement('div')
trackCont.id = 'track-container'
mainHeader.appendChild(trackCont)

const innerTrackCont = document.createElement('div')
innerTrackCont.id = 'inner-track-container'
trackCont.appendChild(innerTrackCont)

const taskTracking = document.createElement('span')
taskTracking.className = 'task-tracking'
innerTrackCont.appendChild(taskTracking)

const buttonCln = document.createElement('button')
buttonCln.id = 'cleanList'
innerTrackCont.appendChild(buttonCln)





