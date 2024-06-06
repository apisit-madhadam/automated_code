import {searchService} from './function/viwe_page.cy'

let  serviec_code = 'DBD-003-04'
searchService(serviec_code);

describe("บริการสืบค้น GDX", () => {
    it("บริการสืบค้น" + serviec_code , () => {
   cy.get('[class="searchgray ng-untouched ng-pristine ng-valid"]').type('0105551051021')
    cy.get('[class="btn btn-dark-blue mt-5 mb-3"]').click()
    })
    })