/// <reference types="cypress"/>
//const faker = require('faker-br'); //faker nao funciona
import cadastroPage from "../../support/pages/cadastro.page"

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar') //visita a página
    });

    it('Cadastro com sucesso', () => {
        
        //let  nome = 'Nathan ' + faker.name.lastName(); //faker nao funciona
        //let  email = faker.internet.email(nome); //faker nao funciona

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        //cy.wait(5000)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="register-submit"]').click()

        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
    });

    it('Deve validar mensagem quando cadastrar com email repetido', () => {
        //let nome = 'Nathan ' + faker.name.lastName(); //faker nao funciona
        //let email = faker.internet.email(nome); //faker nao funciona
        let nome = 'Nathan';
        let email = 'testenateabv'+Math.floor(Math.random() * 100)+'@nateabv.com.br';
        cy.cadastro(nome, email, 'teste@123', 'teste@123')
        cy.get('[data-test="navbar-logout"]').click() //logout
        cy.cadastro(nome, email, 'teste@123', 'teste@123')

        cy.get('[data-test="alert"]').should('contain', 'Usuário já registrado')
    });

    it.only('Deve fazer cadastro com sucesso - Usando Pages', () => {
        let nome = 'Nathan';
        let email = 'testenateabv'+Math.floor(Math.random() * 100)+'@nateabv.com.br';
        cadastroPage.cadastro(nome,email,'teste@123','teste@123')
        
        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
    });
});