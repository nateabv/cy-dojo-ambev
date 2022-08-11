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

    it.only('Deve criar perfil', () => {
        cy.login(usuarios[2].usuario,usuarios[2].senha)
        //status,conhecimento,social,empresa,website,locale,github,bio,twr,fb,yt,li,ig,md
        //caso não queria mandar um campo opcional, mande false no parâmetro
        cy.fixture('perfil').then((perfil) => {
            cy.criar_perfil(perfil.status,perfil.conhecimento,perfil.empresa,
                perfil.website,perfil.locale,perfil.github,perfil.bio,true,
                perfil.twitter,perfil.facebook,perfil.youtube,
                perfil.linkedin,perfil.instagram,perfil.medium)
        })
        cy.get('[data-test="dashboard-editProfile"]').should('contain','Editar Perfil')
    });
});