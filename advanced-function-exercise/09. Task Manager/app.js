// ⦁	Task Manager
// Use the index.html and app.js files to solve this problem. You have NO permission to directly change the given HTML code (index.html file).
 
// Your task
// Write the missing JavaScript code to make the Task Manager Functionality works as follows: 
// When the [Add] button is clicked, first you need to validate the inputs. If any of the input fields are empty, the function doesn’t make anything. 
// After validating the input fields, you need to add the new task (article) in the "Open" section. 
// The HTML structure looks like this:
 
// The article should have two buttons "Start" and "Delete". Be careful to set the classes for the buttons and the parent-div.
// When the [Start] button is clicked, you need to move the Task in the section "In Progress". Be careful with the buttons! The HTML structure looks like this: 
 
// When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML. 
// After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". The buttons with their parent div-element should be removed.

function solve() {

    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }

    const [_, openSection, progressSection, finishedSection] = Array.from(document.querySelectorAll('section')).map(el => el.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();

        // create elements
        const article = document.createElement('article');
        article.appendChild(create('h3', input.name.value));
        article.appendChild(create('p', `Description: ${input.description.value}`));
        article.appendChild(create('p', `Due Date: ${input.date.value}`));

        const div = create('div', '', 'flex');
        const startButton = create('button', 'Start', 'green');
        const deleteButton = create('button', 'Delete', 'red');
        const finishButton = create('button', 'Finish', 'orange');

        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);

        // append to Open Section
        openSection.appendChild(article);

        // clear input values
        Object.values(input).forEach(el => el.value = '');

        // ** add functionality for start, delete and finish task

        startButton.addEventListener('click', onStart);
        deleteButton.addEventListener('click', onDelete);
        finishButton.addEventListener('click', onFinish);


        function onDelete() {
            article.remove();
        }

        function onStart() {
            startButton.remove();
            div.appendChild(finishButton);
            progressSection.appendChild(article);
        }

        function onFinish() {
            div.remove();
            finishedSection.appendChild(article);

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