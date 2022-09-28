/// <reference types="cypress" />


describe('Funcionalidade de cadastrar cupons', () => {
    it('Listar cadastrar cupom', () => {
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                accept: 'application/json'
            },
            body: {
                "code": "Cupomteste"+Math.floor(Math.random() * 1000),
                "amount": "10.00",
                "discount_type": "fixed_product",
                "description": "Cupom de teste"
            }
        }).should((response) =>{
            cy.log(response.status)
            expect(response.status).eq(201)
        })
    });
});