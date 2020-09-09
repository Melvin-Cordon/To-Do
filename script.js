const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const text = document.getElementById('textintodo')

function clearBox() {

  const todoText = document.querySelector('#textintodo').value
  if (todoText === "What do you need to do?")
  {
    text.value = ""
    return
  }
}

function restBox() {

  const todoText = document.querySelector('#textintodo').value
  if (todoText.trim === "")
  {
    text.value = "What do you need to do?"
    return
  }
}


function newTodo() {
  // get todoText from user
  const todoText = document.querySelector('#textintodo').value
  text.value = ""
  if (todoText === "" || todoText === "What do you need to do?")
  {
    alert("Must Enter a Todo")
    return
  }
  text.value = "What do you need to do?"

  // create a todoElement with inputted todoText
  todoElement = makeTodo(todoText)

  // append todoElement to DOM list element
  render(todoElement, list)


  // count newtodo
  countNewTodo(itemCountSpan)

  // count unchecked todos
  countUncheckedTodo(uncheckedCountSpan)

  // select todoElement's checkbox from the DOM
  const checkbox = todoElement.lastElementChild

  // if checkbox checked decrement unchecked todos count by one otherwise do the opposite
  checkbox.addEventListener("click", function(event) {
    if (event.target.checked)
    {
      countCheckedTodo(uncheckedCountSpan)
    }
    else
    {
      countUncheckedTodo(uncheckedCountSpan)
    }
  })

}




// create todoElements
function makeTodo(todoText) {



  // create li
  const li = document.createElement("li")

  addStyle(classNames.TODO_ITEM, li)

  // create span
  const span = document.createElement("span")

  addStyle(classNames.TODO_TEXT, span)

  // create input and set it's type to checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox")

  addStyle(classNames.TODO_CHECKBOX, checkbox)

  // add text to span
  span.textContent = todoText

  // append span to li
  render(span, li)

  // appent checkbox to li
  render(checkbox, li)

  // return todoElement
  return li

}


// append elements to the DOM
function render(element, destination) {
  destination.appendChild(element)
}


// count total todos
function countNewTodo(element) {
  count(element)
}


// increase unchecked todos count everytime new tod0 added
function countUncheckedTodo(element) {
  count(element)
}

// factor out common code for countNewTodo and countUncheckedTodo functions
function count(element) {
  let count = Number(element.innerHTML)
  count++
  element.innerHTML = count.toString()
}


// decrease unchecked todos count if certain element is checked
function countCheckedTodo(element) {
  let count = Number(element.innerHTML)
  count--
  element.innerHTML = count.toString()
}

// add css to html elements
function addStyle(style, element) {
  element.setAttribute("class", style)
}
