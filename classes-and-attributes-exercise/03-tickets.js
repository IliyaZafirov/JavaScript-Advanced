// ⦁	Tickets
// Write a program that manages a database of tickets. A ticket has a destination, a price, and a status. Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price, or status, depending on the second parameter that your program received. Always sort in ascending order (the default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples for more information.
// Input
// Your program will receive two parameters - an array of strings and a single string.
// Output
// Return a sorted array of all the tickets that were registered.

function ticketStatistics(arrOfTickets, sortCriteria) {

    const result = [];

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static sort(result, criteria) {
            return result.sort((a, b) => {
                return criteria === 'price' ? a[criteria] - b[criteria] : a[criteria].localeCompare(b[criteria]);
            })
        }
    }

    for (const el of arrOfTickets) {
        const [destination, price, status] = el.split('|');
        const instance = new Ticket(destination, price, status);
        result.push(instance);
    }

    return Ticket.sort(result, sortCriteria);
}

// function ticketStatistics(arrOfTickets, sortCriteria) {

//     const result = [];

//     class Ticket {

//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = Number(price);
//             this.status = status;
//         }


//     }

//     for (const el of arrOfTickets) {
//         const [destination, price, status] = el.split('|');
//         const instance = new Ticket(destination, price, status);
//         result.push(instance);
//     }

//     function sortByCriteria(ticketArr, criteria) {
//         return result.sort((a, b) => {
//             return criteria === 'price' ? a[criteria] - b[criteria] : a[criteria].localeCompare(b[criteria]);
//         })
//     }

//     return sortByCriteria(result, sortCriteria);

// }

const res = ticketsStatistics(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');


console.log(res);

console.log('------------');

const res2 = ticketsStatistics(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status')

console.log(res2);