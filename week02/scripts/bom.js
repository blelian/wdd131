const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('ul');

inputElement.focus();

buttonElement.addEventListener('click', function() {
  if (inputElement.value.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputElement.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
      listElement.removeChild(listItem);
      inputElement.focus();
    });

    listElement.appendChild(listItem);

    inputElement.value = '';
  } else {
    inputElement.focus();
  }

  inputElement.focus();
});