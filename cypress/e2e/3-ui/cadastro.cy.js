/// <reference types="cypress"/>
const faker = require('faker-br');


describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar') //visita a página
    });

    it('Cadastro com sucesso', () => {
        
        let  nome = 'Nathan ' + faker.name.lastName();
        let  email = faker.internet.email(nome);

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        //cy.wait(5000)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-submit"]').click()

        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
    });

    it.only('Deve validar mensagem quando cadastrar com email repetido', () => {
        let nome = 'Nathan ' + faker.name.lastName();
        let email = faker.internet.email(nome);
        cy.cadastro(nome, email, 'teste@123', 'teste@123')
        cy.get('[data-test="navbar-logout"]').click() //logout
        cy.cadastro(nome, email, 'teste@123', 'teste@123')

        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });


});