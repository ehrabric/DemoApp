/// <reference types="cypress" />

import * as MenuElements from '../support/element-locators/menuPage-locators';
import * as logIn_Elements from '../support/element-locators/LogInPage-locators';
import * as orderElements from '../support/element-locators/menuPage_order_products-locators';

beforeEach(function () {
    cy.getCookies().then(cookies => {
      const namesOfCookies = cookies.map(c => c.name)
      Cypress.Cookies.preserveOnce(...namesOfCookies)
    })
  })


before('Visit the page',function ()  {
    cy.visit('https://bakeronline.be/be-en/demo-shop');
    cy.get('#test-accept-cookies').click();
    cy.fixture('user_data').then(function(user){
        this.user=user;
    })
    
})

describe ('Log in registered user' ,function () {
    const serverDomain='@begfam45.mailosaur.net'

    it('Log in',{scrollBehavior: false }, function () {
        MenuElements.btn_log_in().click();
        logIn_Elements.inpt_email().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        logIn_Elements.inpt_password().type('1234567');
        logIn_Elements.btn_login_mn().click();
        MenuElements.menu_drpdwn().contains(this.user.name);
    })

    it ('Search and select product', function () {
        orderElements.inpt_value().type('Bread{enter}')
    
        cy.scrollTo('bottom')
        orderElements.ordr_bread().click()
        orderElements.btn_save().click()
        orderElements.inpt_comm().type('Comment')
        orderElements.btn_save_comm().click()
    })

    it ('buy product', {scrollBehavior: false }, function() {

        MenuElements.crt().click()
        orderElements.btn_order().click()
        orderElements.btn_continue().click()
        orderElements.btn_calendar().click();  
        orderElements.date_pcker().contains('27').click()
        orderElements.hour_pckr().contains('12').click()
        orderElements.minute_pickr().contains('00').click()
        cy.scrollTo('bottom')
        orderElements.btn_continue_ordr().click()
        orderElements.pymnt_pickup().click()
        orderElements.pay().click()
        orderElements.sbmt_payment().click()
        orderElements.scss_header().contains('Your order has been placed ')

    })
 

})