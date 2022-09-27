describe('Funcionalidade: Login', () => {

    context('Dado que eu esteja na página de login', () => {
        before(() => {
            cy.visit('login')
        });

        context('Quando eu inserir usuário e senha', () => {
            beforeEach(() => {
                cy.login('nathan@nathan.com', '123456')
            });

            it('Então deve exibir a mensagem de boas vindas no Dashboard', () => {
                cy.get('.large').should('contain', 'Dashboard')
            });
        });
    });
});