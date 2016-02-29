//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const Inquirer = require("../../../dist/es5/nodejs/justo-inquirer").Inquirer;

//suite
suite("Inquirer", function() {
  suite({name: "With default answers", ignore: process.env.TRAVIS == "true"}, function() {
    var inquirer;

    init("*", function() {
      inquirer = new Inquirer();
    });

    test("confirm()", function() {
      var res;

      res = inquirer.confirm({name: "confirm", title: "Is it OK?", default: true});
      res.must.be.eq(true);
    });

    test("input()", function() {
      var res;

      res = inquirer.input({name: "input", title: "Username", default: "ecostello"});
      res.must.be.eq("ecostello");
    });

    test("password()", function() {
      var res;

      res = inquirer.password({name: "password", title: "Password", default: "hidden"});
      res.must.be.eq("hidden");
    });

    test("#checkbox() - default is an array", function() {
      var res;

      res = inquirer.checkbox({name: "checkbox", title: "Check", choices: ["one", "two", "three"], default: ["one", "three"]});
      res.must.be.eq(["one", "three"]);
    });

    test("#checkbox() - default is not an array", function() {
      var res;

      res = inquirer.checkbox({name: "checkbox", title: "Check", choices: ["one", "two", "three"], default: "two"});
      res.must.be.eq(["two"]);
    });

    test("#list()", function() {
      var res;

      res = inquirer.list({name: "list", title: "List", choices: ["one", "two", "three"], default: "two"});
      res.must.be.eq("two");
    });
  });

  suite({name: "Without default answers", ignore: process.env.TRAVIS == "true"}, function() {
    var inquirer;

    init("*", function() {
      inquirer = new Inquirer();
    });

    test("confirm()", function() {
      var res;

      res = inquirer.confirm({name: "confirm", title: "Confirm (response: y)?", default: false});
      res.must.be.eq(true);
    });

    test("input()", function() {
      var res;

      res = inquirer.input({name: "input", title: "Username (response: elvisc)", default: "ecostello"});
      res.must.be.eq("elvisc");
    });

    test("password()", function() {
      var res;

      res = inquirer.password({name: "password", title: "Password (response: costello)"});
      res.must.be.eq("costello");
    });

    test("#checkbox()", function() {
      var res;

      res = inquirer.checkbox({name: "checkbox", title: "Check (response: one, three)", choices: ["one", "two", "three"]});
      res.must.be.eq(["one", "three"]);
    });

    test("#checkbox() - none checked", function() {
      var res;

      res = inquirer.checkbox({name: "checkbox", title: "Check (response: INTRO)", choices: ["one", "two", "three"]});
      res.must.be.eq([]);
    });

    test("#list()", function() {
      var res;

      res = inquirer.list({name: "list", title: "List (response: two)", choices: ["one", "two", "three"]});
      res.must.be.eq("two");
    });
  });
})();
