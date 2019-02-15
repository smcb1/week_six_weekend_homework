document.addEventListener('DOMContentLoaded', () => {
  console.log('Firing on JS');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit);

});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const listElement = document.createElement('li');

  this.reset();
};
