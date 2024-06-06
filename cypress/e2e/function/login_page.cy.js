module.exports = function (username) {
    describe('login' + username, () => {
        it('login',() => {
            
          cy.login(username, "!Sys@dmin1")
        
      
           });
    })
}
