function lockedProfile() {
    let btns = Array.from(document.querySelectorAll('button'));

    btns.forEach(x => x.addEventListener('click', onClickHandler));

    function onClickHandler(e) {
        const hiddenInfo = e.currentTarget.parentElement.querySelector('div');
        const currentRadioBtn = e.currentTarget.parentElement.querySelector("input[type='radio']:checked");

        if (currentRadioBtn.value == 'unlock') {
            if (e.currentTarget.textContent == 'Show more') {
                // debugger
                e.currentTarget.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else {
                e.currentTarget.textContent = 'Show More';
                hiddenInfo.style.display = 'none';
            }
        }
    }
}