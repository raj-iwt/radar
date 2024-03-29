const config = require('../../../cypress.json')
const { development } = require('/src/config')

class ByorPage {
  constructor() {
    this.text_box = "[name='sheetId']"
    this.submit = development.featureToggles.UIRefresh2022 ? 'input[type=submit]' : '.button'
  }

  provideExcelName() {
    cy.get(this.text_box).type(config.excel, { force: true })
  }

  provideCsvName() {
    cy.get(this.text_box).type(config.csv, { force: true })
  }

  provideJsonName() {
    cy.get(this.text_box).type(config.json, { force: true })
  }

  clickSubmitButton() {
    cy.get(this.submit).click()
  }
}

module.exports = new ByorPage()
