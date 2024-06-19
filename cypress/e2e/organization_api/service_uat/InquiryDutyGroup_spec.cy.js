describe("template spec", () => {
  let accessToken = "";
  before("1", () => {
    cy.tokenorguat("1450200249244", "e608f885-8c30-4685-a1d9-c0b414385632").then(
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
      url: "https://edin-uat.excise.go.th/noitargetni-api/rest/api/external/rdb/InquiryDutyGroup",
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
