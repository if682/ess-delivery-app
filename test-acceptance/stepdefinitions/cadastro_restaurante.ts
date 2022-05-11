import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^estou na tela de cadastro de restaurantes$/, async () => {
        await browser.get("http://localhost:4200/cadastro");
    });

    Given(/^o CNPJ "(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})" não é o CNPJ de nenhum restaurante cadastrado$/, async (cnpj) =>{
        
    });

    When(/^eu preencho o campo de "([^\"]*)" com "([^\"]*)"$/, async (field, content) => {
        await element(by.name(<string> field)).clear();

        await element(by.name(<string> field)).sendKeys(<string> content);
    });

    When(/^eu seleciono a opção cadastrar$/, async () => {
        await element(by.id("registrar_restaurante")).click();
    })

    Then(/^eu vejo uma mensagem de que o cadastro foi feito com sucesso$/, async() => {
        await element(by.className("success_popup")).isDisplayed();
    })

    Given(/^o CNPJ "(\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})" já é utilizado por algum restaurante no sistema$/, async (cnpj) =>{
        
    });

    Then(/^eu vejo uma mensagem de que o CNPJ já foi cadastrado e o cadastro não foi realizado, me perguntando se quero fazer login no sistema com esse CNPJ$/, async ()=>{
        await element(by.className("repeatedCnpj_error")).isDisplayed();
    })

    Then(/^eu vejo uma mensagem de que o campo "([^\"]*)" não foi preenchido, logo o cadastro não foi realizado$/, async (field) =>{
        await element(by.className("default_error")).isDisplayed();
        await element(by.className("default_error")).element(by.className("error_text")).getText().then(text => expect(Promise.resolve(text.includes(<string> field))).to.eventually.equal(true));
    })

    Then(/^eu vejo uma mensagem de que o campo "([^\"]*)" não foi preenchido corretamente, logo o cadastro não foi realizado$/, async (field) =>{
        await element(by.className("default_error")).isDisplayed();
        await element(by.className("default_error")).element(by.className("error_text")).getText().then(text => expect(Promise.resolve(text.includes(<string> field))).to.eventually.equal(true));
    })

    


})