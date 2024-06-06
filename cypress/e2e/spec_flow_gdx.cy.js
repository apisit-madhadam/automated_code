const login =  require('./function/login_page.cy')
const { a } = require('./function/req_gdx.cy')
const logout  =require('./function/logout_page.cy')
const bossacc =require('./function/boss_accept.cy') 
const adminacc =require('./function/admin_accept.cy')

let something
const username = [
    "offc01",
    "boss01",
    "admin01"
]
async function runTest() {
    await  login(username[0]);
    something=await a();
    cy.log('thisssssss a finish',something)
    await  logout(username[0]);
    // await  login(username[1]) ;
    // bossacc(something);
    // logout(username[1]);
    // login(username[2]) ;
    // aadminacc();
}
runTest()

