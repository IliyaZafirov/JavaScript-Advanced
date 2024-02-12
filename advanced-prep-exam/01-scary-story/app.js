// JS Advanced Exam
// Problem 1. Scary Story
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
//  Your Task
// Write the missing JavaScript code to make the Scary Story work as expected:
// All fields (First Name, Last Name, Age, Genre, Story title and Story text) are filled with the correct input
// ⦁	First Name, Last Name, Age, Story title and Story text are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// ⦁	On clicking the [“Publish”] button the information from the input fields is listed in the "preview" section. For the input fields a list item is added to the "preview-list" unordered list. 
// ⦁	The text format and order for each list item should be the same as on the picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the ["Publish"] button must be disabled. At the same time the "Save", "Edit" and the "Delete" buttons must be enabled. 
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and all buttons in preview section are disabled while the ["Publish"] button is enabled again.
// ⦁	The list items must be removed from the "preview-list" and all of the information must go back to the input fields again. 
// ⦁	When the "Save" button is clicked, the story is completed. For you, this means removing everything inside of the div with id = "main" and adding there only a <h1> tag. With the message:  "Your scary story is saved!"
// ⦁	This is everything your webpage must contain at this step:
// ⦁	When the "Delete" button is clicked, the list item must be removed from the "preview-list" and the ["Publish"] button is enabled again.
// Submission
// Submit only your solution() function.
// GOOD LUCK… 

window.addEventListener("load", solve);

function solve() {
  const input = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    textarea: document.getElementById('story')

  }

  const previewList = document.getElementById('preview-list');

  document.getElementById('form-btn').addEventListener('click', onPublish);

  function onPublish() {

    if (input.firstName.value == '' || input.lastName.value == '' || input.age.value == '' || input.title.value == '' || input.textarea.value == '') {
      return;
    }

    const li = create('li', '', 'story-info');
    const article = document.createElement('article');
    article.appendChild(create('h4', `Name: ${input.firstName.value} ${input.lastName.value}`))
    article.appendChild(create('p', `Age: ${input.age.value}`));
    article.appendChild(create('p', `Title: ${input.title.value}`));
    article.appendChild(create('p', `Genre: ${input.genre.value}`));
    article.appendChild(create('p', input.textarea.value));
    li.appendChild(article);

    const saveButton = create('button', 'Save Story', 'save-btn');
    const editButton = create('button', 'Edit Story', 'edit-btn');
    const deleteButton = create('button', 'Delete Story', 'delete-btn');

    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    previewList.appendChild(li);

    const values = [input.firstName.value, input.lastName.value, input.age.value, input.title.value, input.genre.value, input.textarea.value];

    document.getElementById('form-btn').disabled = true;
    Object.values(input).forEach(el => el.value = '');

    saveButton.addEventListener('click', onSave);
    editButton.addEventListener('click', onEdit);
    deleteButton.addEventListener('click', onDelete);

    function onSave() {
      document.getElementById('main').remove();
      const div = document.createElement('div');
      div.setAttribute('id', 'main');
      const h1 = create('h1', 'Your scary story is saved!');
      div.appendChild(h1);
      document.querySelector('.body').appendChild(div);
    }

    function onEdit() {
      document.getElementById('first-name').value = values[0];
      document.getElementById('last-name').value = values[1];
      document.getElementById('age').value = values[2];
      document.getElementById('story-title').value = values[3];
      document.getElementById('genre').value = values[4];
      document.getElementById('story').value = values[5];
      document.getElementById('form-btn').disabled = false;
      li.remove();
    }

    function onDelete() {
      li.remove();
      document.getElementById('form-btn').disabled = false;
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
