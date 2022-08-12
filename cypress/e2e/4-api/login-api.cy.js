/// <reference types="cypress" />


describe('Funcionalidade: Login via API', () => {
    
    it('Deve realizar login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
            body: {
                "email": "nathan@nathan.com",
                "password": "123456"
            }
        }).should((response) =>{
            //cy.log(response.status)
            expect(response.status).eq(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lessThan(500)
        })
    });

});