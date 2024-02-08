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

        if (input.name.value == '' || input.description.value == '' || input.date.value == '') {
            return;
        }

        // create elements
        const article = document.createElement('article');
        article.appendChild(create('h3', input.name.value));
        article.appendChild(create('p', `Description: ${input.description.value}`));
        article.appendChild(create('p', `Due Date: ${input.date.value}`));

        const startButton = create('button', 'Start', 'green');
        const deleteButton = create('button', 'Delete', 'red');
        const finishButton = create('button', 'Finish', 'orange');

        const div = create('div', '', 'flex');
        div.appendChild(startButton);
        div.appendChild(deleteButton);

        article.appendChild(div);
        openSection.appendChild(article);

        Object.values(input).forEach(el => el.value = '');

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
            finishedSection.appendChild(article)
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