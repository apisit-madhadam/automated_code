describe('template spec', () => {
  it('passes', () => {
  //cy.login("admin01", "!Sys@dmin1")
    cy.visit('http://localhost:4200/manage/organization/setting-service/ORG029')
    cy.contains(' [REG0100] สอบถามผู้ประกอบการ ').click();
    cy.wait(1000)
    cy.get('#serviceDetail02 > .card > .p-3 > .text-center > .btn').click();
    cy.get('[class="switchToggle"]').then(($ele) =>{
      cy.contains('แสดง').then(($show) =>{
        if($show.length){
          cy.xpath('//*[@id="OrgServiceModel"]/div/div/div[2]/table/tbody/tr[1]/td[2]/div/label').click()
           cy.log($show.length)
           for (let i = 0; i < $show.length; i++) {
            cy.xpath('//*[@id="OrgServiceModel"]/div/div/div[2]/table/tbody/tr[1]/td[2]/div/label')

           }
        }
       


      })
     
    })
})
})