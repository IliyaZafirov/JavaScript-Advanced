// Problem 1. Ski Lift
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
// Write the missing JavaScript code to make the Ski Lift work as expected:
// All fields (First Name, Last Name, Number of people, From date and Number of days) are filled with the correct input.
// ⦁	First Name, Last Name, Number of people, From date and Number of days are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// ⦁	On clicking the ["Next step"] button the information from the input fields is listed in the "info-ticket" section. For the input fields a list item is added to the " ticket-info-list" unordered list. 
// ⦁	The text format and order for the list item should be the same as on the picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the ["Next step"] button must be disabled. At the same time the "Edit" and the "Continue" buttons must be enabled. 
// The HTML structure looks like this:  
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and the ["Next step"] button is enabled again.
// ⦁	The list item must be removed from the " ticket-info-list" and all of the information must go back to the input fields again. 
// ⦁	When the "Continue" button is clicked, the information from "ticket-info-list" unordered list must be transferred to "confirm-ticket" in the same HTML structure. For you, this means removing everything inside of the ul with class  "ticket-content " and adding in "confirm-ticket", the list item with same information and class "ticket-info-list"   , delete "Edit" and "Continue" buttons and add new buttons "Confirm" and "Cancel" with class "confirm-btn" and "cancel-btn" .
// ⦁	This is HTML structure of "confirm-ticket" unordered list:
// ⦁	When the "Cancel" button is clicked, the list item must be removed, from the "confirm-ticket", the ["Next step"] button is enabled again.
// ⦁	When the "Confirm" button is clicked, the <div> element with id="main" must be removed, from the body and  you must add <h1> element with id="thank-you" and text "Thank you, have a nice day! " and  <button> with id="back-btn" and text "Back ".
// The HTML structure looks like this:  
// ⦁	On clicking the ["Back"] button you must reload the page.
// Submission
// Submit only yours solution() function.
// GOOD LUCK… 

window.addEventListener('load', solve);

function solve() {
    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        people: document.getElementById('people-count'),
        date: document.getElementById('from-date'),
        days: document.getElementById('days-count')
    }

    const ticketPreview = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');

    document.getElementById('next-btn').addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        if (input.firstName.value == '' || input.lastName.value == '' || input.people.value == '' || input.date.value == '' || input.days.value == '') {
            return;
        }

        const li = create('li', '', 'ticket');
        const article = create('article');
        article.appendChild(create('h3', `Name: ${input.firstName.value} ${input.lastName.value}`));
        article.appendChild(create('p', `From date: ${input.date.value}`));
        article.appendChild(create('p', `For ${input.days.value} days`));
        article.appendChild(create('p', `For ${input.people.value} people`));
        li.appendChild(article);

        const editButton = create('button', 'Edit', 'edit-btn');
        const continueButton = create('button', 'Continue', 'continue-btn');
        const confirmButton = create('button', 'Confirm', 'confirm-btn');
        const cancelButton = create('button', 'Cancel', 'cancel-btn');
        const backButton = create('button', 'Back');
        backButton.setAttribute('id', 'back-btn');

        li.appendChild(editButton);
        li.appendChild(continueButton);
        ticketPreview.appendChild(li);

        document.getElementById('next-btn').disabled = true;
        const values = [input.firstName.value, input.lastName.value, input.people.value, input.date.value, input.days.value];
        Object.values(input).forEach(el => el.value = '');


        editButton.addEventListener('click', onEdit);
        continueButton.addEventListener('click', onContinue);
        confirmButton.addEventListener('click', onConfirm);
        cancelButton.addEventListener('click', onCancel);
        backButton.addEventListener('click', onBack);

        function onEdit() {
            li.remove();
            document.getElementById('first-name').value = values[0];
            document.getElementById('last-name').value = values[1];
            document.getElementById('people-count').value = values[2];
            document.getElementById('from-date').value = values[3];
            document.getElementById('days-count').value = values[4];
            document.getElementById('next-btn').disabled = false;
        }

        function onContinue() {
            editButton.remove();
            continueButton.remove();
            li.appendChild(confirmButton);
            li.appendChild(cancelButton);
            confirmTicket.appendChild(li);
        }

        function onConfirm() {
            document.getElementById('main').remove();
            const h1 = create('h1', 'Thank you, have a nice day!')
            h1.setAttribute('id', 'thank-you');
            document.getElementById('body').appendChild(h1);
            document.getElementById('body').appendChild(backButton);

        }

        function onCancel() {
            li.remove();
            document.getElementById('next-btn').disabled = false;
        }

        function onBack() {
            location.reload();
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