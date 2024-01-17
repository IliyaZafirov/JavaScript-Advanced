// City Record
// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.


function solve(name, population, treasury) {

    let result = {}

    result['name'] = name;
    result['population'] = population;
    result['treasury'] = treasury;

  return result
}

solve('Tortuga',
    7000,
    15000)