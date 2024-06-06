

describe("template spec", () => {
  // before(() => {

  //   cy.login("offc01", "!Sys@dmin1")

  //    })

  let textFromFirstTest;

  it("offc", () => {
    //cy.login("offc03", "!Sys@dmin1");
  



//     cy.get('[class="row ng-star-inserted"]').then(($test) => {
//       cy.log($test.length)
//       if($test.length > 0){
// cy.log("3333333333333333333333333333")
//       }
//     })
const findClassWithCheckbox = () => {
  cy.get('[class="modal-body my-0 py-0"]')
    .invoke('length')
    .then((length) => {
      if (length > 0) {
        // Check if any checkbox within the modal-body has a specific class
        cy.get('class="row ng-star-inserted"').should('have.class', 'class="row ng-star-inserted"').then(($checkboxes) => {
          if ($checkboxes.length > 0) {
            cy.log('At least one checkbox has the class "example-class"');
          } else {
            cy.log('No checkbox has the class "example-class"');
          }
        });
      } else {
        cy.log('No modal-body found');
      }
    });
};

    cy.visit("http://localhost:4200/dashboard");
    cy.visit("http://localhost:4200/request/gdx");
    cy.get("#inlineRadio2");
    cy.get(
      '[style="width: 100%; background-color: #EEFDD5;"] > .row > .text-end > .btn'
    ).click();
    findClassWithCheckbox()



    })
   })
  
   
    //cy.get('[class="modal-content"]').then(() =>{})
 
    // cy.get('[class="modal-content"]').then(($element) => {
    //   if ($element.hasClass('fw-bold') && $element.hasClass('fw-blue') && $element.hasClass('text-start') && $element.hasClass('p-2') && $element.hasClass('bg-f2f2f2')) {
    //     cy.log('pass');
    //   } else {
    //     cy.log('failed');
    //   }
    // });


    // cy.get('[class="fw-bold fw-blue text-start p-2 bg-f2f2f2"]').then(($HeadcheckBox) =>{
    //   if ($HeadcheckBox.length) {
    //     let HeadcheckBox =  $HeadcheckBox.length
    //     cy.log("HeadcheckBox", HeadcheckBox);
       
      
    //   }

    // })
    // cy.get('[class="form-check-input pointer ng-untouched ng-pristine ng-valid"]').then(($checkBox) => {
    //   if ($checkBox.length) {
    //     cy.log("#modalCheck", $checkBox.length);
    //    // $check0.click();
    //   }
    // });

    // cy.get(".modal-header > .btn-close").click();
    // cy.get("#floatingTextarea").type(
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    // );
    // cy.get(".btn-primary").click();
    // cy.get(".swal2-confirm").click();
    // cy.get('[class="col-1 text-info"]')
    //   .last()
    //   .then((result) => {
    //     textFromFirstTest = result.text();
    //     cy.log(textFromFirstTest);
    //   });
  

  // it("boss", () => {
  //   cy.login("boss01", "!Sys@dmin1");
  //   cy.visit("http://localhost:4200/dashboard");
  //   cy.get('[class="col-1 text-info"]').then(($element) => {
  //     if ($element.text().includes(textFromFirstTest)) {
  //       cy.log("มีใบคำขอ", textFromFirstTest);
  //       cy.get('[class="col-1 text-info"]')
  //         .contains(textFromFirstTest)
  //         .click({ force: true });
  //       cy.get("#floatingTextarea").type("kim bass mama อนุมัติ");
  //       cy.get(".btn-primary").click();
  //       cy.get(".swal2-confirm").click();
  //     } else {
  //       cy.log("ไม่มีใบคำขอ", textFromFirstTest);
  //     }
  //   });
  // });

  // it("admin", () => {
  //   cy.login("admin01", "!Sys@dmin1");
  //   cy.visit("http://localhost:4200/dashboard");
  //   cy.get('[class="col-1 text-info"]').then(($element) => {
  //     if ($element.text().includes(textFromFirstTest)) {
  //       cy.log("มีใบคำขอ", textFromFirstTest);
  //       cy.get('[class="col-1 text-info"]')
  //         .contains(textFromFirstTest)
  //         .click({ force: true });
  //       cy.get("#floatingTextarea").type("kim admin mama อนุมัติ");
  //       cy.get(".btn-primary").click();
  //       cy.get(".swal2-confirm").click();
  //       cy.get(".swal2-confirm").click();
  //       cy.get(".btn-primary").click();
  //       cy.get(".swal2-confirm").click();
  //     } else {
  //       cy.log("ไม่มีใบคำขอ", textFromFirstTest);
  //     }
  //   });
  // });


  // afterEach(() => {
  //   cy.get("#dropdownMenuButton1").click();
  //   cy.get(":nth-child(2) > .dropdown-item").click();
  // });

