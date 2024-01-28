function encodeAndDecodeMessages() {
    const [encode, decode] = document.querySelectorAll('textarea');
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');

    encodeBtn.addEventListener('click', () => {
        let charCodes = [];

        for (let el of encode.value) {
            charCodes.push(el.charCodeAt(0));
        }

        const result = charCodes.map(x => x += 1);
        let output = '';
        output = String.fromCharCode(...result);

        decode.value = output;
        encode.value = '';
    });

    decodeBtn.addEventListener('click', () => {
        let codedChars = [];

        for (let el of decode.value) {
            codedChars.push(el.charCodeAt(0));
        }

        const result = codedChars.map(x => x -= 1);
        let output = '';
        output = String.fromCharCode(...result);

        decode.value = output;
        encode.value = '';
    });
}