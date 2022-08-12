/// <reference types="cypress" />


describe('Funcionalidade: Cadastro via API', () => {

    it('Deve realizar cadastro com sucesso', () => {
        
        var email = "nathan" + Math.floor(Math.random()) *1000 + "@teste.com"
        var email2 = `fabio${Math.floor(Math.random() * 100000)}@teste.com`

        cy.request({
            method: 'POST',
            url:'/api/users',
            body: {
                "name": "Nathan Teste API",
                "email": email2,
                "password": "123456"
            }
        }).then((response) =>{
            expect(response.status).eq(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(500)
        })

    });

});
    