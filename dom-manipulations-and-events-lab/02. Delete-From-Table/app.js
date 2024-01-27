function deleteByEmail() {
    const tableRows = document.querySelectorAll('tbody tr');
    const inputValue = document.querySelector('input[type=text]').value;
    let result = document.getElementById('result');

    for (let tableRow of tableRows) {
        let tableData = document.querySelectorAll('td');

        for (let i = 0; i < tableData.length; i++) {

            if (tableData[i].textContent == inputValue) {
                tableData[i - 1].remove()
                tableData[i].remove()
                result.textContent = 'Deleted.';
            } else {
                result.textContent = 'Not found.';

            }

        }
    }
}