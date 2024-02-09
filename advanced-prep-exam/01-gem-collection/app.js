// Problem 1. Gem Collection
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
// Write the missing JavaScript code to make the Gem Collection work as expected:
// All fields (Gemstone Name, Color, Carats, Price, and Type) are filled with the correct input
// ⦁	Gemstone Name, Color, Age, Carats, Price and Type are non-empty strings. If any of them is empty, the program should not do anything.
// ⦁	Getting the information from the form
// ⦁	On clicking the [“Add Gem”] button the information from the input fields is listed in the "preview" section. To the unordered list with id "preview-list", should be added a list item, containing the input information. 
// ⦁	The text format and order for each list item should be the same as in the picture below.  
// ⦁	When the button is clicked, the input fields must be cleared and the ["Add Gem"] button must be disabled. At the same time the "Save to Collection", "Edit Information" and the "Cancel" buttons must be added. 
// The HTML structure looks like this:  
// ⦁	Editing the information from the Preview
// The functionality here is the following: 
// ⦁	When the "Edit Information" button is clicked, all of the information is loaded in the input fields from step 1 and all buttons in preview section are removed while the ["Add Gem"] button is enabled again.
// ⦁	The list items must be removed from the "preview-list" and all of the information must go back to the input fields again. 
// ⦁	Saving the information from the Preview
// ⦁	When the "Save to Collection" button is clicked, the gem information must be transferred from "preview" to "collection", for you that means a new list item should be added to the unordered list with id: "collection", having the information about gems.
// The HTML structure looks like this:   
// ⦁	The list item from preview section must be removed while the ["Add Gem"] button is enabled again.
// ⦁	Cancel the information from the Preview
// ⦁	When the "Cancel" button is clicked, the list item must be removed from the "preview-list" and the ["Add Gem"] button is enabled again.
// Submission
// Submit only yours solution() function.
// GOOD LUCK… 

window.addEventListener("load", solve);

function solve() {

    const input = {
        name: document.getElementById('gem-name'),
        color: document.getElementById('color'),
        carats: document.getElementById('carats'),
        price: document.getElementById('price'),
        type: document.getElementById('type')

    }

    const previewList = document.getElementById('preview-list');
    const collection = document.getElementById('collection');

    document.getElementById('add-btn').addEventListener('click', onAdd);

    function onAdd() {
        if (input.name.value == '' || input.color.value == '' || input.carats.value == '' || input.price.value == '' || input.type.value == '') {
            return;
        }

        const li = create('li', '', 'gem-info');
        const article = document.createElement('article');
        li.appendChild(article);

        article.appendChild(create('h4', input.name.value));
        article.appendChild(create('p', `Color: ${input.color.value}`));
        article.appendChild(create('p', `Carats: ${input.carats.value}`));
        article.appendChild(create('p', `Price: ${input.price.value}$`));
        article.appendChild(create('p', `Type: ${input.type.value}`));

        const saveButton = create('button', 'Save to Collection', 'save-btn');
        const editButton = create('button', 'Edit Information', 'edit-btn');
        const cancelButton = create('button', 'Cancel', 'cancel-btn');
        li.appendChild(saveButton);
        li.appendChild(editButton);
        li.appendChild(cancelButton);

        previewList.appendChild(li);

        document.getElementById('add-btn').disabled = true;
        const values = [input.name.value, input.color.value, input.carats.value, input.price.value, input.type.value];
        Object.values(input).forEach(el => el.value = '');

        saveButton.addEventListener('click', onSave);
        editButton.addEventListener('click', onEdit);
        cancelButton.addEventListener('click', onCancel);

        function onSave() {

            const collectionList = document.createElement('li');
            const p = create('p', `${values[0]} - Color: ${values[1]}/ Carats: ${values[2]}/ Price: ${values[3]}$/ Type: ${values[4]}`, 'collection-item');
            collectionList.appendChild(p)
            collection.appendChild(collectionList);
            li.remove();
            document.getElementById('add-btn').disabled = false;
        }

        function onEdit() {
            document.getElementById('gem-name').value = values[0];
            document.getElementById('color').value = values[1];
            document.getElementById('carats').value = values[2];
            document.getElementById('price').value = values[3];
            document.getElementById('type').value = values[4];
            document.getElementById('add-btn').disabled = false;
            li.remove();
        }

        function onCancel() {
            li.remove();
            document.getElementById('add-btn').disabled = false;
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