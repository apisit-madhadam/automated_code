describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')


     }) 
  it('ผู้ประกอบ', () => {

    cy.get('[ng-reflect-name="username"]').type('comp');
    cy.get('[ng-reflect-name="password"]').type('lab@1234');
    cy.get('#login-button').click();
    cy.visit('http://localhost:4200/tracking')
    
    // cy.get('.ng-star-inserted > .btn').click()
    // cy.get('.btn_next').click()
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(0).attachFile('test.png');
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(1).attachFile('doc.pdf');
  })
  
  it('เจ้าหน้า', () => {
    cy.get('[ng-reflect-name="username"]').type('areaoffc');
    cy.get('[ng-reflect-name="password"]').type('lab@1234');
    cy.get('#login-button').click();
    cy.visit('http://localhost:4200/publish-docs')
    
    // cy.get('.ng-star-inserted > .btn').click()
    // cy.get('.btn_next').click()
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(0).attachFile('test.png');
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(1).attachFile('doc.pdf');
  })
    
  it('ส.พื้นที่', () => {

    cy.get('[ng-reflect-name="username"]').type('areaoffc');
    cy.get('[ng-reflect-name="password"]').type('lab@1234');
    cy.get('#login-button').click();
    cy.visit('http://localhost:4200/publish-docs')
    
    // cy.get('.ng-star-inserted > .btn').click()
    // cy.get('.btn_next').click()
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(0).attachFile('test.png');
    // cy.xpath('//*[@id="file_input_group"]/input[1]').eq(1).attachFile('doc.pdf');
  })

  afterEach(()=>{
    cy.get('.mat-button > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2)').click()
  })
})