// ⦁	Rectangle
// Write a function that creates and returns a rectangle object. The rectangle needs to have a width (Number), height (Number), and color (String) properties, which are set via arguments during creation, and a calcArea() method, that calculates and returns the rectangle’s area.
// Input
// The function will receive three valid parameters – width (Number), height (Number), and color (String).
// Output
// Your function must return an object with all properties and methods 

function rectangle(width, height, color) {

    let rect = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    }

    rect.color = color[0].toUpperCase() + color.slice(1);
    return rect
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());