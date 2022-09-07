//2.test
/// <reference types="cypress" />

import * as MenuElements from '../support/element-locators/menuPage-locators';
import * as logIn_Elements from '../support/element-locators/LogInPage-locators';


beforeEach ('Visit the page',function ()  {
    cy.visit('https://bakeronline.be/be-en/demo-shop');
    cy.get('#test-accept-cookies').click();
    cy.fixture('user_data').then(function(user){
        this.user=user;
    })
    
})

describe ('Log in registered user' ,{scrollBehavior: false },function () {
    const serverDomain='@begfam45.mailosaur.net'

    it('Log in', function () {
        MenuElements.btn_log_in().click();
        logIn_Elements.inpt_email().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        logIn_Elements.inpt_password().type('1234567');
        logIn_Elements.btn_login_mn().click();
        MenuElements.menu_drpdwn().contains(this.user.name);
    })

})

describe ('log out registered user' ,{scrollBehavior: false },function () {
    const serverDomain='@begfam45.mailosaur.net'
    
    it('Log out', function () {
        MenuElements.btn_log_in().click();
        logIn_Elements.inpt_email().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        logIn_Elements.inpt_password().type('1234567');
        logIn_Elements.btn_login_mn().click();
        MenuElements.menu_drpdwn().click();
        MenuElements.btn_log_out().click();
        MenuElements.btn_log_in().contains('Log in');
    })

})




