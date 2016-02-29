//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-inquirer");

//suite
suite("API", function() {
  test("Inquirer", function() {
    pkg.must.have("Inquirer");
  });
})();
