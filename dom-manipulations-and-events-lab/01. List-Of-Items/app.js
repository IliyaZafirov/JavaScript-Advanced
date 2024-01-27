function addItem() {
    let items = document.getElementById('items');
    let newItem = document.getElementById('newItemText');

    items.innerHTML += `<li>${newItem.value}</li>`;
    console.log(newItem.value);


}