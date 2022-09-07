//1.test

/// <reference types="cypress" />

import * as MenuElements from '../support/element-locators/menuPage-locators';
import * as RegisterElements from '../support/element-locators/registerPage-locators';


beforeEach('Visit the page',function ()  {
    cy.visit('https://bakeronline.be/be-en/demo-shop');
    cy.get('#test-accept-cookies').click();
    MenuElements.btn_register().click();
    cy.fixture('user_data').then(function(user){
        this.user=user;
    })
    
})

describe ('Visitor clicks on Register, verify it opens Create account', () => {
    it('Clicks on Register', () => {
        RegisterElements.pg_title().contains('Create account');
    })
})

describe ('Create account', { scrollBehavior: false }, function (){
    const serverDomain='@begfam45.mailosaur.net'
    
    
    it('Input values, submit form', function () {
        RegisterElements.inpt_email().type(this.user.name + serverDomain).should('have.value',this.user.name + serverDomain);
        RegisterElements.inpt_password().type('1234567')
        RegisterElements.inpt_rpt_password().type('1234567')
        RegisterElements.inpt_name().type(this.user.name).should('have.value',this.user.name);
        RegisterElements.inpt_lst_name().type(this.user.last_name).should('have.value',this.user.last_name);
        RegisterElements.inpt_phone_nmbr().type('12345678').should('have.value','12345678');
        RegisterElements.btn_crt_acc().click();
        cy.get('#app > main > div.overlay-container > div > div > div.footer > button').click();
        cy.get('#app > main > div.overlay-container > div > div > div.footer > button').click();
        cy.wait(3000)
        MenuElements.menu_drpdwn().contains(this.user.name);
    });
    
});
