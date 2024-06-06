module.exports = function () {
  describe("template spec", () => {
    it("req_linkage", () => {
      cy.visit("http://localhost:4200/request/linkage");
      cy.get(
        '[style="width: 100%; background-color: #EEFDD5;"] > .row > .text-end > .btn'
      ).click();

      cy.clickMultiple("#modalCheck0", 1, 2);
      cy.clickMultiple("#modalCheck1", 1, 1);
      // cy.clickMultiple('#modalCheck7', 2, 5);
      // cy.clickMultiple('#modalCheck8', 2, 4);
      // cy.clickMultiple('#modalCheck9', 2, 4);
      // cy.clickMultiple('#modalCheck11', 2, 4);
      // cy.clickMultiple('#modalCheck13', 2, 5);
      // cy.clickMultiple('#modalCheck15', 2, 4);
      // cy.clickMultiple('#modalCheck16', 2, 5);

      // [
      //   "#modalCheck10",
      //   "#modalCheck12",
      //   "#modalCheck14",
      //   "#modalCheck17",
      //   "#modalCheck18",
      //   "#modalCheck19",
      //   "#modalCheck20",
      //   "#modalCheck21",
      //   "#modalCheck22",
      //   "#modalCheck23",
      // ].forEach((selector) => {
      //   cy.get(selector).click();
      // });

      cy.get('.modal-header > .btn-close').click();
      cy.get("#floatingTextarea").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      );
      cy.get(".btn-primary").click();
      cy.get(".swal2-confirm");
    });
  });
};

// in flie commands 
// Cypress.Commands.add('clickMultiple', (selector, start, end) => {
//     for (let i = start; i <= end; i++) {
//       cy.log('start',start);
//       cy.log('end',end);
//       cy.get(`:nth-child(${i+1}) > .w-10 > .text-center > ${selector}`).click({force: true});
//     }
//   });