window.addEventListener("load", solve);

function solve() {
  const input = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    desc: document.getElementById('task')
  };

  const inProgress = document.getElementById('in-progress');
  const finished = document.getElementById('finished');


  document.getElementById('form-btn').addEventListener('click', onSubmit);

  function onSubmit() {

    if (input.firstName.value == '' || input.lastName.value == '' || input.age.value == '' || input.gender.value == '' || input.desc.value == '') {
      return;
    }

    const li = create('li', '', 'each-line');
    const article = document.createElement('article');
    article.appendChild(create('h4', `${input.firstName.value} ${input.lastName.value}`));
    article.appendChild(create('p', `${input.gender.value}, ${input.age.value}`));
    article.appendChild(create('p', `Dish description: ${input.desc.value}`));
    li.appendChild(article);

    const editButton = create('button', 'Edit', 'edit-btn');
    const completeButton = create('button', 'Mark as complete', 'complete-btn');

    li.appendChild(editButton);
    li.appendChild(completeButton);
    inProgress.appendChild(li);

    document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) + 1;
    const values = [input.firstName.value, input.lastName.value, input.age.value, input.gender.value, input.desc.value];
    Object.values(input).forEach(el => el.value = '');

    editButton.addEventListener('click', onEdit);
    completeButton.addEventListener('click', onComplete);

    function onEdit() {
      li.remove();
      document.getElementById('first-name').value = values[0];
      document.getElementById('last-name').value = values[1];
      document.getElementById('age').value = values[2];
      document.getElementById('genderSelect').value = values[3];
      document.getElementById('task').value = values[4];
      document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) - 1;


    }

    function onComplete() {
      finished.appendChild(li);
      editButton.remove();
      completeButton.remove();
      document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) - 1;

      document.getElementById('clear-btn').addEventListener('click', () => {
        li.remove();
      });
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
