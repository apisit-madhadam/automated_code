describe('template spec', () => {
    // before(() => {
    // cy.login("admin01", "!Sys@dmin1");
    
    //  }) 
  it('passes', () => {
    cy.visit('http://localhost:4200/manage/user') 
 cy.wait(500)


    cy.get('a.ng-star-inserted')
    cy.wait(500);
    
    cy.contains('U0012').should('not.exist').then((element) => {
  
      cy.log(element)
      if (element = null) {
        cy.get('a.ng-star-inserted').last().click();
    
      } else {
     
      }
    })
    
  })
})