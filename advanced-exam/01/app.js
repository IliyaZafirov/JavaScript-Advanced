window.addEventListener("load", solve);

function solve() {

  const input = {
    name: document.getElementById('snowman-name'),
    height: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creator: document.getElementById('creator-name'),
    special: document.getElementById('special-attribute')
  }

  document.querySelector('.add-btn').addEventListener('click', onAdd);

  const preview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const main = document.getElementById('hero');

  function onAdd(event) {
    event.preventDefault();

    if (input.name.value == '' || input.height.value == '' || input.location.value == '' || input.creator.value == '' || input.special.value == '') {
      return;
    }

    const li = create('li', '', 'snowman-info');
    const article = document.createElement('article');
    article.appendChild(create('p', `Name: ${input.name.value}`))
    article.appendChild(create('p', `Height: ${input.height.value}`))
    article.appendChild(create('p', `Location: ${input.location.value}`))
    article.appendChild(create('p', `Creator: ${input.creator.value}`))
    article.appendChild(create('p', `Attribute: ${input.special.value}`))
    li.appendChild(article);

    const editButton = create('button', 'Edit', 'edit-btn');
    const nextButton = create('button', 'Next', 'next-btn');
    const sendButton = create('button', 'Send', 'send-btn');
    const backButton = create('button', 'Back', 'back-btn');



    const div = create('div', '', 'btn-container');
    div.appendChild(editButton);
    div.appendChild(nextButton);
    li.appendChild(div);

    preview.appendChild(li);

    document.querySelector('.add-btn').disabled = true;
    const values = [input.name.value, input.height.value, input.location.value, input.creator.value, input.special.value];
    Object.values(input).forEach(el => el.value = '');

    editButton.addEventListener('click', onEdit);
    nextButton.addEventListener('click', onNext);
    sendButton.addEventListener('click', onSend);
    backButton.addEventListener('click', onBack);


    function onEdit() {
      li.remove();
      document.getElementById('snowman-name').value = values[0];
      document.getElementById('snowman-height').value = values[1];
      document.getElementById('location').value = values[2];
      document.getElementById('creator-name').value = values[3];
      document.getElementById('special-attribute').value = values[4];
      document.querySelector('.add-btn').disabled = false;
    }

    function onNext() {
      snowList.appendChild(preview.firstChild)
      snowList.firstChild.className = 'snowman-content';
      div.remove();
      snowList.firstChild.firstChild.appendChild(sendButton);
    }

    function onSend() {
      main.remove();
      // document.querySelector('.add-btn').disabled = false;
      document.getElementById('back-img').hidden = false;
      document.querySelector('.body').appendChild(backButton);
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
