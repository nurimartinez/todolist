const newItem = document.querySelector('.add-form');
const todosList = document.querySelector('.todos');
const searchInput = document.querySelector('.search input')

// Add new items to the list
const addNewItem = (item) => {

  let html = `<li class="todo"><span>${item}</span><i class="fas fa-trash-alt"></i></li>`;
  todosList.innerHTML += html;

};

// Program the button to create new items
newItem.addEventListener('submit', e => {

  e.preventDefault();
  let term = newItem.todo.value.trim().toLowerCase();
  addNewItem(term);
  newItem.reset();

});

// Delete items from the list
todosList.addEventListener('click', e => {

  if(e.target.classList.contains('fas')) e.target.parentElement.remove();

})

// Search for an item inside the todo list
searchInput.addEventListener('keyup', e => {

  let text = e.target.value.trim().toLowerCase();
  let items = document.querySelectorAll('.todo')
  Array.from(items).forEach(item => {
    if(!item.textContent.includes(text)) item.classList.add('hide')
    if(item.textContent.includes(text)) item.classList.remove('hide')
    
  })

});