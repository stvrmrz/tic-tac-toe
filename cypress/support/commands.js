// Custom command to visit the game page
Cypress.Commands.add('visitGamePage', () => {
    // Visits the specified URL
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
});

// Custom command to start the game
Cypress.Commands.add('startGame', (gameBoardNumber) => {
    // Focus on the input field, type the game board number, and click the 'Play' button
    cy.get('#number').focus().type(gameBoardNumber);
    cy.contains('Play').click();
    // Assert that the game table is visible
    cy.get('#table').should('be.visible');
});

// Custom command to make a move in the game
Cypress.Commands.add('makeMove', (cellId, playerSymbol) => {
    // Click on the specified cell and check that the table contains the player symbol
    cy.get(`#${cellId}`).click();
    cy.get('#table').should('contain.text', playerSymbol);
});

// Custom command to verify the endgame alert
Cypress.Commands.add('verifyEndgameAlert', () => {
    // Check that the endgame alert is visible and contains the text 'Congratulations'
    cy.get('#endgame').should('be.visible').should('contain.text', 'Congratulations');
});