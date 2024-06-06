
export const  searchService = (serviec_code) => {
describe("view page", () => {
it("step 1", () => {
cy.login( "admin05", "!Sys@dmin1");
cy.visit("https://edin-uat.excise.go.th/dashboard");
cy.visit(`https://edin-uat.excise.go.th/service/gdx/${service_code}`);

})
})
}