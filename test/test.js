const app = require('../app.js');
const assert = require('assert');
const Browser = require('zombie');
const url = 'http://localhost:3000/';
const browser = new Browser();

describe('Home page', function() {
  it('has a map displayed on screen', function() {
    browser.visit(url).then(function() {
      browser.assert.element('#map')
    });
  });

  it('has a place name as the result of a search', function() {
    browser.visit(url).then(function() {
      browser.assert.element('#results')
    });
  });

  it('displays specific place name', function() {
    browser.visit(url).then(function() {
      browser.assert.text('body', 'Costa')
    });
  });

  it('displays specific place cost range', function() {
    browser.visit(url).then(function() {
      browser.assert.text('body', '££')
    });
  });
});
