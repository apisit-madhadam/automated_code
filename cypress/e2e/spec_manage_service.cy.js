describe("template spec", () => {
  // before(() => {
  //     cy.login("admin01", "!Sys@dmin1")
  //     })

  it("passes", () => {
    cy.wait(1000);
    let Text = "กระทรวงอุตสาหกรรม/กรมโรงงานอุตสาหกรรม";
    const findTextOrNavigate = () => {
      cy.get(
        '[class="d-flex flex-wrap border-bottom align-items-center p-3 fw-bold ng-star-inserted"]'
      )
        .invoke("text")
        .then((text) => {
          if (text.includes(Text))  {
            cy.get(
              '[class="d-flex flex-wrap border-bottom align-items-center p-3 fw-bold ng-star-inserted"]'
            )
              .contains(Text)
              .parent("div")
              .parent("div")
              .then((el) => {
                cy.wrap(el)
                  .find(
                    '[class="btn btn-warning d-flex flex-row align-items-center gap-2"]'
                  )
                  .click();
                cy.wait(1000);
                cy.get('[class="switchToggle"]').then((el1) =>{
                  cy.log(el1.length)
                  cy.wrap(el1).click({ multiple: true })

                })
               
              });
          } else {
            cy.contains("ถัดไป").click();
            findTextOrNavigate();
          }
        });
    };
    cy.visit("http://localhost:4200/manage/basic-info");
    findTextOrNavigate();
  });
});
