// JS Advanced Exam
// Problem 1. Car Dealers
// Environment Specifics
// Please, be aware that every JS environment may behave differently when executing code. Certain things that work in the browser are not supported in Node.js, which is the environment used by Judge.
// The following actions are NOT supported:
// ⦁	.forEach() with NodeList (returned by querySelector() and querySelectorAll())
// ⦁	.forEach() with HTMLCollection (returned by getElementsByClassName() and element.children)
// ⦁	Using the spread-operator (...) to convert a NodeList into an array
// ⦁	append() in Judge (use only appendChild())
// ⦁	replaceWith() in Judge
// ⦁	replaceChildren() in Judge
// ⦁	replaceAll() in Judge
// ⦁	closest() in Judge
// If you want to perform these operations, you may use Array.from() to first convert the collection into an array. 
// Use the provided skeleton to solve this problem.
// Note: You can't and you have no permission to change directly the given HTML code (index.html file).
// Your Task
// Write the missing JavaScript code to make the Car Dealer work as expected:
// All fields (make, model, year, fuel, original-cost and selling-price) are filled with the correct input
// and the selling price should have a bigger value than the original price
// ⦁	Make, model, year, fuel, original-cost and selling price are non-empty strings. If any of them are empty, or the original price is bigger than the selling price the program should not do anything.
// ⦁	Getting the information from the form
// When you click the [“Publish”] button, the information from the input fields must be added to the tbody with the id “table-body”. Then, clear all input fields. 
// ⦁	Edit information for posts
// When the ["Edit"] button is clicked, the information from the post must be sent to the input fields and the record should be deleted from the tbody with the id "table-body". 
// After editing the information make a new record to the tbody with updated information.
// ⦁	Sell car
// When you click the ["Sell"] button, the record must be deleted from the tbody with id "table-body" and a new record must be appended to the ul with the id "cars-list"
// 	The new record should be as follows: 
// ⦁	First span should include both car Make and Model as a whole string and separated by a single space
// ⦁	Second span should include the Production year
// ⦁	Third span should include the difference between the Selling price and Original price
// Total profit made will be the sum from all sold cars profits which should be rounded to the second digit after the decimal point and should be displayed in strong with id "profit"
// Submission
// Submit only your solve() function.
// GOOD LUCK… 


window.addEventListener("load", solve);

function solve() {

  let profit = 0;

  const input = {
    brand: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    cost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  }

  document.getElementById('publish').addEventListener('click', onPublish);

  const tbody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const strong = document.getElementById('profit');

  function onPublish(event) {
    event.preventDefault();

    if (input.brand.value == '' || input.model.value == '' || input.year.value == '' || input.fuel.value == '' || input.cost.value == '' || input.sellingPrice.value == '' || input.cost.value > input.sellingPrice.value) {
      return;
    }

    const tr = create('tr', '', 'row');
    tr.appendChild(create('td', input.brand.value));
    tr.appendChild(create('td', input.model.value));
    tr.appendChild(create('td', input.year.value));
    tr.appendChild(create('td', input.fuel.value));
    tr.appendChild(create('td', input.cost.value));
    tr.appendChild(create('td', input.sellingPrice.value));
    const td = document.createElement('td');

    const editButton = create('button', 'Edit', 'action-btn edit');
    const sellButton = create('button', 'Sell', 'action-btn sell');

    td.appendChild(editButton);
    td.appendChild(sellButton);
    tr.appendChild(td);

    tbody.appendChild(tr);


    const values = [input.brand.value, input.model.value, input.year.value, input.fuel.value, input.cost.value, input.sellingPrice.value];
    Object.values(input).forEach(el => el.value = '');

    editButton.addEventListener('click', onEdit);
    sellButton.addEventListener('click', onSell);

    function onEdit() {
      tr.remove();
      document.getElementById('make').value = values[0];
      document.getElementById('model').value = values[1];
      document.getElementById('year').value = values[2];
      document.getElementById('fuel').value = values[3];
      document.getElementById('original-cost').value = values[4];
      document.getElementById('selling-price').value = values[5];
    }

    function onSell() {
      tr.remove();
      const difference = Math.abs(values[4] - values[5]);
      profit += difference;

      const li = create('li', '', 'each-list');
      li.appendChild(create('span', `${values[0]} ${values[1]}`));
      li.appendChild(create('span', values[2]));
      li.appendChild(create('span', difference));
      carsList.appendChild(li);


      strong.textContent = profit.toFixed(2);
    }

  }

  function create(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }

}
