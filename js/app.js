document.addEventListener('DOMContentLoaded', () => {
  console.log('Firing on JS');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-button')
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleFormSubmit = function(event) {
  event.preventDefault();

  const eventListItem = createEventListItem(event.target);
  const eventList = document.querySelector('#event-list');
  eventList.appendChild(eventListItem);

  event.target.reset();
};

const createEventListItem = function (form) {
  const eventListItem = document.createElement('li');
  const horz = document.createElement('hr');

  const name = document.createElement('h3')
  name.textContent = this.name.value;
  eventListItem.appendChild(name);
  eventListItem.appendChild(horz);

  const date = document.createElement('p')
  date.textContent = this.date.value;
  eventListItem.appendChild(date);

  const venue = document.createElement('p')
  venue.textContent = this.venue.value;
  eventListItem.appendChild(venue);

  const category = document.createElement('p')
  category.textContent = this.category.value;
  eventListItem.appendChild(category);

  const price = document.createElement('p')
  price.textContent = this.price.value;
  eventListItem.appendChild(price);

  // Print event to page
  // const readingList = document.querySelector('#social-list');
  // readingList.appendChild(listElement);

  return eventListItem;

}


const handleDeleteAllClick = function (event) {
  const listElement = document.querySelector('#event-list');
  listElement.innerHTML = '';
}


