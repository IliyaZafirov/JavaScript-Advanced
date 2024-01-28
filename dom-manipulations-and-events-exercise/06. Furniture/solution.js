function solve() {

  const [inputText, resultText] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const tableBody = document.querySelector('tbody');

  generateBtn.addEventListener('click', () => {
    let data = JSON.parse(inputText.value);

    for (let item of data) {
      createRowAndAppend(item)
      console.log(item);
    }
  })

  function createRowAndAppend(item) {
    const tr = document.createElement('tr');
    tr.innerHTML += createTableData(`<img src="${item.img}">`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTableData(`<input type='checkbox'>`);
    tableBody.appendChild(tr);
  }

  function createTableData(item) {
    return `<td>${item}</td>`
  }

  buyBtn.addEventListener('click', (e) => {
    let name = [];
    let totalPrice = 0;
    let sumDecFac = 0;

    const selectedRows = document.querySelectorAll("input[type='checkbox']:checked");

    for (let checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFacRef] = Array.from(checkbox.parentElement.parentElement.children);
      name.push(nameRef.children[0].textContent);
      totalPrice += Number(priceRef.children[0].textContent);
      sumDecFac += Number(decFacRef.children[0].textContent);
      // debugger
    }

    resultText.value = `Bought furniture: ${name.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${sumDecFac / name.length}`
  })

}