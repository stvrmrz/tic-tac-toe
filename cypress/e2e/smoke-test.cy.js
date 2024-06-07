describe('Tic-Tac-Toe Game Functional Tests', () => {
  
  // Test to check if the game page loads successfully
  it('should be able to load the game page', () => {
    cy.visitGamePage();
    cy.contains('Play').should('be.visible');
  });

  // Test to start a game and make an initial move
  it('should be able to start a game and make a move', () => {
    cy.visitGamePage();
    cy.startGame('2');

    // Make a move and check it was made
    cy.makeMove('0', 'X');
  });

  // Test to simulate a win as Player X
  it('should be able to win a game as Player X', () => {
    cy.visitGamePage();
    cy.startGame('2');

    // Player X makes the first move
    cy.makeMove('0', 'X');

    // Player O makes a move
    cy.makeMove('1', 'O');

    // Player X makes the winning move
    cy.makeMove('2', 'X');

    // Verify the endgame alert is displayed
    cy.verifyEndgameAlert();
  });

  // Test to simulate a win as Player O
  it('should be able to win a game as Player O', () => {
    cy.visitGamePage();
    cy.startGame('3');

    // Player X makes the first move
    cy.makeMove('0', 'X');

    // Player O makes a move
    cy.makeMove('1', 'O');

    // Player X makes a move
    cy.makeMove('2', 'X');

    // Player O makes a move
    cy.makeMove('4', 'O');

    // Player X makes a move
    cy.makeMove('5', 'X');

    // Player O makes the winning move
    cy.makeMove('7', 'O');

    // Verify the endgame alert is displayed
    cy.verifyEndgameAlert();
  });

  // Test to ensure the game doesn't start with invalid input
  it('should not be able to start a game with invalid user input', () => {
    cy.visitGamePage();
    cy.get('#number').focus().type('foobar');
    cy.contains('Play').click();

    // Verify the game board is not visible
    cy.get('#table').should('not.be.visible');
  });
});