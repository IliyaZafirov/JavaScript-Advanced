function solve() {
    const formRef = document.querySelector('form');
    const [addTask, openTask, inProgress, complete] = document.querySelectorAll('section');

    btnHandlerEnum = {
        start: (e) => {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            currentArticle.innerHTML += getBtnPartial({ classes: "red", text: "Delete" }, { classes: "orange", text: "Finish" })
            let btns = currentArticle.querySelectorAll('button');
            addEventListenerToButton(btns);
            inProgress.children[1].appendChild(currentArticle);
        },
        finish: (e) => {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.children[1].appendChild(currentArticle);

        },
        delete: (e) => {
            e.target.parentElement.parentElement.remove();
        }
    }


    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(e) {
        e.preventDefault();
        const taskName = e.target.elements[0].value;
        const desc = e.target.elements[1].value;
        const date = e.target.elements[2].value;

        if (!taskName || !desc || !date) {
            return;
        }

        createArticle(taskName, desc, date);
        clearForm(e.target.elements);

    }

    function clearForm(formElements) {
        formElements[0].value = '';
        formElements[1].value = '';
        formElements[2].value = '';
    }

    function createArticle(name, desc, date) {
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemp(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll('button');
        addEventListenerToButton(btns)
    }

    function clickHandler(e) {
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e)
    }

    function addEventListenerToButton(btns) {
        Array.from(btns).forEach(btn => btn.addEventListener('click', clickHandler))
    }

    function getArticleTemp(name, desc, date) {

        return `<h3>${name}</h3>` +
            `<p>Description: ${desc}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial({ classes: "green", text: "Start" }, { classes: "red", text: "Delete" })
    }

    function getBtnPartial(btn1, btn2) {
        return `<div class="flex">` +
            `<button class=${btn1.classes}>${btn1.text}</button>` +
            `<button class=${btn2.classes}>${btn2.text}</button>` +
            `</div>`
    }

    function removeBtn(target) {
        target.remove()
    }
}