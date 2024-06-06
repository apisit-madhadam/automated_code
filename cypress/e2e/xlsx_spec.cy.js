describe('Excel File Reading Test', () => {
  it('should read Excel file and perform actions', () => {
    const filePath = 'cypress/fixtures/DutyFre.xlsx';

    cy.readExcel(filePath).then((data) => {
      // Access the first record from the JSON data
      const record1 = data[0][0];

      // Perform actions with record1
      cy.log('Record 1:', JSON.stringify(record1));

      // Example: Assert on a specific property of record1
      cy.wrap(record1).its('propertyName').should('eq', 'expectedValue');
    });
  });
});