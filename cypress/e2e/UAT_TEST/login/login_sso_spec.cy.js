import MyJson from "../login/user.json";
describe('LOGIN SSO', () => {
  
    it('login SSO', () => {
         
        for (let i = 0; i < MyJson.length; i++) {
            let req = MyJson[i]; 
          cy.log(req.username);
         cy.login(req.username, req.password);
         cy.get("#dropdownMenuButton1").click();
         cy.contains("ออกจากระบบ").click();
        }

    })
   
})
