

var todoInput = document.getElementById('todo-input');
var addBtn = document.getElementById('add-btn');
var todoList = document.getElementById('todo-list');

function addTodo() {
  
    var Text = todoInput.value;
    
    var newTag = document.createElement('li');
    newTag.textContent = Text;
    todoList.appendChild(newTag);
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function() {
        newTag.remove();
    });
    

   
    newTag.appendChild(deleteBtn);

    todoInput.value = '';
}


addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});




