import '@percy/cypress'
import { setup } from '../support/utils'
import { VIEWPORT_WIDTH, VIEWPORT_HEIGHT, LOADING } from '../support/const'

describe(
  'Basic Viewer',
  {
    viewportWidth: VIEWPORT_WIDTH,
    viewportHeight: VIEWPORT_HEIGHT,
    scrollBehavior: false,
  },
  () => {
    before(() => {
      cy.visit('/')
      setup()
    })

    it('shows loading progress', () => {
      cy.get(LOADING).should('be.exist')
      cy.percySnapshot()
    })

    it('shows initial image', () => {
      cy.get(LOADING).should('not.exist')
      cy.get('.image').should('have.text', 'image1')
      cy.percySnapshot()
    })

    it('shows second image', () => {
      cy.get('.button2').click()
      cy.get('.image').should('have.text', 'image2')
      cy.percySnapshot()
    })

    it('shows third image', () => {
      cy.get('.button3').click()
      cy.get('.image').should('have.text', 'image3')
      cy.percySnapshot()
    })
  }
)
