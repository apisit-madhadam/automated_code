describe('template spec', () => {
    before(() => {
        cy.login("admin01", "!Sys@dmin1")
        }) 
  it('passes', () => {
    cy.visit('http://localhost:4200/manage/user')
    cy.get('[class="btn btn-warning d-flex flex-row align-items-center"]').then(($el) =>{
    if ($el.length){
      cy.log($el.length);
      for (let i = 0 ; i < 10 ; i++){
        cy.get(`:nth-child(${i + 1}) > :nth-child(6) > .m > .btn`).click()
        cy.get('label').click({force: true})
        cy.wait(500)
        cy.get('.btn-primary').click()
        cy.get('.swal2-confirm').click()
      }

    }

    })
  })
})