function solve(month, year) {

    function daysInMonth() {
        return new Date(year, month, 0).getDate();
    }

    let date = new Date();

    date.setMonth(month)
    date.setFullYear(year)

    console.log(daysInMonth(month, year))

}

solve(1, 2012)