function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let [city, lati, longi] = arr[i].split('|').map(x => x.trim()).filter(x => !!x);
        // lati = Number(lati).toFixed(2);
        // longi = Number(longi).toFixed(2);

        if (city == 'Town') {
            continue;
        }
        result.push({ 'Town': city, 'Latitude': +lati, 'Longitude': +longi })
    }
    console.log(JSON.stringify(result));

}
solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'])

// solve(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'])