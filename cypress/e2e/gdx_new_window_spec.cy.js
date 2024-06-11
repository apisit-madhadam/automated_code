describe('template spec', () => {
  //   before(() => {
  //   cy.login("admin05", "!Sys@dmin1");
  // });
  it("passes", () => {
    cy.visit("http://localhost:4200/service/search");
    cy.get('[id="gdx-tab"]').click()

    cy.window().then((win) =>{
      cy.stub(win,'open',url =>
        {
          win.location.href = 'http://localhost:4200/service/gdx/DBD-002-04';
        }).as("popup")
    })
    cy.contains('ข้อมูลนิติบุคคล (แบบข้อความในรูปแบบ pdf)').click()
    cy.wait(2000)
    cy.contains('DBD-002-04 บริการสืบค้น ข้อมูลนิติบุคคล (แบบข้อความในรูปแบบ pdf)')
    cy.get('[class="searchgray ng-untouched ng-pristine ng-valid"]').type('0105551051021')
    cy.get('[class="btn btn-dark-blue mt-5 mb-3"]').click();
    cy.wait(2000)
  });
})