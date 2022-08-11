// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cadastro', (nome,email,senha,senha2) => {
    cy.visit('cadastrar')
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha2)
    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('login')
    cy.get('[data-test="login-email"]').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('criar_perfil', 
(status,conhecimento,empresa,website,locale,github,bio,social,twr,fb,yt,li,ig,md) => { //
    cy.visit('criar-perfil')
    cy.get('#mui-component-select-status').click()
    cy.contains(status).click()
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimento)
    if(empresa){
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
    }
    if(website){
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(website)
    }
    if (locale) {
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(locale)
    }
    if(github){
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(github)
    }
    if(bio){
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(bio)
    }
    if(social){
        cy.get('[data-test="profile-socials"]').click()
        if(twr){
            cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(twr)
        }
        if(fb){
            cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(fb)
        }
        if (yt) {
            cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(yt)
        }
        if(li){
            cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(li)
        }
        if(ig){
            cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type(ig)
        }
        if(md){
            cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(md)
        }
    }
    cy.get('[data-test="profile-submit"]').click()
})