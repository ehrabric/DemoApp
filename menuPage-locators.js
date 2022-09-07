/// <reference types="cypress" />

//locators
const button_register = '#menu > div > div.remaining > div.items > div.visible > a:nth-child(2)'
const menu_dropdown =  '#menu > div > div.remaining > div.items > div.visible > button'
const button_log_in = '#menu > div > div.remaining > div.items > div.visible > a:nth-child(1)'
const button_log_out = '#app > div:nth-child(6) > div > div > div > a:nth-child(3)'
const cart = '#menu > div > div.remaining > div.items > div.visible > div > div'


//get-elements
const btn_register = () => cy.get(button_register);
const menu_drpdwn = () => cy.get(menu_dropdown);
const btn_log_in = () => cy.get(button_log_in);
const btn_log_out = () => cy.get(button_log_out);
const crt = () => cy.get(cart);
//export
module.exports = {
        
        btn_register,
        menu_drpdwn,
        btn_log_in,
        btn_log_out,
        crt
}