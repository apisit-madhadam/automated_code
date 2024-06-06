module.exports = function (username) {
    describe('logout' + username , () => {
    
           it('logout pass',() => {
                cy.get("#dropdownMenuButton1").click();
                cy.get(":nth-child(2) > .dropdown-item").click();
              });

       
    });
}
