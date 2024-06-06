describe('template spec', () => {
  const pageUrl = [

    {
      url: 'http://localhost:4200/home',
      name: 'Home',
    },
    {
      url: 'http://localhost:4200/request/linkage',
      name: 'Add/Edit Linkage',
    },
    {
      url: 'http://localhost:4200/request/GDX',
      name: 'Add/Edit GDX',
    },
    {
      url: 'http://localhost:4200/request/linkage/view/149',
      name: 'พิจารณา ใบคำขอ',
    },
    {
      url: 'http://localhost:4200/service-search',
      name: 'Ervice-search',
    },
    {
        url: 'http://localhost:4200/report',
        name: 'Report',
    },
    {
        url: 'http://localhost:4200/manage/user',
        name: 'Manage-user',
    },
    {
        url: 'http://localhost:4200/manage/basic-info',
        name: 'Manage-basic-info',
    }
    ,
    {
        url: 'http://localhost:4200/history',
        name: 'history-search',
    }
  
  ];

  beforeEach(() => {
    cy.login("admin01", "!Sys@dmin1");
    
     }) 
  
  afterEach(() => {
    cy.get("#dropdownMenuButton1").click();
    cy.get(":nth-child(2) > .dropdown-item").click();
  });

  it('passes', () => {
  

  
    // cy.wait(1000);

    pageUrl.forEach((page) => {
      cy.visit(page.url); 
      cy.log('Viewport: iphone 14');
      cy.viewport(390, 844);
      cy.screenshot(`iphone 14 - ${page.name}`, {
        capture: 'runner', 
      });

      cy.wait(1000);

      cy.log('Viewport: ipad 11');
      cy.viewport(834, 1194);
      cy.screenshot(`ipad 11 - ${page.name}`, {
        capture: 'runner', 
      });

      cy.wait(1000);

      cy.log('Viewport: notebook');
      cy.viewport(1920, 1080);
      cy.screenshot(`notebook - ${page.name}`, {
        capture: 'runner', 
      });

      cy.wait(1000);

    

    });

 
  });
});