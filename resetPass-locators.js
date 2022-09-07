/// <reference types="cypress" />

//locators
const input_field_email_reset = '#app > main > div.container > section > form > div.grid > div:nth-child(1) > input[type=text]'
const button_send = '#app > main > div.container > section > form > div.button-footer > button'
const input_new_password = '#page-password'
const repeat_new_password = '#app > main > div.container > section > form > input[type=password]:nth-child(4)'
const button_save = '#app > main > div.container > section > form > div > button'
//get-elements
const inpt_email_reset = () => cy.get(input_field_email_reset);
const btn_send = () => cy.get(button_send);
const inpt_new_pass = () => cy.get(input_new_password );
const rpt_new_pass = () => cy.get(repeat_new_password );
const btn_save = () => cy.get(button_save);


//export
module.exports = {
    inpt_email_reset,   
    btn_send,
    inpt_new_pass,
    rpt_new_pass,
    btn_save
}