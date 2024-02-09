// Problem 1. Hotel Reservation
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
// Write the missing JavaScript code to make the Hotel Reservation work as expected:
// All fields (First Name, Last Name, Check-in date, Check-out date and Number of guests) are filled with the correct input.
// ⦁	First Name, Last Name, Check-in date, Check-out date and Number of guests are non-empty strings and Check-in date is before Check-out date. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// ⦁	On clicking the ["Next"] button the information from the input fields is listed in the "Reservation info" section. For the input fields a list item is added to the "info-list" unordered list. 
// ⦁	The text format and order for the list item should be the same as on the picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the ["Next"] button must be disabled. At the same time the "Edit" and the "Continue" buttons must be enabled. 
// The HTML structure looks like this:  
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and the ["Next"] button is enabled again.
// ⦁	The list items must be removed from the "info-list" and all of the information must go back to the input fields again. 
// ⦁	When the "Continue" button is clicked, the information from "info-list" unordered list must be transferred to "confirm-list" in the same HTML structure. For you, this means removing everything inside of the ul with class = "info-list" and adding in "confirm-list", the list item with same information and change "Edit" and "Continue" buttons to "Confirm" and "Cancel" with changed class.
// ⦁	This is HTML structure of "confirm-list" unordered list:
// ⦁	When the "Confirm" button is clicked, the list item must be removed,  from the "confirm-list", the ["Next"] button is enabled again you must add new class and add text to <h1> element with id="verification".If "Confirm" button is clicked class must be "reservation-confirmed" and text is "Confirmed.".
// ⦁	"Confirm" button:
// ⦁	When the "Cancel" button is clicked, the list item must be removed,  from the "confirm-list", the ["Next"] button is enabled again you must add new class and add text to <h1> element with id="verification". If "Cancel" button is clicked class must be "reservation-cancelled" and text is "Cancelled.".
// ⦁	"Cancel" button:	
// Submission
// Submit only yours solution() function.
// GOOD LUCK… 

window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        checkIn: document.getElementById('date-in'),
        checkOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    }

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');

    document.getElementById('next-btn').addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        if (input.firstName.value == '' || input.lastName.value == '' || input.checkIn.value == '' || input.checkOut.value == '' || input.peopleCount.value == '') {
            return;
        }

        const li = create('li', '', 'reservation-content');
        const article = document.createElement('article');

        article.appendChild(create('h3', `Name: ${input.firstName.value} ${input.lastName.value}`));
        article.appendChild(create('p', `From date: ${input.checkIn.value}`));
        article.appendChild(create('p', `To date: ${input.checkOut.value}`));
        article.appendChild(create('p', `For ${input.peopleCount.value} people`));
        li.appendChild(article);

        const editButton = create('button', 'Edit', 'edit-btn');
        const continueButton = create('button', 'Continue', 'continue-btn');
        const confirmButton = create('button', 'Confirm', 'confirm-btn');
        const cancelButton = create('button', 'Cancel', 'cancel-btn');
        li.appendChild(editButton);
        li.appendChild(continueButton);

        infoList.appendChild(li);
        document.getElementById('next-btn').disabled = true;
        const values = [input.firstName.value, input.lastName.value, input.checkIn.value, input.checkOut.value, input.peopleCount.value];
        Object.values(input).forEach(el => el.value = '');

        editButton.addEventListener('click', onEdit);
        continueButton.addEventListener('click', onContinue);
        confirmButton.addEventListener('click', onConfirm);
        cancelButton.addEventListener('click', onCancel);


        function onEdit() {
            document.getElementById('first-name').value = values[0];
            document.getElementById('last-name').value = values[1];
            document.getElementById('date-in').value = values[2];
            document.getElementById('date-out').value = values[3];
            document.getElementById('people-count').value = values[4];

            document.getElementById('next-btn').disabled = false;
            li.remove();
        }

        function onContinue() {
            editButton.remove();
            continueButton.remove();
            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            confirmList.appendChild(li);
        }

        function onConfirm() {
            li.remove();
            document.getElementById('next-btn').disabled = false;
            verification.className = 'reservation-confirmed';
            verification.textContent = 'Confirmed.';
        }

        function onCancel() {
            li.remove();
            document.getElementById('next-btn').disabled = false;
            verification.className = 'reservation-cancelled';
            verification.textContent = 'Cancelled.';
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