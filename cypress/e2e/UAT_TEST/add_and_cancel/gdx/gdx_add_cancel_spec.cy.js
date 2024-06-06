 // step 1
//  import {MyAddservicegdx} from '../../add_and_cancel/gdx/gdx_spec.cy'
//  MyAddservicegdx();

 // step 2
 describe("ยื่นแบบ", () => {
    let textFromFirstTest;
    it("EDN_OFFC", () => {
  
      cy.login( "offc03", "!Sys@dmin1");
      cy.visit("https://edin-uat.excise.go.th/dashboard");
      cy.visit("https://edin-uat.excise.go.th/request/gdx");
      cy.get("#inlineRadio2");
      cy.wait(1000);
      cy.get("#inlineRadio6").click();
      cy.get('[class="btn btn-light border"]').then(($btn) => {
             cy.log($btn.length)
      })
      cy.get('[class="btn btn-light border"]').eq(0).click({ multiple: true })
      cy.get('#flexCheckIndeterminate0').click({ multiple: true })
      cy.get(".modal-header > .btn-close").click();
      cy.get('[class="btn btn-light border"]').eq(1).click({ multiple: true })
      cy.get('[id="flexCheckIndeterminateCancel"]').click()
      cy.get('[class="row ng-star-inserted"]').then(($ete) => {
        cy.log($ete.length);
      });
      cy.get(".modal-header > .btn-close").click();
      cy.get("#floatingTextarea").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
      );
      cy.get(".btn-primary").click();
      cy.get(".swal2-confirm").click();
      cy.get('[class="col-1 text-info"]')
        .last()
        .then((result) => {
          textFromFirstTest = result.text();
          cy.log(textFromFirstTest);
        });
    });
    it("EDN_BOSS", () => {
      cy.login("boss01", "!Sys@dmin1");
      cy.visit("https://edin-uat.excise.go.th/dashboard");
      cy.get('[class="col-1 text-info"]').then(($element) => {
        if ($element.text().includes(textFromFirstTest)) {
          cy.log("มีใบคำขอ", textFromFirstTest);
          cy.get('[class="col-1 text-info"]')
            .contains(textFromFirstTest)
            .click({ force: true });
          cy.get("#floatingTextarea").type("kim bass mama อนุมัติ");
          cy.get(".btn-primary").click();
          cy.get(".swal2-confirm").click();
        } else {
          cy.log("ไม่มีใบคำขอ", textFromFirstTest);
        }
      });
    });
  
  
    it("EDN_ADMIN" , () => {
      cy.login("admin01" , "!Sys@dmin1");
      cy.findNextPage(textFromFirstTest);
    });
  
    afterEach(() => {
      cy.get("#dropdownMenuButton1").click();
      cy.contains("ออกจากระบบ").click();
    });
  });
  
  