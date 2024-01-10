function solve(fruit, weightGrams, pricePerKilos) {

    let weightKilos = weightGrams / 1000;

    console.log(`I need $${(pricePerKilos * weightKilos).toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`);

}
solve('orange', 2500, 1.80)