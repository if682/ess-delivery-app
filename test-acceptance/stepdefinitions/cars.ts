import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I'm on the page "([^\"]*)"$/, async (name) => {
        await browser.get("http://localhost:4200/cars");
        await expect(browser.getTitle()).to.eventually.equal(name);
    })

    Given(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" doesn't appear on the list$/, async (color, name, brand, price) => {
        expect((await element.all(by.id(`car-${name}-${brand}-${price}-${color}`))).length).to.equal(0);
    })

    When(/^I fill the name fild with "([^\"]*)", the brand with "([^\"]*)", the price with "(\d*)", the color with "([^\"]*)"$/, 
        async (name, brand, price, color) => {
            await element(by.id("what")).clear();
            await element(by.id("car-brand-input")).clear();
            await element(by.id("car-price-input")).clear();
            await element(by.id("car-color-input")).clear();

            await element(by.id("what")).sendKeys(<string> name);
            await element(by.id("car-brand-input")).sendKeys(<string> brand);
            await element(by.id("car-price-input")).sendKeys(<string> price);
            await element(by.id("car-color-input")).sendKeys(<string> color);
    })

    When(/^I confirm the registration$/, async () => {
        await element(by.id("register-car")).click();
    })

    Then(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" appears on the list$/, async (color, name, brand, price) => {
        expect((await element.all(by.id(`car-${name}-${brand}-${price}-${color}`))).length).to.equal(1);
    })
})