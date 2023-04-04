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

})

it("Check tray field", () => {
    cy.get("[data-cy=num-tray-input]").should("not.visible");
    cy.get("[data-cy=tray-seedings]").click();
    cy.get("[data-cy=num-tray-input]").should("be.visible")
                                    .should("not.be.disabled")
                                    .children().should("be.empty")
                                    .type(100).should("have.value", 100);
});

it("Check seed field", () => {
    cy.get("[data-cy=num-seed-input]").should("not.be.visible");
    cy.get("[data-cy=tray-seedings]").click();
    cy.get("[data-cy=num-seed-input").should("be.visible")
                                    .should("not.be.disabled")
                                    .children().should("be.empty")
                                    .type(110).should("have.value", 110);
});

    
})