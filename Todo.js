const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')


function newTodo() {

  const todoText = document.querySelector('#textintodo').value

  todoElement = makeTodo(todoText)
  render(todoElement, list)

  return
}

function makeTodo(todoText) {

   const ul = document.createElement("ul")
   addStyle(classNames.TODO_ITEM, ul)


   const li = document.createElement("li")
   //addStyle(classNames.TODO_ITEM, li)

   const li2 = document.createElement("li")
   //addStyle(classNames.TODO_ITEM, li)

   const span = document.createElement("span")
   span.textContent = todoText
   addStyle(classNames.TODO_TEXT, span)

   const checkbox = document.createElement("input");
   checkbox.setAttribute("type", "checkbox")
   addStyle(classNames.TODO_CHECKBOX, checkbox)

  render(span, li)
  render(checkbox, li2)
  render(li, ul)
  render(li2, ul)


   return ul

}

// append elements to the DOM
function render(element, destination) {
  destination.appendChild(element)
}

// add css to html elements
function addStyle(style, element) {
  element.setAttribute("class", style)
}
