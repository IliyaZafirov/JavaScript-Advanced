// Problem 01.Autumn Adventures

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

//  Write the missing functionality of this user interface. The functionality is divided in the following steps: 
// Your Task
// Write the missing JavaScript code to make the Autumn Adventures work as expected:

// All fields (Time, Date, Place, Event, and Contacts) are filled with the correct input
// ⦁	Time, Date, Place, Event, and Contacts are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	1.Getting the information from the form 
// • When the ["Add Event"] button is clicked, the information from the input fields is listed in the "Last Check" section. A list item is added to the "check-list" unordered list. 
// ⦁	The list item should follow the same text format and order as shown in the provided picture.
// ⦁	When the button is clicked, the input fields must be cleared, and the ["Add Event"] button should be disabled. Additionally, the "Edit" and "Continue" buttons need to be added.
// The HTML structure looks like this:  

// 2.Edit Event
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in to the input fields from step 1 and all the buttons in Last Check section are removed while the ["Add Event"] button is enabled again.
// ⦁	The list items must be removed from the "check-list" 

// 3.Continue 
// ⦁	When the "Continue" button is clicked, the information from "check-list" unordered list must be transferred to "upcoming-list" in the same HTML structure. For you, this means removing everything inside of the <ul> with class = "check-list" and adding in " upcoming-list", the list item with same information The "Move to Finished" buttons must be added while the ["Add Event"] button is enabled again.
// ⦁	This is the HTML structure of the "upcoming-list" unordered list:

// 4.Move to Finished
// ⦁	When the "Move to Finished" button is clicked, the information from the "upcoming-list" unordered list must be transferred to "finished-list" in the same HTML structure. For you, this means removing everything inside of the <ul> with class = "upcoming-list" and adding in to"finished-list", the list item with same information. The "Move to Finished” button must be removed.  

// 5.Clear
// ⦁	When the "Clear" button is clicked, the list item must be removed, from the "finished-list".
// ⦁	"Clear" button:

// Submission
// Submit only yours solve() function.
// GOOD LUCK… 

window.addEventListener('load', solve);

function solve() {

    const input = {
        time: document.getElementById('time'),
        date: document.getElementById('date'),
        place: document.getElementById('place'),
        name: document.getElementById('event-name'),
        email: document.getElementById('email')
    };

    const secondField = document.querySelector('.content-second').children[0].children[1];
    const thirdField = document.querySelector('.content-first').children[1].children[1];
    const fourthField = document.querySelector('.content-second').children[1].children[1];

    document.getElementById('add-btn').addEventListener('click', addEvent);

    function addEvent() {

        if (input.time.value == '' || input.date.value == '' || input.place.value == '' || input.name.value == '', input.email.value == '') {
            return;
        }

        const li = create('li', '', 'event-content');
        secondField.appendChild(li);

        const article = create('article');
        li.appendChild(article);

        const values = [input.time.value, input.date.value, input.place.value, input.name.value, input.email.value];

        const begins = create('p', `Begins: ${input.date.value} at: ${input.time.value}`);
        const place = create('p', `In: ${input.place.value}`);
        const event = create('p', `Event: ${input.name.value}`);
        const contact = create('p', `Contact: ${input.email.value}`);
        article.appendChild(begins);
        article.appendChild(place);
        article.appendChild(event);
        article.appendChild(contact);

        document.getElementById('add-btn').disabled = true;
        Object.values(input).forEach(el => el.value = '');

        const editBtn = create('button', 'Edit', 'edit-btn');
        const continueBtn = create('button', 'Continue', 'continue-btn');
        const finishedBtn = create('button', 'Move to Finished', 'finished-btn');

        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);
        finishedBtn.addEventListener('click', onFinished);
        document.getElementById('clear').addEventListener('click', onClear);

        function onEdit() {
            document.getElementById('time').value = values[0];
            document.getElementById('date').value = values[1];
            document.getElementById('place').value = values[2];
            document.getElementById('event-name').value = values[3];
            document.getElementById('email').value = values[4];
            document.getElementById('add-btn').disabled = false;
            li.remove();
        }

        function onContinue() {
            thirdField.appendChild(li);
            editBtn.remove();
            continueBtn.remove();
            li.appendChild(finishedBtn);
        }

        function onFinished() {
            finishedBtn.remove();
            fourthField.appendChild(li);
            document.getElementById('add-btn').disabled = false;
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