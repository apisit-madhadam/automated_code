describe("template spec", () => {
  let accessToken = "";
  before("1", () => {
    cy.tokenorg("1234567890121", "51ec91d3-25ce-452d-818f-452ea708c14a").then(
      (response) => {
        // Use the accessToken for subsequent requests or assertions
        accessToken = response;
        // More test code using the accessToken
      }
    );
  });
  it("should perform a specific test", () => {
    cy.log("Access Token:", accessToken);
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryDutyGroup",
      body: {
        OrgCode: "ORG001",
        GROUP_ID: "1600",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      cy.log(response);
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);

      function findKeysWithValue(obj, value, keys = []) {
        for (let key in obj) {
          if (obj[key] === value) {
            keys.push(key);
          }
          if (typeof obj[key] === "object" && obj[key] !== null) {
            findKeysWithValue(obj[key], value, keys);
          }
        }
        return keys;
      }
      const keys = findKeysWithValue(response.body, "**********");

      if (keys.length > 0) {
        cy.log(`Keys found: ${keys.join(", ")}`);
        cy.log(`Keys length: ${keys.length}`)
      } else {
        cy.log("No key found with the specified value");
      }
    });
  });
});
