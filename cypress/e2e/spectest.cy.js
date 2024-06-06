describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:4200/manage/basic-info");
    cy.get('app-linkage-basic-info > .card > :nth-child(1) > :nth-child(3) > .m-auto > .btn').click()
     
    const findswitch = () => {
   
      cy.get(
        '[class="d-flex mb-3 pb-3 border-bottom justify-content-between ng-star-inserted"]'
      )
        .invoke("text")
        .then((text) => {
          cy.log(text.length);
          if (text.includes("ใช้งาน")) {
            cy.get(
              'class="d-flex mb-3 pb-3 border-bottom justify-content-between ng-star-inserted"'
            )
              .contains("ใช้งาน")
              .parent("div")
              .parent("div")
              .then((el1) => {
                cy.wrap(el1).find('[class="switchToggle"]').click();
              
              });
          } else {
            cy.log("234567654321234567");
            findswitch();
          }
        });
        
    };
  
   findswitch();

    
  })
})