describe("template spec", () => {
  let accessToken = "";
  before(() => {
    cy.request({
      method: "GET",
      url: "http://localhost:8080/integration/auth/token",
      qs: {
        pin: "1234567890121",
      },
      headers: {
        "X-API-KEY": "51ec91d3-25ce-452d-818f-452ea708c14a",
      },
    }).then((response) => {
      // Assertions inside the then block
      expect(response.status).to.eq(200);
      accessToken = response.body.accessToken;
      cy.log(accessToken);
      // Add more assertions as needed
    });
  });

  it("should perform a specific test", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/reg/Reg0100",
      body: {
        orgCode: "ORG001",
        Tin: "0994000165382",
        BranchNo: "0",
        CusId: "",
        Name: "",
        Surname: "",
        BusinessGroup: "",
        ActiveStatus: "1",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      cy.log(response);
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
});
