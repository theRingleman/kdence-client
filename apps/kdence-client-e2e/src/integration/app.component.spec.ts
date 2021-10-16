describe('kdence-client', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('kdence-client-root').should('exist');
  });
});