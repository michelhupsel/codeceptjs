const { I } = inject();

module.exports = {

  // insert your locators and methods here
  locators: {
    searchInput: { name: 'q' },
    searchButton: 'input[value="Pesquisa Google"]'
  },

  open() {
    I.amOnPage('/');
  },

  search(text) {
    I.waitForElement(this.locators.searchInput, 10);
    I.click(this.locators.searchInput);
    I.fillField(this.locators.searchInput, text);
    I.click(this.locators.searchButton);
  }
}

