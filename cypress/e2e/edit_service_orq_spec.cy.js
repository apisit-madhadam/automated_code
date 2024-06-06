describe('template spec', () => {
  // before(() => {
  // cy.login("admin01", "!Sys@dmin1");

  // })
  it('passes', () => {
    cy.visit('http://localhost:4200/manage/organization')
 
    cy.get('[class="pagination-next ng-star-inserted"]').then(()=>{
      cy.get('[class="ng-star-inserted"]').contains('Department1')
      cy.get('[class="ng-star-inserted"]').e(($element) => {
               
          if ($element.text().includes('ORG014')) {
            
            cy.log('have 12121212112');
          } else {
            cy.xpath('//*[@id="organization-data"]/pagination-template/nav/ul/li[6]/a').click()
            cy.log('NO have 12121212112');
          }
        });
      
 
    })
  })
})