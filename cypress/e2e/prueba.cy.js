describe('Automatizacion de Pruebas Web', () => {
  
  it('Caso Exitoso: Usuario y Contraseña activos para el Loguin', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1@ptu.com')
    cy.get('#passwd').type('ptu12345')
    cy.get('#SubmitLogin > span').click()
    cy.get('.info-account').should('contain','Welcome')
  })


})