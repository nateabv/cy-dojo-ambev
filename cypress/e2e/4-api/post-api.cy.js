/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"


describe('Funcionalidade: Post via API', () => {
    
    let token

    beforeEach(() => {
        cy.token(usuarios[2].usuario,usuarios[2].senha).then((tkn) =>{
            token = tkn
        })
    });

    it('Deve criar um post via API', () => {
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: {
                Cookie: token,
            },
            body: {
                text: "teste 1"
            }
        }).then((response) =>{
            expect(response.status).equal(201)
            
        })
    });


});