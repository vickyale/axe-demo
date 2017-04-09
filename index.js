var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');

var driver = new WebDriver.Builder()
  .forBrowser('firefox')
  .build();

driver
  .get('https://github.com/dequelabs/axe-webdriverjs')
  .then(function () {
    AxeBuilder(driver)
      .analyze(function (results) {
        console.log(results);
      });
  });