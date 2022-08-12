/// <reference types="cypress" />

describe('Teste de API', () => {
    
    var dojo = {
        aula: "API",
        duracao: 3,
        professor: "Fabio"
    }
    var numero = [0,2,4,6,8,10]

    var usuarios = [
        {
            "usuario": "Fábio",
            "senha": "teste@123"
        },
        {
            "usuario": "Amanda",
            "senha": "teste@123", 
            "perfil": "admin"
        },
        {
            "usuario": "nathan@nathan.com",
            "senha": "123456"
        }
    
    ]

    it('Teste Dojo', () => {
        expect(dojo.aula).to.equal("API")
        expect(dojo.duracao).to.equal(3)
        expect(dojo.professor).to.contains("Fabio")
    });

    it('Teste Usuarios', () => {
        expect(usuarios[2].usuario).equal("nathan@nathan.com")
        expect(usuarios[2].senha).contains(123)
        cy.log(usuarios[0].usuario)
    });

});