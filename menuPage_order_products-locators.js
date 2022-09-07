/// <reference types="cypress" />

//locators
const input_field_value = '#menu > div > div.remaining > div.search-bar-container > div > div.visible > div > form > input[type=text]'
const order_bread = '#productssection > div > div:nth-child(2) > div > article:nth-child(1) > footer > button'
const button_save = '#app > div:nth-child(4) > div > div > div > div > div > footer > button'
const input_comment = '#app > div:nth-child(4) > div > div > div > div > div > div > textarea'
const button_save2 = '#app > div:nth-child(4) > div > div > div > div > div > footer > button'
const button_order = '#app > div.side-view > div > div > header > a > span:nth-child(1)'
const button_continue = '#app > main > div.container > div.columns > div:nth-child(1) > div.form-style.box-header > footer > button > span:nth-child(1)'
const calendar = '#test-calendar-date'
const date_picker ='#app > main > div.container > section > div:nth-child(2) > div:nth-child(1) > div > div.split-input.calendar-input-anchor > div:nth-child(1) > div.calendar-input-container > div > div'
const hour_picker = '#app > main > div.container > section > div:nth-child(2) > div:nth-child(1) > div > div.split-input.calendar-input-anchor > div.calendar-input-anchor > div.calendar-input-container > div > div > div.hours > div.test-hours > div'
const minute_picker = '#app > main > div.container > section > div:nth-child(2) > div:nth-child(1) > div > div.split-input.calendar-input-anchor > div.calendar-input-anchor > div.calendar-input-container > div > div > div.hours > div.test-minutes > div'
const button_continue_order ='#test-next > span:nth-child(1)'
const payment_at_pickup = '#test-payment-method-0'
const payment = '#test-pay-submit'
const submit_payment = '#test-pay-submit'
const success_header = '#test-success-header > h1'

//get-elements
const inpt_value = () => cy.get(input_field_value);
const ordr_bread = () => cy.get(order_bread);
const btn_save = () => cy.get(button_save);
const inpt_comm = () => cy.get(input_comment);
const btn_save_comm = () => cy.get(button_save2)
const btn_order = () => cy.get(button_order)
const btn_continue = () => cy.get(button_continue)
const btn_calendar = () => cy.get (calendar)
const date_pcker = () => cy.get (date_picker)
const hour_pckr = () => cy.get (hour_picker)
const minute_pickr = () => cy.get (minute_picker)
const btn_continue_ordr = () => cy.get (button_continue_order)
const pymnt_pickup = () => cy.get (payment_at_pickup)
const pay = () => cy.get (payment)
const sbmt_payment = () => cy.get (submit_payment)
const scss_header = () => cy.get (success_header)

//export
module.exports = {
    inpt_value,
    ordr_bread,
    btn_save,
    inpt_comm,
    btn_save_comm,
    btn_order,
    btn_continue,
    btn_calendar,
    date_pcker,
    hour_pckr,
    minute_pickr,
    btn_continue_ordr,
    pymnt_pickup,
    pay,
    sbmt_payment,
    scss_header

    
    }