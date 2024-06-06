describe("ยื่นบริการสืบค้น GDX", () => {
  //  before(() => {

  //     cy.login("offc03", "!Sys@dmin1")

  //      })
  it("Req-from-gdx", () => {
    cy.visit("http://localhost:4200/request/gdx");
    // cy.get('#datepicker-th-start > app-datepicker-th > .input-group > #btndate').click();
    // cy.get('.selected').click()
    // cy.get(
    //   "#datepicker-th-start > app-datepicker-th > .input-group > .form-control"
    // ).click();
    // cy.get('.selected').click()
    // cy.get(
    //   "#datepicker-th-end > app-datepicker-th > .input-group > .form-control"
    // ).clear();
    // cy.get(
    //   "#datepicker-th-end > app-datepicker-th > .input-group > .form-control"
    // )
    //   .type("30/09/2566")
    //   .click();
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
    // cy.get("#modalCheck1 ").then(($check1) => {
    //   if ($check1.length) {
    //     cy.log("#modalCheck1 ", $check1.length);
    //     $check1.click();
    //   }
    // });

    cy.get("#modalCheck2 ").then(($check2) => {
      if ($check2.length) {
        cy.log("#modalCheck2 ", $check2.length);
        $check2.click();
      }
    });
    cy.get("#modalCheck3 ").then(($check3) => {
      if ($check3.length) {
        cy.log("#modalCheck3 ", $check3.length);
        $check3.click();
      }
    });
    cy.get('.modal-header > .btn-close').click();
    cy.get("#floatingTextarea").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
    cy.get('.btn-primary').click();
    //cy.get('.swal2-confirm').click();
  });
});
