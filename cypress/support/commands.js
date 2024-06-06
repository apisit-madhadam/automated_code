// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://localhost:4200/");

  cy.get('[id="username"]').type(username);
  cy.get('[id="password"').type(password);
  cy.get('[class="LoginButton"]').click();
  cy.wait(1000);
});

import "cypress-file-upload";
import "cypress-audit/commands";
Cypress.Commands.add("clickMultiple", (selector, start, end) => {
  for (let i = start; i <= end; i++) {
    cy.log("start", start);
    cy.log("end", end);
    cy.get(`:nth-child(${i + 1}) > .w-10 > .text-center > ${selector}`).click({
      force: true,
    });
  }
});
Cypress.Commands.add("clickMultiple2", (selector) => {
  cy.visit("https://edin-uat.excise.go.th/home");
  cy.get('[class="col-1 text-info"]').contains(selector).click({ force: true });
});

import * as XLSX from "xlsx";

Cypress.Commands.add("readExcel", (filePath) => {
  cy.readFile(filePath, "binary").then((excelData) => {
    const workbook = XLSX.read(excelData, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
  });
});

Cypress.Commands.add("findNextPage", (textFromFirstTest) => {
  const findnextpage = () => {
    cy.get('[class="col-1 text-info"]')
      .invoke("text")
      .then((text) => {
        if (text.includes(textFromFirstTest)) {
          cy.log("มีใบคำขอ", textFromFirstTest);
          cy.get('[class="col-1 text-info"]')
            .contains(textFromFirstTest)
            .click({ force: true });
          cy.get("#floatingTextarea").type("kim admin mama อนุมัติ");
          cy.get(".btn-primary").click();
          cy.wait(1000)
          cy.get(".swal2-confirm").click();
          cy.get(".swal2-confirm").click();
          cy.get(".btn-primary").click();
          cy.get(".swal2-confirm").click();
        } else {
          cy.contains("ถัดไป").click();
          findnextpage();
        }
      });
  };

  findnextpage();
});
Cypress.Commands.add("findNextPageun", (textFromFirstTest) => {
  const findnextpage = () => {
    cy.get('[class="col-1 text-info"]')
      .invoke("text")
      .then((text) => {
        if (text.includes(textFromFirstTest)) {
          cy.log("มีใบคำขอ", textFromFirstTest);
          cy.get('[class="col-1 text-info"]')
            .contains(textFromFirstTest)
            .click({ force: true });  
            cy.contains('ไม่อนุมัติ').click()
          cy.get("#floatingTextarea").type("kim admin mama ไม่อนุมัติ");
          cy.get(".btn-primary").click();
          cy.get(".swal2-confirm").click();
    
        } else {
          cy.contains("ถัดไป").click();
          findnextpage();
        }
      });
  };

  findnextpage();
});

Cypress.Commands.add("findNextPageedit", (textFromFirstTest) => {
  const findnextpage = () => {
    cy.get('[class="col-1 text-info"]')
      .invoke("text")
      .then((text) => {
        if (text.includes(textFromFirstTest)) {
          cy.log("มีใบคำขอ", textFromFirstTest);
          cy.get('[class="col-1 text-info"]')
            .contains(textFromFirstTest)
            .click({ force: true });  
            cy.contains('ส่งกลับไปแก้ไข').click()
          cy.get("#floatingTextarea").type("kim admin mama ส่งกลับแก้ไข");
          cy.get(".btn-primary").click();
          cy.get(".swal2-confirm").click();
    
        } else {
          cy.contains("ถัดไป").click();
          findnextpage();
        }
      });
  };

  findnextpage();
});


Cypress.Commands.add("findChackBox", () => {
  cy.get('[id="modalCheck0"]')
  .should('satisfy',($el) =>{
    const classList = Array.from($el[0].classList); 
    return classList.includes('modalCheck0') || classList.includes('modalCheck1')
  })


  // const TestCommand = () => {
  //   cy.get('[id="modalCheck0"]')
  //     .then((text) => {
  //       cy.log("checkbox", text.length);
  //       if (text.hasClass('modalCheck0')) {
  //         cy.log("checkbox");

  //       } else {
  //         cy.log("not have checkbox");
  //         TestCommand();
  //       }
  //     });
  // };
  
  //TestCommand();
});
