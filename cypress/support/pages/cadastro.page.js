class CadastroPage {

    cadastro(nome,email,senha,senha2){
        cy.get('[data-test="register-name"]').type(nome)
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type(senha)
        cy.get('[data-test="register-password2"]').type(senha2)
        cy.get('[data-test="register-submit"]').click()
    }

    cadastroPJ(){

    }
    
    cadastroPF(){

    }

}

export default new CadastroPage()