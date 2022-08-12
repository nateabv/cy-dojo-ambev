/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        //cy.cadastro('Nathan', 'nathan@nathan.com', '123456', '123456') //caso não exista
        cy.login('nathan@nathan.com', '123456')
    
        cy.get('.large').should('contain', 'Dashboard')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('usuario').then((user) => {
            cy.login(user.email,user.senha)
        })

        cy.get('.large').should('contain', 'Dashboard')
    });

    it('Deve fazer login com sucesso - Usando importação de dados', () => {
        cy.login(usuarios[2].usuario,usuarios[2].senha)
    
        cy.get('.large').should('contain', 'Dashboard')
    });

    
});