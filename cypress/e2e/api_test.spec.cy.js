describe("template spec", () => {
  let authToken = "";

  it("passes", () => {
    // First request to log in and get the token
    cy.request({
      method: "POST",
      url: "https://dummyjson.com/auth/login",
      body: {
        username: "emilys",
        password: "emilyspass",
      },
    }).then((response) => {
      cy.log(response.body.token);
      authToken = response.body.token;

      // Nested request to get the authenticated user details
      cy.request({
        method: "GET",
        url: "https://dummyjson.com/auth/me",
        headers: {
          Authorization: `Bearer ${authToken}`, // Adjust this according to the API's expected format
        },
      }).then((response) => {
        cy.log(response);
        cy.log(JSON.stringify(response.body,null,2));
      });
    });
  });
});
