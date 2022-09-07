/// <reference types="cypress" />

//locators
const page_title = '#app > main > div.container > section > header > h1'
const input_field_email = '#app > main > div.container > section > div > div > div:nth-child(1) > input[type=email]:nth-child(2)'
const input_field_password = '#app > main > div.container > section > div > div > div:nth-child(1) > input[type=password]:nth-child(4)'
const input_field_repeat_password = '#app > main > div.container > section > div > div > div:nth-child(1) > input[type=password]:nth-child(6)'
const input_field_first_name = '#app > main > div.container > section > div > div > div:nth-child(2) > input[type=text]:nth-child(2)'
const input_field_last_name = '#app > main > div.container > section > div > div > div:nth-child(2) > input[type=text]:nth-child(4)'
const input_field_phone_number='#app > main > div.container > section > div > div > div:nth-child(2) > input[type=tel]:nth-child(6)'
const button_create_account = '#app > main > div.container > section > div > footer > button'


//get-elements
const pg_title = () => cy.get(page_title);
const inpt_email = () => cy.get(input_field_email);
const inpt_password = () => cy.get (input_field_password);
const inpt_rpt_password = () => cy.get (input_field_repeat_password);
const inpt_name = () => cy.get (input_field_first_name);
const inpt_lst_name = () => cy.get (input_field_last_name);
const inpt_phone_nmbr = () => cy.get(input_field_phone_number);
const btn_crt_acc = () => cy.get(button_create_account);

 
//export
module.exports = {
    inpt_email,
    pg_title,
    inpt_password,
    inpt_rpt_password,
    inpt_name,
    inpt_lst_name,
    inpt_phone_nmbr,
    btn_crt_acc,
    
}