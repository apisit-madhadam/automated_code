
let textFromFirstTest;
function a() {
  return new Cypress.Promise((resolve, reject) => {

    describe("ren_gdx", () => {
        // before(() => {
      
        //   cy.login("offc03", "!Sys@dmin1")
      
        //    })
      

      
        it("offc", () => {
        //cy.login("offc03", "!Sys@dmin1");
          cy.visit("http://localhost:4200/dashboard");
          cy.visit("http://localhost:4200/request/gdx");
          cy.get("#inlineRadio2");
          cy.get(
            '[style="width: 100%; background-color: #EEFDD5;"] > .row > .text-end > .btn'
          ).click();
      
          cy.get("#modalCheck0 ").then(($check0) => {
            if ($check0.length) {
              cy.log("#modalCheck0", $check0.length);
              $check0.click();
            }
          });
      
          cy.get(".modal-header > .btn-close").click();
          cy.get("#floatingTextarea").type(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
          );
          cy.get(".btn-primary").click();
          cy.get(".swal2-confirm").click();
          cy.get('[class="col-1 text-info"]')
            .last()
            .then((result) => {
              textFromFirstTest = result.text();
              cy.log(textFromFirstTest);
              resolve(textFromFirstTest);
            });
        });
    });      
  })

}
module.exports = {
  a
}

function b(){
  return new Cypress.Promise((resolve, reject) => {
    describe("ren_gdx", () => {
    it("6543234565432134", () => {
  cy.log('123456789098765434567876456765456764567u8')
    })
});
})
}
module.exports = {
  b
}