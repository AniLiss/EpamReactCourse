describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
});

describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('http://localhost:8080/');
    });

    it('Click on btn', function() {
        cy.get('.search-btn').first().click();
        cy.get('button').contains('Title').click()
    })
});
