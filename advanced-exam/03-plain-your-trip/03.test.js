import { planYourTrip } from './03.js';
import { expect } from 'chai';

describe('Testing planYourTrip Object Functionality', () => {

    describe('choosingDestination(destination, season, year)', () => {

        it('should throw "Invalid Year!"', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
        })

        it('should throw "This destination is not what you are looking for."', () => {
            expect(() => planYourTrip.choosingDestination('Ski Bansko', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        })

        it('should throw "This destination is not what you are looking for."', () => {
            expect(() => planYourTrip.choosingDestination(['Ski Bansko'], 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        })

        it('should return "Great choice! The Winter is the perfect time to visit the Ski Resort."', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        })

        it('should return "Consider visiting during the Winter for the best experience at the Ski Resort."', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
        })


    })

    describe('exploreOptions (activities, activityIndex)', () => {

        const activities = ["Skiing", "Snowboarding", "Winter Hiking"];

        it('should return Snowboarding, Winter Hiking Test 1', () => {
            expect(planYourTrip.exploreOptions(activities, 0)).to.equal(`Snowboarding, Winter Hiking`);
        })

        it('should return Snowboarding, Winter Hiking Test 2', () => {
            expect(planYourTrip.exploreOptions(activities, 0)).to.deep.equal(`Snowboarding, Winter Hiking`);
        })

        it('should return Skiing, Winter Hiking Test 3', () => {
            expect(planYourTrip.exploreOptions(activities, 1)).to.equal(`Skiing, Winter Hiking`);
        })

        it('should return Skiing, Winter Hiking Test 4', () => {
            expect(planYourTrip.exploreOptions(activities, 1)).to.deep.equal(`Skiing, Winter Hiking`);
        })

        it('should return Skiing, Snowboarding Test 5', () => {
            expect(planYourTrip.exploreOptions(activities, 2)).to.equal(`Skiing, Snowboarding`);
        })

        it('should return Skiing, Snowboarding Test 6', () => {
            expect(planYourTrip.exploreOptions(activities, 2)).to.deep.equal(`Skiing, Snowboarding`);
        })

        it('should throw "Invalid Information!" Test 1', () => {
            expect(() => planYourTrip.exploreOptions(activities, 3)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 2', () => {
            expect(() => planYourTrip.exploreOptions(activities, -3)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 3', () => {
            expect(() => planYourTrip.exploreOptions(activities, '3')).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 7', () => {
            expect(() => planYourTrip.exploreOptions(activities, 4443)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 8', () => {
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 7', () => {
            expect(() => planYourTrip.exploreOptions(54, 0)).to.throw("Invalid Information!");
        })

    })

    describe('estimateExpenses (distanceInKilometers, fuelCostPerLiter)', () => {

        it('should return "The trip is budget-friendly, estimated cost is $25.00." Test 1', () => {
            expect(planYourTrip.estimateExpenses(5, 5)).to.equal("The trip is budget-friendly, estimated cost is $25.00.");
        })

        it('should return "The trip is budget-friendly, estimated cost is $25.00." Test 1', () => {
            expect(planYourTrip.estimateExpenses(5, 5)).to.deep.equal("The trip is budget-friendly, estimated cost is $25.00.");
        })

        it('should return "The trip is budget-friendly, estimated cost is $500.00." Test 2', () => {
            expect(planYourTrip.estimateExpenses(20, 25)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
        })

        it('should return "The trip is budget-friendly, estimated cost is $500.00." Test 2', () => {
            expect(planYourTrip.estimateExpenses(20, 25)).to.deep.equal("The trip is budget-friendly, estimated cost is $500.00.");
        })

        it('should return "The estimated cost for the trip is $1250.00, plan accordingly." Test 2', () => {
            expect(planYourTrip.estimateExpenses(25, 50)).to.equal("The estimated cost for the trip is $1250.00, plan accordingly.");
        })

        it('should return "The estimated cost for the trip is $1250.00, plan accordingly." Test 2', () => {
            expect(planYourTrip.estimateExpenses(25, 50)).to.deep.equal("The estimated cost for the trip is $1250.00, plan accordingly.");
        })

        it('should return "The estimated cost for the trip is $5000.00, plan accordingly." Test 2', () => {
            expect(planYourTrip.estimateExpenses(50, 100)).to.equal("The estimated cost for the trip is $5000.00, plan accordingly.");
        })

        it('should return "The estimated cost for the trip is $5000.00, plan accordingly." Test 2', () => {
            expect(planYourTrip.estimateExpenses(50, 100)).to.deep.equal("The estimated cost for the trip is $5000.00, plan accordingly.");
        })

        it('should throw "Invalid Information!" Test 1', () => {
            expect(() => planYourTrip.estimateExpenses('5', 5)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 2', () => {
            expect(() => planYourTrip.estimateExpenses(5, '5')).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 3', () => {
            expect(() => planYourTrip.estimateExpenses(-5, 5)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 4', () => {
            expect(() => planYourTrip.estimateExpenses(5, -5)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 5', () => {
            expect(() => planYourTrip.estimateExpenses(5, 0)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 6', () => {
            expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 7', () => {
            expect(() => planYourTrip.estimateExpenses(0, true)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 7', () => {
            expect(() => planYourTrip.estimateExpenses(5, true)).to.throw("Invalid Information!");
        })

        it('should throw "Invalid Information!" Test 8', () => {
            expect(() => planYourTrip.estimateExpenses(true, 5)).to.throw("Invalid Information!");
        })
        
        it('should throw "Invalid Information!" Test 8', () => {
            expect(() => planYourTrip.estimateExpenses(true, 0)).to.throw("Invalid Information!");
        })
    })

})