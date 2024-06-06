describe("Next Page Test", () => {
  it("should navigate to the next page until '00095' is found", () => {
    const findTextOrNavigate = () => {
      cy.get('[class="d-flex flex-wrap border-bottom align-items-center p-3 fw-bold ng-star-inserted"]')
        .invoke('text')
        .then((text) => {
          if (text.includes("00095")) {
           // cy.log("Found: " + text);
           cy.get(
                      '[class="d-flex flex-wrap border-bottom align-items-center p-3 fw-bold ng-star-inserted"]'
                    )
                      .contains("00095")
                      .parent('div')
                      .parent('div')
                      .then(el => {
                      cy.log(el);
                      cy.wrap(el).find('i.fa.fa-pen-to-square').click()
                    
                    })
                  
          } else {
            cy.contains("ถัดไป").click();
            findTextOrNavigate();
          }
        });
    };

    cy.visit("http://localhost:4200/manage/basic-info").then(() => {
      findTextOrNavigate();
    });
  });
});
