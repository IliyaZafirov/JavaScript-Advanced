// Problem 01.Tech Troubleshoot Hub
// Environment Specifics
// Please be aware that every JS environment may behave differently when executing code. Certain things that work in the browser are not supported in Node.js, which is the environment used by Judge.

// The following actions are NOT supported:
// ⦁	.forEach() with NodeList (returned by querySelector() and querySelectorAll())
// ⦁	.forEach() with HTMLCollection (returned by getElementsByClassName() and element.children)
// ⦁	Using the spread-operator (...) to convert a NodeList into an array
// ⦁	append() in Judge (use only appendChild())
// ⦁	prepend()
// ⦁	replaceWith()
// ⦁	replaceAll()
// ⦁	closest()
// ⦁	replaceChildren()
// ⦁	Always turn the collection into a JS array (forEach, forOf, et.)

// If you want to perform these operations, you may use Array.from() to first convert the collection into an array. 
// Use the provided skeleton to solve this problem.
// Write the missing functionality of this user interface. The functionality is divided in the following steps: 

// Your Task
// Write the missing JavaScript code to make the Tech Troubleshoot Hub work as expected:
// All fields (Employee, Category, Urgency, Assigned Team, and Description) are filled with the correct input
// ⦁	Employee, Category, Urgency, Assigned Team, and Description are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// • On clicking the ["Add"] button, the information from the input fields is listed in the "Preview" section by adding a list item to the ".preview-list" unordered list. 
// ⦁	The list item should follow the same text format and order as shown in the provided picture.
// ⦁	Upon clicking the button, the input fields must be cleared, and the ["Add"] button should be disabled. Additionally, the "Edit" and "Continue" buttons need to be added.
// The HTML structure looks like this:  
// ⦁	Editing the information
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and all buttons in Preview section are removed while the ["Add"] button is enabled again.
// ⦁	The list items must be removed from the "preview-list" and all of the information must go back to the input fields again. 
// ⦁	Continue to pendin
// ⦁	When the "Continue" button is clicked, the information from "preview-list" unordered list must be transferred to "pending-list" in the same HTML structure. For you, this means removing everything inside of the ul with class = "preview-list" and adding in "pending-list", the list item with same information and the "Resolved" button must be added.
// ⦁	This is HTML structure of "pending-list" unordered list:
// ⦁	Add to resolve
// ⦁	When the "Resolved" button is clicked, the information from "pending-list" unordered list must be transferred to "resolved-list" in the same HTML structure. For you, this means removing everything inside of the ul with class = "pending-list" and adding in "resolved-list", the list item with same information and the "Clear" button must be added. 
// ⦁	This is HTML structure of "resolved-list" unordered list:
// ⦁	Clear information
// ⦁	When the "Clear" button is clicked, the list item must be removed, from the "resolved-list.
// ⦁	"Clear" button:
// ⦁	Submission
// Submit only yours solution() function.
// GOOD LUCK… 

window.addEventListener('load', solution);

function solution() {

  const input = {
    name: document.getElementById('employee'),
    category: document.getElementById('category'),
    urgency: document.getElementById('urgency'),
    team: document.getElementById('team'),
    description: document.getElementById('description')
  }

  const previewList = document.querySelector('.preview-list');
  const pendingList = document.querySelector('.pending-list');
  const resolvedList = document.querySelector('.resolved-list');

  document.getElementById('add-btn').addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    debugger
    if (input.name.value == '' || input.category.value == '' || input.urgency.value == '' || input.team.value == '' || input.description.value == '') {
      return;
    }

    const li = create('li', '', 'problem-content');
    const article = document.createElement('article');

    article.appendChild(create('p', `From: ${input.name.value}`));
    article.appendChild(create('p', `Category: ${input.category.value}`));
    article.appendChild(create('p', `Urgency: ${input.urgency.value}`));
    article.appendChild(create('p', `Assigned to: ${input.team.value}`));
    article.appendChild(create('p', `Description: ${input.description.value}`));

    li.appendChild(article);
    previewList.appendChild(li);

    const editButton = create('button', 'Edit', 'edit-btn');
    const continueButton = create('button', 'Continue', 'continue-btn');
    const resolvedButton = create('button', 'Resolved', 'resolve-btn');
    const clearButton = create('button', 'Clear', 'clear-btn');

    document.getElementById('add-btn').disabled = true;
    li.appendChild(editButton);
    li.appendChild(continueButton);

    const values = [input.name.value, input.category.value, input.urgency.value, input.team.value, input.description.value];
    Object.values(input).forEach(el => el.value = '');

    editButton.addEventListener('click', onEdit);
    continueButton.addEventListener('click', onContinue);
    resolvedButton.addEventListener('click', onResolved);
    clearButton.addEventListener('click', onClear);

    function onEdit() {
      document.getElementById('employee').value = values[0];
      document.getElementById('category').value = values[1];
      document.getElementById('urgency').value = values[2];
      document.getElementById('team').value = values[3];
      document.getElementById('description').value = values[4];
      document.getElementById('add-btn').disabled = false;
      li.remove();

    }

    function onContinue() {
      editButton.remove();
      continueButton.remove();
      li.appendChild(resolvedButton);
      pendingList.appendChild(li);
    }

    function onResolved() {
      resolvedButton.remove();
      li.appendChild(clearButton);
      resolvedList.appendChild(li);

    }

    function onClear() {
      li.remove();
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