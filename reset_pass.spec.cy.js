//3.test

/// <reference types="cypress" />

import * as MenuElements from '../support/element-locators/menuPage-locators';
import * as logIn_Elements from '../support/element-locators/LogInPage-locators';
import * as resetPassElements from '../support/element-locators/resetPass-locators';

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

describe ('reset password' ,{scrollBehavior: false },function () {
    const serverId = 'begfam45'; 
    const serverDomain='@begfam45.mailosaur.net';
    let passwordResetLink;
    let newPassword;
   

    it('Click reset', function () {
        MenuElements.btn_log_in().click();
        logIn_Elements.btn_forget_pass().click();
        resetPassElements.inpt_email_reset().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        resetPassElements.btn_send().click();
        cy.wait(40000);    
    })
    

    it('Get a Password Reset email', function () {
        cy.mailosaurGetMessage(serverId, {
            sentTo: this.user.name + serverDomain,
            subject: 'Change password - Bakeronline'
        }).then(email => {
            cy.log(email.subject);
            passwordResetLink = email.text.links[0].href;
            cy.log(email.text.links[0].href)
        })

    })
    
        
    it('take value from input', function () {
        this.newPassword = '987654321';
    });
    
   it('Follows the link from the email', function () {
        
        cy.visit(passwordResetLink)
        resetPassElements.inpt_new_pass().type(this.newPassword);
        resetPassElements.rpt_new_pass().type(this.newPassword);
        resetPassElements.btn_save().click()
    })

    
    it('Log out_log in', function () {
        MenuElements.menu_drpdwn().click();
        MenuElements.btn_log_out().click();
        MenuElements.btn_log_in().contains('Log in');
        MenuElements.btn_log_in().click();
        logIn_Elements.inpt_email().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        logIn_Elements.inpt_password().type(this.newPassword);
    })   
    
})
