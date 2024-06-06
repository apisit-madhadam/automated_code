// describe("find/manage/basic-info", () => {
  //   before(() => {
  // cy.login("admin01", "!Sys@dmin1");

  //  })
  // it("passes", () => {
  //   cy.visit("http://localhost:4200/manage/basic-info");
  //   cy.wait(1000);

  //   for (let i = 0; i < 1; i++) {
  //     cy.get('[class="card d-flex rounded-4 border-0"]').then(($Ele) => {
  //       if ($Ele.length) {
  //         cy.get(
  //           '[class="d-flex flex-wrap border-bottom align-items-center p-3 fw-bold ng-star-inserted"]'
  //         )
  //           .contains("00145")
  //           .should('equal', '00145')
  //           expect($Ele).to.not.equal('00145')
  //           // .then(($el) => {
  //           //   let elText = $el.length;
  //           //   cy.log(elText);
  //           //   if(elText = 0 ){
  //           //     cy.log('เจอ')

  //           //   }else{
  //           //     cy.log('ไม่เจอ')
  //           //   }

            
  //           // });
  //         cy.get("a.ng-star-inserted").last().click();
  //       }
  //     });
  //   }

  //   // .should('have.all.keys', '00206').each(($ele) =>{
  //   //   cy.log($ele.length)

  //   // })
  //   // cy.contains('00145').then(($element) => {
  //   //   cy.log($element.length)
  //   //   if ($element = null) {
  //   //     cy.get('a.ng-star-inserted').last().click();

  //   //   } else {

  //   //   }
  //   // })
  // });

  const findTextOnCurrentPage = (text) => {
    cy.contains(text).should('exist').then(() => {
      cy.log(`Text "${text}" not found on the current page. Navigating to the next page.`);
      goToNextPage();
    })

  };
  
  const goToNextPage = () => {
    cy.log('next page')

    cy.get("a.ng-star-inserted").eq(4).click();

  };
  
  const searchAcrossPages = (text) => {
    let found = false;
  
  
  
    try {
      findTextOnCurrentPage(text);
      found = true; // Set found to true if the text is found
    } catch (error) {
      found = false; // Set found to false if the text is not found
      //goToNextPage();
      findTextOnCurrentPage(text);

    }
  };
  
//});
describe('Text Search Across Pages', () => {

  it('should find text on current page or navigate to the next page', () => {
    cy.visit("http://localhost:4200/manage/basic-info");
 cy.wait(1000)
    // Replace 'Your Text to Find' with the actual text you are searching for
    searchAcrossPages('00206');
  });
});

