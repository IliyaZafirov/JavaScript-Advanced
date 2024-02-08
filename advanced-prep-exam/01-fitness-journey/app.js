// JS Advanced Exam Retake – 02 Aug 2023
// Problem 1. Fitness Journey

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
// Write the missing JavaScript code to make the Fitness Journey work as expected:
// All fields (Name, Email, Contact Number, Preferred Class and Class Time) are filled with the correct input.
// ⦁	Name, Email, Contact Number, Preferred Class and Class Time are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// ⦁	On clicking the ["Next"] button the information from the input fields is listed in the "preview-section" section. For the input fields a list item is added to the "class-info" unordered list. 
// ⦁	The text format and order for the list item should be the same as on the picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the ["Next"] button must be disabled. At the same time the "Edit" and the "Continue" buttons must be added. 
// The HTML structure looks like this:  
// The functionality here is the following: 
// ⦁	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and the ["Next"] button is enabled again.
// ⦁	The list item must be removed from the "class-info" and all of the information must go back to the input fields again. 
// ⦁	When the "Continue" button is clicked, the information from "class-info" unordered list must be transferred to "confirm-class" in the same HTML structure. For you, this means removing everything inside of the ul with class  "class-info" and adding in "confirm-class", the list item with same information and class "continue-info"   , delete "Edit" and "Continue" buttons and add new buttons "Confirm" and "Cancel" with class "confirm-btn" and "cancel-btn" .
// ⦁	This is the HTML structure of "confirm-class" unordered list:
// ⦁	When the "Cancel" button is clicked, the list item must be removed, from the "confirm-class", the ["Next"] button is enabled again.
// ⦁	When the "Confirm" button is clicked, the <div> element with id="main" must be removed, from the body and  you must add <h1> element with id="thank-you" and text "Thank you for scheduling your appointment, we look forward to seeing you!" and  <button> with id="done-btn" and text "Done".
// The HTML structure looks like this:  
// ⦁	On clicking the ["Done"] button you must reload the page.
// Submission
// Submit only your solve() function.
// GOOD LUCK… 

window.addEventListener('load', solve);

function solve() {

    const input = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        contact: document.getElementById('contact-number'),
        classType: document.getElementById('class-type'),
        classTime: document.getElementById('class-time')
    };

    const classInfo = document.querySelector('.class-info');
    const confirmClass = document.querySelector('.confirm-class');
    const divMain = document.getElementById('main');
    const body = document.querySelector('body');

    document.getElementById('next-btn').addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();

        if (input.name.value == '' || input.email.value == '' || input.contact.value == '' || input.classType.value == '' || input.classTime.value == '') {
            return;
        }

        const li = create('li', '', 'info-item');
        const article = create('article', '', 'personal-info');
        article.appendChild(create('p', input.name.value));
        article.appendChild(create('p', input.email.value));
        article.appendChild(create('p', input.contact.value));
        article.appendChild(create('p', input.classType.value));
        article.appendChild(create('p', input.classTime.value));
        li.appendChild(article);

        const editButton = create('button', 'Edit', 'edit-btn');
        const continueButton = create('button', 'Continue', 'continue-btn');
        const cancelButton = create('button', 'Cancel', 'cancel-btn');
        const confirmButton = create('button', 'Confirm', 'confirm-btn');
        const doneButton = create('button', 'Done');
        doneButton.setAttribute('id', 'done-btn');

        li.appendChild(editButton);
        li.appendChild(continueButton);
        classInfo.appendChild(li);

        const values = [input.name.value, input.email.value, input.contact.value, input.classType.value, input.classTime.value];
        Object.values(input).forEach(el => el.value = '');
        document.getElementById('next-btn').disabled = true;

        editButton.addEventListener('click', onEdit);
        continueButton.addEventListener('click', onContinue);
        cancelButton.addEventListener('click', onCancel);
        confirmButton.addEventListener('click', onConfirm);
        doneButton.addEventListener('click', onDone);

        function onEdit() {
            document.getElementById('name').value = values[0];
            document.getElementById('email').value = values[1];
            document.getElementById('contact-number').value = values[2];
            document.getElementById('class-type').value = values[3];
            document.getElementById('class-time').value = values[4];
            document.getElementById('next-btn').disabled = false;
            li.remove();
        }

        function onContinue() {
            editButton.remove();
            continueButton.remove();
            li.appendChild(cancelButton);
            li.appendChild(confirmButton);
            confirmClass.appendChild(li);
        }

        function onCancel() {
            li.remove();
            document.getElementById('next-btn').disabled = false;
        }

        function onConfirm() {
            divMain.remove();
            const h1 = create('h1', 'Thank you for scheduling your appointment, we look forward to seeing you!');
            h1.setAttribute('id', 'thank-you');
            body.appendChild(h1);
            body.appendChild(doneButton);
        }

        function onDone() {
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