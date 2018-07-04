import index from './index.js'

context('index', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8000')
	})

	it('cy.index() - calls foo', () => {
		cy.window.index.foo("bar").should('equal', 'bar:bar')
	})
})
