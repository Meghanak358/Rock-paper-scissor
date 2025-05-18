const todoList = [{
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2024-09-11'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML='';

  for (let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
   // const {name, dueDate} =todoObject;
    const html=`
     <div class="todo-grid">
        <div>${name} </div>
        <div> ${dueDate}</div>
    
          <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
          " class="delete-todo-button">Delete</button>
       
      </div>
    `;
    todoListHTML+=html;
  }
  console.log(todoList);

  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
function addTodo(){
   const inputElement=document.querySelector('.js-name-input');
   const name=inputElement.value;
  
   const dateinputElement=document.querySelector('.js-due-date-input');
const dueDate=dateinputElement.value;

  todoList.push({
  //  name:name,
   // dueDate:duedate
  name,
  dueDate
   } );
 

  inputElement.value='';
  renderTodoList();

}
