document.addEventListener('DOMContentLoaded', () => {
  console.log('Firing on JS');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button')
  button.addEventListener('submit', handleButtonClick);

});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const listElement = document.createElement('li');

  const date = document.createElement('p')
  date.textContent = this.date.value;
  listElement.appendChild(date);

  const name = document.createElement('p')
  name.textContent = this.name.value;
  listElement.appendChild(name);

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

const handleButtonClick = function() {
  const eventList = document.querySelector('#social-list');
  eventList.innerHTML = '';
};
