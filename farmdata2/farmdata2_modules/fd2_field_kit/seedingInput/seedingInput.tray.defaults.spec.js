describe('Test the tray seeding ', () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit('/farm/fd2-field-kit/seedingInput')
        

    })

    it("Check the tray seeding section when 'Tray' is selected ", () => {
cy.get ("[data-cy=tray-seedings]").check()
cy.get("[data-cy=tray-selection]").should("be.visible")

    })

    it("Check the dropdown Area ", () => {
        cy.get ("[data-cy=tray-seedings]").check()
        
        cy.get("[data-cy=tray-area-selection]>[data-cy=dropdown-input]").should("be.visible")
    //    cy.get("[data-cy=tray-area-selection] >>[data-cy=dropdown-input] [data-cy=option1] ").should('have.text',"arv")
    // cy.get("[data-cy=tray-area-selection] >[data-cy=dropdown-input] >  [data-cy=option1]").should('have.text',"arv")

    // cy.get("[data-cy=tray-area-selection] > [data-cy=option1]")

})





    
})