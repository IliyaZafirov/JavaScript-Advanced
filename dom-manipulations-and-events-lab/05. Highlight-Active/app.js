function focused() {
    const sections = document.querySelectorAll('input[type=text]');

    for (let section of sections) {
        section.addEventListener('focus', (event) => {
            event.target.parentNode.classList.add('focused');
        })

        section.addEventListener('blur', (event) => {
            event.target.parentNode.classList.remove('focused');
        })
    }
}