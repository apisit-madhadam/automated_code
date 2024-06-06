describe('template spec', () => {

    const tabs = ['//*[@id="linkage-tab"]', '//*[@id="gdx-tab"]', '//*[@id="excise-tab"]', '//*[@id="external-tab"]']
  
    it('passes', () => {
  
      cy.visit('http://localhost:4200/manage/basic-info')
  
      tabs.forEach(tab => {
        cy.xpath(tab).click()
     
      cy.log('Viewport: iphone 14');

      cy.viewport(390, 844);
         cy.wait(3000);
      cy.screenshot(`iphone 14 `, { disableTimersAndAnimations: true });

    

      cy.log('Viewport: ipad 11');
      cy.viewport(834, 1194);
      cy.screenshot(`ipad 11 `, {
      
      });


      cy.log('Viewport: notebook');

      cy.viewport(1920, 1080);
      cy.screenshot(`notebook `, {
     
      });

      })
  
    })
  
  });