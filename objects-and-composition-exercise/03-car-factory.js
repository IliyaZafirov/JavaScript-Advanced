// ⦁	Car Factory
// Write a program that assembles a car by giving requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:
// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
// Small engine: { power: 90, volume: 1800 }
// Normal engine: { power: 120, volume: 2400 }
// Monster engine: { power: 200, volume: 3500 }
// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint them any color.
// Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> }
// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
// Input
// You will receive an object as an argument to your function. The format will be as follows:
// { model: <model name>,
//   power: <minimum power>,
//   color: <color>,
//   carriage: <carriage type>,
//   wheelsize: <size> }
// Output
// Return the resulting car object as a result of your function. See the examples for details.

function solve(ordered) {

    let parts = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 },
    
    }

    let result = {
        model: ordered.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    }

    if (ordered.power <= 90) {
        result.engine = parts["Small engine"];
    } else if (ordered.power <= 120) {
        result.engine = parts["Normal engine"];
    } else {
        result.engine = parts["Monster engine"];
    }
    
    result.carriage = { type: ordered.carriage, color: ordered.color}

    let wheelsType = ordered.wheelsize % 2 == 0 ? ordered.wheelsize - 1 : ordered.wheelsize;

    result.wheels = new Array(4).fill(wheelsType)

    return result;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));