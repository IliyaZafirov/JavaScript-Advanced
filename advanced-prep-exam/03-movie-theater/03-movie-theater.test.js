import { movieTheater } from './03-movie-theater.js';
import { expect } from 'chai';


describe('movieTheater Object Functionality', () => {
    describe('ageRestrictions (movieRating)', () => {
        it('should return `All ages admitted to watch the movie`', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        })
        it('should return `Parental guidance suggested! Some material may not be suitable for pre-teenagers`', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        })
        it('should return `Restricted! Under 17 requires accompanying parent or adult guardian`', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        })
        it('should return `No one under 17 admitted to watch the movie`', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        })
        it('should return `There are no age restrictions for this movie`', () => {
            expect(movieTheater.ageRestrictions('string')).to.equal(`There are no age restrictions for this movie`);
        })
    })


    describe('moneySpent (tickets, food, drinks)', () => {
        it('should return `The total cost for the purchase with applied discount is $44.00', () => {
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 44.00`);
        })
        it('should return `The total cost for the purchase is 23.50`', () => {
            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`);
        })

        it('should throw Invalid input Test 1', () => {
            expect(() => movieTheater.moneySpent('string', ['Nachos'], ['Soda'])).to.throw(`Invalid input`);
        })

        it('should throw Invalid input Test 2', () => {
            expect(() => movieTheater.moneySpent('string', ['Nachos'], ['Soda'])).to.throw(`Invalid input`);
        })

        it('should throw Invalid input Test 3', () => {
            expect(() => movieTheater.moneySpent('string', 'Nachos', ['Soda'])).to.throw(`Invalid input`);
        })

        it('should throw Invalid input Test 4', () => {
            expect(() => movieTheater.moneySpent('string', ['Nachos'], 'Soda')).to.throw(`Invalid input`);
        })

        it('should throw Invalid input Test 5', () => {
            expect(() => movieTheater.moneySpent(1, 1, ['Soda'])).to.throw(`Invalid input`);
        })

        it('should throw Invalid input Test 6', () => {
            expect(() => movieTheater.moneySpent(1, ['Nachos'], '1')).to.throw(`Invalid input`);
        })

        describe('reservation (rowsArray, neededSeatsCount)', () => {
            it('should return', () => {
                expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2)
            })

            it('should return', () => {
                expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1)
            })

            it('should throw Invalid input Test 1', () => {
                expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '5')).to.throw('Invalid input')
            })

            it('should throw Invalid input Test 2', () => {
                expect(() => movieTheater.reservation([], '5')).to.throw('Invalid input');
            })
        })
    })
})