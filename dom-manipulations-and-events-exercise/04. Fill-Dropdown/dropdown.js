function addItem() {

    const menu = document.getElementById('menu');
    const [input1, input2] = document.querySelectorAll('input[type=text]');

    let option = document.createElement('option');

    option.textContent = input1.value;
    option.value = input2.value;
    menu.appendChild(option)

    input1.value = '';
    input2.value = '';
}