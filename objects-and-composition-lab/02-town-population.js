// Town Population
// You have been tasked to create a registry for different towns and their population.
// Input
// The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.

function solve(arr) {

    let registry = {};

    for(let el of arr) {
        let [town, population] = el.split(' <-> ');
        // console.log(town);
        if (!registry.hasOwnProperty(town)) {
            registry[town] = Number(population);
        } else {
            registry[town] += Number(population);
        }
    }

    for (let prop in registry) {
        console.log(prop, ':', registry[prop]);
    }

}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])