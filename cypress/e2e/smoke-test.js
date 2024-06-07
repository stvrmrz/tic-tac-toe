describe('Tic Tac Toe Game Functional Tests', () => {
  
  // Test to check if the game page loads successfully
  it('should be able to load the game page', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
    cy.contains('Play').should('be.visible');
  });

  // Test to start a game and make an initial move
  it('should be able to start a game and make a move', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
    cy.get('#number').focus().type('2');
    cy.contains('Play').click();

    // Verify the game board is visible
    cy.get('#table').should('be.visible');

    // Make a move and check it was made
    cy.get('#0').click();
    cy.get('#table').should('contain.text', 'X');
  });

  // Test to simulate a win as Player X
  it('should be able to win a game as Player X', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
    cy.get('#number').focus().type('2');
    cy.contains('Play').click();

    // Verify the game board is visible
    cy.get('#table').should('be.visible');

    // Player X makes the first move
    cy.get('#0').click();
    cy.get('#table').should('contain.text', 'X');

    // Player O makes a move
    cy.get('#1').click();

    // Player X makes the winning move
    cy.get('#2').click();

    // Verify the endgame alert is displayed
    cy.get('#endgame').should('be.visible').should('contain.text', 'Congratulations');
  });

  // Test to simulate a win as Player O
  it('should be able to win a game as Player O', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
    cy.get('#number').focus().type('3');
    cy.contains('Play').click();

    // Verify the game board is visible
    cy.get('#table').should('be.visible');

    // Player X makes the first move
    cy.get('#0').click();
    cy.get('#table').should('contain.text', 'X');

    // Player O makes a move
    cy.get('#1').click();

    // Player X makes a move
    cy.get('#2').click();

    // Player O makes a move
    cy.get('#4').click();

    // Player X makes a move
    cy.get('#5').click();

    // Player O makes the winning move
    cy.get('#7').click();

    // Verify the endgame alert is displayed
    cy.get('#endgame').should('be.visible').should('contain.text', 'Congratulations');
  });

  // Test to ensure the game doesn't start with invalid input
  it('should not be able to start a game with invalid user input', () => {
    cy.visit('https://roomy-fire-houseboat.glitch.me/');
    cy.get('#number').focus().type('foobar');
    cy.contains('Play').click();

    // Verify the game board is not visible
    cy.get('#table').should('not.be.visible');
  });
});