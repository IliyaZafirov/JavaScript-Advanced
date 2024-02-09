// Deck of Cards
// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of cards (space separated). Use the solution from the previous task to generate the cards. 
// Print `Invalid card: ${card}` when an invalid card definition is passed as input. 
// Input / Output
// The function takes an array of strings as a parameter. Print the list of cards as string, separated by space.


function solve(arr) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    let result = [];

    for (const el of arr) {

        if (el.length > 2) {
            let tokens = el.split('');
            const face = tokens[0] + tokens[1];
            const suit = tokens[2];

            if (!validFaces.includes(face)) {
                result = [face + suit];
                console.log(`Invalid card: ${result}`);
                return `Invalid card: ${result}`;
            }

            if (!validSuits.hasOwnProperty(suit)) {
                result = [el];
                console.log(`Invalid card: ${result}`);
                return `Invalid card: ${result}`;
            }
            // console.log(face, suit);
            result.push((face + validSuits[suit]).toString());

        } else {
            if (!validFaces.includes(el[0])) {
                result = [el];
                console.log(`Invalid card: ${result}`);
                return `Invalid card: ${result}`;
            }
            if (!validSuits.hasOwnProperty(el[1])) {
                result = [el];
                console.log(`Invalid card: ${result}`);
                return `Invalid card: ${result}`;
            }
            result.push((el[0] + validSuits[el[1]]).toString());
        }

    }
    console.log(result.join(' '));
    return result.join(' ');
}
// solve(['AS', '10D', 'KH', '2C'])
// solve(['5S', '3D', 'QD', '2Z'])
solve(['20Z'])