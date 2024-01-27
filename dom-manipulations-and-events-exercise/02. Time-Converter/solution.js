function attachEventsListeners() {

    const buttons = document.querySelectorAll("input[type='button']");

    for (let btn of buttons) {
        btn.addEventListener('click', convertHandler)
    }

    function convertHandler(e) {

        const currentUnitInput = e.currentTarget.parentElement.children[1];
        const value = Number(currentUnitInput.value);
        const unit = currentUnitInput.id;

        switch (unit) {
            case 'days': propagateNewValue(value); break;
            case 'hours': propagateNewValue(value / 24); break;
            case 'minutes': propagateNewValue(value / 24 / 60); break;
            case 'seconds': ; propagateNewValue(value / 24 / 60 / 60); break;
        }
    }

    function propagateNewValue(days) {
        const inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;

    }
    debugger
}
