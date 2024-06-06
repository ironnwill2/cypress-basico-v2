/// <reference types="Cypress" />

describe('central de atendimento ao cliente TAT', ()=> {
    it('verifica o titulo d aaplicação', ()=>{
        cy.visit('./src/index.html')
        cy.get('#title').should('have.text','CAC TAT')
    })

    it.only('preenche campos obrigatorios', () => {
        cy.visit('./src/index.html')
        cy.get('#firstName').type('hello world')
        cy.get('#lastName').type('hallo world2')
        cy.get('#email').type('hello world3@gmail.com')
        cy.get('#open-text-area').type('hello word GRANDE  hello word GRANDE    hello word GRANDE    hello word GRANDE    hello word GRANDE')
        cy.get('button[type=submit].button').click()
        cy.get('.success').contains('Mensagem enviada com sucesso.').should('be.visible')
    });
})