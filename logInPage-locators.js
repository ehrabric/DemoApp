/// <reference types="cypress" />

//locators
const input_field_email = '#app > main > div.container > section > form > input[type=text]:nth-child(4)'
const input_field_password = '#app > main > div.container > section > form > input[type=password]:nth-child(6)'
const button_login_main = '#app > main > div.container > section > form > div > button'
const button_forget_password = '#app > main > div.container > section > form > div > a'



//get-elements
const inpt_email = () => cy.get(input_field_email);
const inpt_password = () => cy.get(input_field_password);
const btn_login_mn = () => cy.get(button_login_main);
const btn_forget_pass = () => cy.get(button_forget_password);

//export
module.exports = {
    inpt_email,
    inpt_password,
    btn_login_mn,
    btn_forget_pass
}