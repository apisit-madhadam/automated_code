module.exports = function (textFromFirstTest) {
    describe('BOSS อนุมัติ', () => {
        it("BOSS อนุมัติ", () => {
            cy.log('1234567890',textFromFirstTest)
            cy.visit("http://localhost:4200/dashboard");
            cy.get('[class="col-1 text-info"]').then(($element) => {
              if ($element.text().includes(textFromFirstTest)) {
                cy.log("มีใบคำขอ", textFromFirstTest);
                cy.get('[class="col-1 text-info"]')
                  .contains(textFromFirstTest)
                  .click({ force: true });
                cy.get("#floatingTextarea").type("kim bass mama อนุมัติ");
                cy.get(".btn-primary").click();
                cy.get(".swal2-confirm").click();
              } else {
                cy.log("ไม่มีใบคำขอ", textFromFirstTest);
              }
            });
          });
    })
}
