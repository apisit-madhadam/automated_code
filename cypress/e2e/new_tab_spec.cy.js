describe("template spec", () => {
  // before(() => {
  //   cy.login("admin05", "!Sys@dmin1");
  // });
  it("passes", () => {
    cy.visit("http://localhost:4200/service/search");
    cy.get('[id="gdx-tab"]').click()
    cy.contains('ข้อมูลนิติบุคคล (แบบข้อความในรูปแบบ pdf)').invoke('removeAttr', 'target').click()
    cy.url().should('include', '/service/search').then((url) => {
      const newUrl = url.replace('service/search', 'service/gdx/DBD-002-04');
      cy.visit(newUrl);
    });
    cy.wait(2000);
    cy.contains('DBD-002-04 บริการสืบค้น ข้อมูลนิติบุคคล (แบบข้อความในรูปแบบ pdf)')
    cy.get('[class="searchgray ng-untouched ng-pristine ng-valid"]').type('0105551051021')
    cy.get('[class="btn btn-dark-blue mt-5 mb-3"]').click();
  });
});
