const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const text = document.getElementById('textintodo')

function newTodo() {


  todoElement = makeTodo()
  render(todoElement, list)


}

function makeTodo() {

   const li = document.createElement("li")

   const div1 = document.createElement("div")
   addStyle("row justify-content-center", "class", div1)

   const div2 = document.createElement("div")
   addStyle("card", "class", div2)
   addStyle("width: 18rem;", "style", div2)

   const div3 = document.createElement("div")
   addStyle("card-body", "class", div3)

   const h5 = document.createElement("h5")
   h5.innerHTML = "Special title treatment"
   addStyle("card-title", "class", h5)

   const p = document.createElement("p")
   p.innerHTML = "With supporting text below as a natural lead-in to additional content"
   addStyle("card-text", "class", p)

   const a = document.createElement("a")
   addStyle("#", "href", a)
   addStyle("btn btn-primary", "class", a)
   a.innerHTML = "Go somewhere"

   render(h5, div3)
   render(p, div3)
   render(a, div3)
   render(div3, div2)
   render(div2,div1)
   render(div1, li)

   return li

}

// append elements to the DOM
function render(element, destination) {
  destination.appendChild(element)
}

// add css to html elements
function addStyle(style, type, element) {
  element.setAttribute(type, style)
}

function textClickedClear() {

  text.value = ""

}
