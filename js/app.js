document.addEventListener('DOMContentLoaded', () => {
  console.log('Firing on JS');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button')
  button.addEventListener('submit', handleDeleteAllClick);

});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const listElement = document.createElement('li');
  const horz = document.createElement('hr');

  const name = document.createElement('h3')
  name.textContent = this.name.value;
  listElement.appendChild(name);
  listElement.appendChild(horz);

  const date = document.createElement('p')
  date.textContent = this.date.value;
  listElement.appendChild(date);

  const venue = document.createElement('p')
  venue.textContent = this.venue.value;
  listElement.appendChild(venue);

  const category = document.createElement('p')
  category.textContent = this.category.value;
  listElement.appendChild(category);

  const price = document.createElement('p')
  price.textContent = this.price.value;
  listElement.appendChild(price);

  // Print event to page
  const readingList = document.querySelector('#social-list');
  readingList.appendChild(listElement);

  this.reset();
};

const handleDeleteAllClick = function (event) {
  const listElement = document.querySelector('#social-list');
  listElement.innerHTML = '';
}


