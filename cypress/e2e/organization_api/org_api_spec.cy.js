describe("template spec", () => {
  let accessToken = "";
  before("1", () => {
    cy.tokenorg("1234567890121", "51ec91d3-25ce-452d-818f-452ea708c14a").then(
      (response) => {
        accessToken = response;
      }
    );
  });
  it("Response Body InquiryCusgrp", () => {
    cy.request({
      method: "POST",
      url: "localhost:8080/integration/rest/api/external/rdb/InquiryCusgrp",
      body: {
        OrgCode: "ORG001",
        Pin: "0994000165382",
        DocNo: "256600000101",
        LicNo: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body Reg100", () => {
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
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body Reg200", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/reg/Reg0200",
      body: {
        OrgCode: "ORG001",
        RegId: "2535009832",
        FacId: null,
        DocCtlNo: null,
        LicenseNo: null,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body InquiryCusAddress ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/reg/InquiryCusAddress",
      body: {
        OrgCode: "ORG001",
        CusId: "52036691",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body LicFri0100", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/lic/LicFri0100",
      body: {
        OrgCode: "ORG001",
        Pin: "0994000165382",
        DocNo: "",
        LicNo: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body LicFri0200", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/lic/LicFri0200",
      body: {
        OrgCode: "ORG001",
        Pin: "0994000165382",
        DocNo: "",
        LicNo: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body LicFri0300", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/lic/LicFri0300",
      body: {
        OrgCode: "ORG001",
        Pin: "0994000165382",
        DocNo: "256600000101",
        LicNo: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });

  it("Response Body InquiryLocalRate", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryLocalRate",
      body: {
        OrgCode: "ORG001",
        OFFCODE: "100300",
        INC_CODE: "",
        BEGIN_DATE: "",
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

  it("Response Body InquiryDutyTable", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryDutyTable",
      body: {
        OrgCode: "ORG001",
        DUTY_CODE: "0299",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body InquiryProductType", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryProductType",
      body: {
        OrgCode: "ORG001",
        DUTY_CODE: "0190",
        TYPE_CODE: "00",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body InquiryLocalRate ", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryLocalRate",
      body: {
        OrgCode: "ORG001",
        OFFCODE: "100300",
        INC_CODE: "",
        BEGIN_DATE: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body InquiryTimeRate", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/integration/rest/api/external/rdb/InquiryTimeRate",
      body: {
        OrgCode: "ORG001",
        DUTY_CODE: "0301",
        TYPE_CODE: "",
        SUBTYPE_CODE: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body Inc0100", () => {
    cy.request({
      method: "POST",
      url: "localhost:8080/integration/rest/api/external/inc/Inc0100",
      body: {
        OrgCode: "ORG001",
        CusId: "65000012",
        FacId: "65F00008",
        ReceiptNo: "N00030066/0000087",
        ReceiptDate: "",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`, // Adjust this according to the API's expected format
      },
    }).then((response) => {
      const formattedResponseBody = JSON.stringify(response.body, null, 2);
      cy.log(`Response Body: ${formattedResponseBody}`);
    });
  });
  it("Response Body Inc0200", () => {
    cy.request({
      method: "POST",
      url: "localhost:8080/integration/rest/api/external/inc/Inc0200",
      body: {
        OrgCode: "ORG001",
        ReceiptNo: "N00030066/0000087",
        CategoryCode1: "",
        CategoryCode2: "",
        CategoryCode3: "",
        CategoryCode4: "",
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
