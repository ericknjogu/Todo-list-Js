const todoList=[{
  todo:'clean',
  dueDate: '2024-12-4'

}];


renderTodo();

function renderTodo() {
  let todoListHTML='';
  
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const {todo,dueDate} =todoObject;

    const html=`
      
      <div>${todo}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i},1)
        renderTodo()
      ">Delete</button>

      
    `;
    
    todoListHTML+=html;
  }

  document.querySelector('.js-todo').innerHTML=todoListHTML;
  
}

function addTodo() {

  const inputElement=document.querySelector('.js-input');
  const todo=inputElement.value;

  const DateInputElement=document.querySelector('.js-dueDate');
  const dueDate=DateInputElement.value;


  todoList.push({todo, dueDate});

  //console.log(todoList);

  inputElement.value=''

  renderTodo();
  
}