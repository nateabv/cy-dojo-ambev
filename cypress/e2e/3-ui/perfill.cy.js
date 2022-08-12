/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('Funcionalidade: Criar perfil', () => {

    it('Deve criar perfil', () => {
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