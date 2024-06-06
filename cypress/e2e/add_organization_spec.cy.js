import Myjson from "../fixtures/organization.json"
const gg = Myjson.orgBuilding ;
const tt = 



describe('template spec', () => {
  // before(() => {
  //   cy.login("offc03", "!Sys@dmin1");
    
  //    }) 
  it('add', () => {
   cy.visit('http://localhost:4200/manage/organization/add');
  //  y.fixture('organization.json').then((users) => {
  //   // Perform actions with the loaded data
  //   cy.log(users.users[0].name); // Output: John Doe
  // });
//cy.readFlie('')
// r.forEach(( Myjson ) => {
//          cy.log(Myjson.orgName)

//   });

  
    // cy.get('[ng-reflect-name="orgName"]').type(Myjson.orgSubdistrictCode)
  for( let i = 0 ; i < Myjson.length ; i++){
      let org = Myjson[i]
      cy.log(Myjson.length)
      cy.log(org.orgName)
      cy.get('[ng-reflect-name="orgName"]').type(org.orgName)
      cy.get('[ng-reflect-name="orgFloor"]').type(org.orgFloor)
      cy.get('[ng-reflect-name="orgHouseNo"]').type(org.orgHouseNo)
      cy.get('[ng-reflect-name="orgRoad"]').type(org.orgRoad)
      cy.get('[ng-reflect-name="orgProvince"]').select(org.orgProvince).should('have.id',org.orgProvince)
      cy.wait(1000)
      cy.get('[ng-reflect-name="orgDistrict"]').type(org.orgDistrict).should('have.id',org.orgDistrict)
      cy.get('[ng-reflect-name="orgSubdistrictCode"]').type(org.orgSubdistrictCode)
      cy.xpath('/html/body/app-root/app-sidebar/section/div/app-manage-starter/app-add-organization/div/div[2]/div[1]/div[2]/div[7]/div[2]/app-datepicker-th/div/input').type(org.stardate)
      cy.xpath('/html/body/app-root/app-sidebar/section/div/app-manage-starter/app-add-organization/div/div[2]/div[1]/div[2]/div[7]/div[4]/app-datepicker-th/div/input').type(org.enddate)
      cy.xpath('//*[@id="upload"]').attachFile(org.Flie)





      // cy.get('[ng-reflect-name="orgName"]').clear()
      // cy.get('[ng-reflect-name="orgFloor"]').clear()
    }

    // Myjson.forEach((org) => {
    //   cy.log(org.enddate);
    //   cy.get('[ng-reflect-name="orgName"]').type(org.orgName)
    // });
//     cy.log(Myjson[0].orgName);
// cy.log(gg);




  });
});
