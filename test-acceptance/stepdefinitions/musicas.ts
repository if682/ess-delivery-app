import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I'm on the page "([^\"]*)"$/, async (nome: string) => {
        await browser.get("http://localhost:4200/musicas");
        await expect(browser.getTitle()).to.eventually.equal(nome);
    })

    Given(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" doesn't appear on the list$/, async (nome:string, artista_banda:string, ano_lancamento:number) => {
        expect((await element.all(by.id(`musica-${nome}-${artista_banda}-${ano_lancamento}`))).length).to.equal(0);
    })

    When(/^I fill the nome fild with "([^\"]*)", the artista_banda with "([^\"]*)", the ano_lancamento with "(\d*)"$/, 
        async (nome:string, artista_banda:string, ano_lancamento:number) => {
            await element(by.id("what")).clear();
            await element(by.id("musica-artista_banda-input")).clear();
            await element(by.id("musica-ano_lancamento-input")).clear();

            await element(by.id("what")).sendKeys(<string> nome);
            await element(by.id("musica-artista_banda-input")).sendKeys(<string> artista_banda);
            await element(by.id("musica-ano_lancamento-input")).sendKeys(<number> ano_lancamento);
    })

    When(/^I confirm the registration$/, async () => {
        await element(by.id("register-musica")).click();
    })

    Then(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" appears on the list$/, async (nome:string, artista_banda:string, ano_lancamento:number) => {
        expect((await element.all(by.id(`musica-${nome}-${artista_banda}-${ano_lancamento}`))).length).to.equal(1);
    })
})