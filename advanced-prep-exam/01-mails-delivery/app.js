function solve() {

    const input = {
        name: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        text: document.getElementById('message')
    }

    document.getElementById('add').addEventListener('click', onAdd);
    document.getElementById('reset').addEventListener('click', onReset);

    const list = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    function onAdd(event) {
        event.preventDefault();

        if (input.name.value == '' || input.title.value == '' || input.text.value == '') {
            return;
        }

        const li = document.createElement('li');
        li.appendChild(create('h4', `Title: ${input.title.value}`));
        li.appendChild(create('h4', `Recipient Name: ${input.name.value}`));
        li.appendChild(create('span', input.text.value));

        const div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        const sendButton = document.createElement('button');
        sendButton.setAttribute('type', 'submit');
        sendButton.setAttribute('id', 'send');
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', onSend);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', onDeleteList);

        div.appendChild(sendButton);
        div.appendChild(deleteButton);
        li.appendChild(div);
        list.appendChild(li);

        const values = [input.name.value, input.title.value, input.text.value];
        Object.values(input).forEach(el => el.value = '');

        function onSend() {
            li.remove();
            const sentLi = document.createElement('li');
            sentLi.appendChild(create('span', `To: ${values[0]}`));
            sentLi.appendChild(create('span', `Title: ${values[1]}`));
            const divBtn = create('div', '', 'btn');
            const sentDeleteButton = document.createElement('button');
            sentDeleteButton.setAttribute('type', 'submit');
            sentDeleteButton.setAttribute('class', 'delete');
            sentDeleteButton.textContent = 'Delete';
            sentDeleteButton.addEventListener('click', onDeleteSent);

            divBtn.appendChild(sentDeleteButton);
            sentLi.appendChild(divBtn);
            sentList.appendChild(sentLi);
        }

        function onDeleteList() {

            removeAllChildNodes(list);
            const liList = document.createElement('li');

            liList.appendChild(create('span', `To: ${values[0]}`));
            liList.appendChild(create('span', `Title: ${values[1]}`));
            deleteList.appendChild(liList);
        }


        function onDeleteSent(e) {

            removeAllChildNodes(sentList);
            const liSent = document.createElement('li');

            liSent.appendChild(create('span', `To: ${values[0]}`));
            liSent.appendChild(create('span', `Title: ${values[1]}`));
            deleteList.appendChild(liSent);
        }
    }

    function onReset(event) {
        event.preventDefault();

        document.getElementById('recipientName').value = '';
        document.getElementById('title').value = '';
        document.getElementById('message').value = '';
    }

    function create(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }

        return element;
    }

    function removeAllChildNodes(parent) {
        debugger
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

}
solve()