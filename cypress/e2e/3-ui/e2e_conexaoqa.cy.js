<reference types="cypress" />
import cadastroPage from "../../support/pages/cadastro.page"
import usuarios from "../../fixtures/usuarios.json"

describe('Fluxo End to End', () => {

    var nome = usuarios[2].nome;
    var email = 'nateabv'+Math.floor(Math.random() * 1000)+'@nateabv.com.br';
    var senha = usuarios[2].senha;
    it.only('Deve fazer cadastro com sucesso - Usando Pages', () => {
        
        cadastroPage.cadastro(nome,email,senha,senha)
        cy.get('.large').should('contain' , 'Dashboard')
        cy.contains(nome).should('exist')
        cy.get('[data-test="navbar-logout"]').click()
    });

    it('Deve fazer login com sucesso', () => {
        cy.login(email,senha)
        cy.get('.large').should('contain', 'Dashboard')
        cy.contains(nome).should('exist')
        cy.get('[data-test="navbar-logout"]').click()
    });

    it('Deve criar perfil', () => {
        cy.login(email,senha)
        //status,conhecimento,social,empresa,website,locale,github,bio,twr,fb,yt,li,ig,md
        //caso não queria mandar um campo opcional, mande false no parâmetro
        cy.fixture('perfil').then((perfil) => {
            cy.criar_perfil(perfil.status,perfil.conhecimento,perfil.empresa,
                perfil.website,perfil.locale,perfil.github,perfil.bio,true,
                perfil.twitter,perfil.facebook,perfil.youtube,
                perfil.linkedin,perfil.instagram,perfil.medium)
        })
        cy.get('[data-test="dashboard-editProfile"]').should('contain','Editar Perfil')
        cy.get('[data-test="navbar-logout"]').click()
    });

    it.only('Deve Adicionar Experiência com sucesso', () => {
        cy.login(usuarios[2].usuario,usuarios[2].senha)
    });
});