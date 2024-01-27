function addItem() {
    const input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }

    const liElement = document.createElement('li')
    liElement.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    liElement.appendChild(deleteBtn);

    const list = document.getElementById('items');
    list.appendChild(liElement)

    input.value = '';

    function onDelete(event) {

        const liElement = event.target.parentElement;
        liElement.remove();
    }
}

