import MyJson from "../../../../fixtures/from.json";

describe("ยื่นแบบ", () => {
  // before(() => {

  //   cy.login("offc03", "!Sys@dmin1")

  //    })

  let textFromFirstTest;
  let req = MyJson[0];
  it("EDN_OFFC", () => {
    cy.log(req.user1);
    cy.login("offc03", "!Sys@dmin1")
    cy.visit("https://edin-uat.excise.go.th/dashboard");
    cy.visit("https://edin-uat.excise.go.th/request/gdx");
    cy.get("#inlineRadio2");
    cy.wait(1000);
    cy.get("#inlineRadio4").click();
    cy.get('[class="btn btn-light border"]').click();
    cy.get('[class="row ng-star-inserted"]').then(($ete) => {
      cy.log($ete.length);
    });
    const searchTexts = [
      "ตรวจสอบการลงทะเบียนเกษตรกร",
    ];

    const findTextOrNavigate = () => {
      const recursiveSearch = (index) => {
        if (index < searchTexts.length) {
          const searchText = searchTexts[index];

          cy.get('[class="row ng-star-inserted"]')
            .invoke("text")
            .then((text) => {
              if (text.includes(searchText)) {
                cy.get('[class="row ng-star-inserted"]')
                  .contains(searchText)
                  .parent("div")
                  .parent("div")
                  .then((el) => {
                    cy.wrap(el).find('input[type="checkbox"]').click();
                    recursiveSearch(index + 1);
                  });
              } else {
                recursiveSearch(index + 1);
              }
            });
        }
      };
      recursiveSearch(0);
    };

    findTextOrNavigate();

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
    cy.findNextPageun(textFromFirstTest);
  });

  afterEach(() => {
    cy.get("#dropdownMenuButton1").click();
    cy.contains("ออกจากระบบ").click();
  });
});
