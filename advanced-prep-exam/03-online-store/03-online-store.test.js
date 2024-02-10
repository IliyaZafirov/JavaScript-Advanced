import { onlineStore } from './03-online-store.js';
import { expect } from 'chai';

describe('Online Store Functionality Testing', () => {
    describe('isProductAvailable(product, stockQuantity)', () => {
        it('should return Sorry, Shampoo is currently out of stock. Test 1', () => {
            expect(onlineStore.isProductAvailable('Shampoo', 0)).to.equal('Sorry, Shampoo is currently out of stock.')
        })
        it('should return Sorry, Shampoo is currently out of stock. Test 2', () => {
            expect(onlineStore.isProductAvailable('Shampoo', -1)).to.equal('Sorry, Shampoo is currently out of stock.')
        })

        it('should return Great! Shampoo is available for purchase. Test 1', () => {
            expect(onlineStore.isProductAvailable('Shampoo', 1)).to.equal('Great! Shampoo is available for purchase.')
        })

        it('should return Great! Shampoo is available for purchase. Test 2', () => {
            expect(onlineStore.isProductAvailable('Shampoo', 2)).to.equal('Great! Shampoo is available for purchase.')
        })

        it('should throw error Invalid input. Test 1', () => {
            expect(() => onlineStore.isProductAvailable(123, 2)).to.throw('Invalid input.')
        })

        it('should throw error Invalid input. Test 2', () => {
            expect(() => onlineStore.isProductAvailable('Shampoo', '2')).to.throw('Invalid input.')
        })
    })

    describe('canAffordProduct(productPrice, accountBalance)', () => {
        it(`should return You don't have sufficient funds to buy this product. If the result is less than 0 `, () => {
            expect(onlineStore.canAffordProduct(22, 20)).to.equal(`You don't have sufficient funds to buy this product.`)
        })
        it(`should return Product purchased. Your remaining balance is $0.`, () => {
            expect(onlineStore.canAffordProduct(20, 20)).to.equal(`Product purchased. Your remaining balance is $0.`)
        })

        it(`should throw error Invalid input. Test 1`, () => {
            expect(() => onlineStore.canAffordProduct('20', 20)).to.throw(`Invalid input.`)
        })

        it(`should throw error Invalid input. Test 2`, () => {
            expect(() => onlineStore.canAffordProduct(20, '20')).to.throw(`Invalid input.`)
        })
    })

    describe('getRecommendedProducts(productList, category)', () => {
        it('should find and return product names that match the specified category Test 1', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Swimsuit", category: "Swimming" }, { name: "Swim Glasses", category: "Swimming" }], 'Swimming')).to.equal('Recommended products in the Swimming category: Swimsuit, Swim Glasses')
        })

        it('should find and return product names that match the specified category Test 2', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Swimsuit", category: "Swimming" }, { name: "Swim Glasses", category: "Swimming" }], 'Photography')).to.equal('Recommended products in the Photography category: Camera')
        })

        it('the function should return: Sorry, we currently have no recommended products in the ${category} category. If there are no recommended products in the specified category Test 1', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Swimsuit", category: "Swimming" }, { name: "Swim Glasses", category: "Swimming" }], 'Mining')).to.equal('Sorry, we currently have no recommended products in the Mining category.')
        })

        it('the function should return: Sorry, we currently have no recommended products in the ${category} category. If there are no recommended products in the specified category Test 2', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Swimsuit", category: "Swimming" }, { name: "Swim Glasses", category: "Swimming" }], 'Ski')).to.equal('Sorry, we currently have no recommended products in the Ski category.')
        })

        it('should test validation for the input productList parameter(should be array)', () => {
            expect(() => onlineStore.getRecommendedProducts('string', 'Ski')).to.throw('Invalid input.')
        })

        it('should test validation for the input category parameter(should be string)', () => {
            expect(() => onlineStore.getRecommendedProducts('string', [])).to.throw('Invalid input.')
        })
    })
})