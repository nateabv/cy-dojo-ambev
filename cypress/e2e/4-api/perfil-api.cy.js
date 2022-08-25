/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Perfil via API', () => {
    
    let token

    beforeEach(() => {
        cy.token(usuarios[2].usuario,usuarios[2].senha).then((tkn) =>{
            token = tkn
        })
    });

    it('Deve consultar(GET) perfil do usuário', () => {
        
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                "email": "nathan@nathan.com",
                "password": "123456"
            }
        }).then((response) =>{
            //cy.log(response.body.jwt)
            let token = response.body.jwt

            cy.request({
                method: 'GET',
                url: 'api/profile/me',
                headers: {
                    Cookie: token
                }
            })
        }).then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.company).eq("Ambev Tech")
            expect(response.body.skills[0]).eq("Cypress")
            expect(response.body.location).contains("São")
        })

    });

    it.only('Deve consultar perfil do usuário com token dinâmico', () => {
        cy.request({
            method: 'GET',
            url: 'api/profile/me',
            headers: {
                Cookie: token
            }
        }).then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.company).eq("Ambev Tech")
            expect(response.body.skills[0]).eq("Cypress")
            expect(response.body.location).contains("São")
        })
    });
});