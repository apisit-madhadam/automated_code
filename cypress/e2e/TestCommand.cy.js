import MyJson from "../fixtures/from.json";
describe("template spec", () => {
  // before(() => {

  // cy.login("offc03", "!Sys@dmin1")

  //  })
  let req = MyJson[0];
  it("ttttttttt" + req.user1, () => {
    cy.log(req.user1);
    cy.visit("http://localhost:4200/dashboard");
    cy.visit("http://localhost:4200/request/gdx");
    cy.get("#inlineRadio2");
    cy.wait(1000);
    cy.get("#inlineRadio4").click();
    cy.get('[class="btn btn-light border"]').click();
    cy.findChackBox()
  });
});
