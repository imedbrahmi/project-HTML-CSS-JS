//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");



//events listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo );


//functions

function addTodo(event){
    
    //prevent form from submitting
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to localstorage
    savLocalTodos(todoInput.value);

    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check" ></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //append to list 
    todoList.appendChild(todoDiv);

    //append to list 
    todoList.appendChild(todoDiv);

    //clear todoInput value
    todoInput.value="";
}

function deleteCheck(e){
const item = e.target;

//delete todo
if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function(){
        todo.remove(); 
    });
    
}
// check mark
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");

}
}

function filterTodo(e){
   const todos = todoList.childNodes;
   todos.forEach(function(todo) {
    switch (e.target.value){
        case "all":
        todo.style.display ="flex";
        break;
        case "completed":
            if(todo.classList.contains("completed")){
                todo.style.display ="flex";
            } else {
                todo.style.display = "none";
            }
            break;
        case "uncompleted":
            if(! todo.classList.contains('completed')){
                todo.style.display ="flex";

            }else {
                todo.style.display = "none";
            }
            break;
    }
   });
}

function savLocalTodos(todo){
    // check todo
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    //check
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to localstorage
    

    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check" ></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list 
    todoList.appendChild(todoDiv);

    //append to list 
    todoList.appendChild(todoDiv);

    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = [];

    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


// js for formulaire2 register

(function form () {
    'use strict'
    const forms = document.querySelectorAll(".requires-validation");
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    