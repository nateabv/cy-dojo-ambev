/// <reference types="cypress" />


describe('Funcionalidade de listar cupons', () => {
    it('Listar buscando por ID do cupom', () => {
        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons/1',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                accept: 'application/json'
            }
        }).should((response) =>{
            cy.log(response.status)
            expect(response.status).eq(200)
        })
    });
});