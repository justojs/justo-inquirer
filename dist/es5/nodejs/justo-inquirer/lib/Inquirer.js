"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _inquirer = require("inquirer");var _inquirer2 = _interopRequireDefault(_inquirer);var _deasync = require("deasync");var _deasync2 = _interopRequireDefault(_deasync);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 






Inquirer = function () {function Inquirer() {_classCallCheck(this, Inquirer);}_createClass(Inquirer, [{ key: "confirm", value: function confirm(







    q) {
      var res;


      (0, _deasync2.default)(function (done) {
        _inquirer2.default.prompt({ 
          type: "confirm", 
          name: q.name, 
          message: q.title || q.name, 
          default: q.default }, 
        function (answers) {
          res = answers[q.name];
          done();});})();




      return res;} }, { key: "input", value: function input(








    q) {
      var res;


      (0, _deasync2.default)(function (done) {
        _inquirer2.default.prompt([{ 
          type: "input", 
          name: q.name, 
          message: q.title || q.name, 
          default: q.default, 
          validate: function validate(answer) {
            var res;


            if (q.type) {
              if (q.type === String || q.type == "string") res = true;else 
              if (q.type === Number || q.type == "number") res = !isNaN(answer);else 
              if (q.type === Boolean || q.type == "boolean") res = answer == "true" || answer == "false";} else 
            {
              res = true;}



            return res;}, 

          filter: function filter(answer) {
            var res;


            if (q.type === Number || q.type == "number") res = Number(answer);else 
            if (q.type === Boolean || q.type == "boolean") res = Boolean(answer);else 
            res = answer;


            return res;} }], 

        function (answers) {
          res = answers[q.name];
          done();});})();




      return res;} }, { key: "password", value: function password(








    q) {
      var res;


      (0, _deasync2.default)(function (done) {
        _inquirer2.default.prompt([{ 
          type: "password", 
          name: q.name, 
          message: q.title || q.name, 
          default: q.default, 
          validate: function validate(answer) {
            var res;


            if (q.type) {
              if (q.type === String || q.type == "string") res = true;else 
              if (q.type === Number || q.type == "number") res = !isNaN(answer);else 
              if (q.type === Boolean || q.type == "boolean") res = answer == "true" || answer == "false";} else 
            {
              res = true;}



            return res;}, 

          filter: function filter(answer) {
            var res;


            if (q.type === Number || q.type == "number") res = Number(answer);else 
            if (q.type === Boolean || q.type == "boolean") res = Boolean(answer);else 
            res = answer;


            return res;} }], 

        function (answers) {
          res = answers[q.name];
          done();});})();




      return res;} }, { key: "checkbox", value: function checkbox(








    q) {
      var res;


      (0, _deasync2.default)(function (done) {
        _inquirer2.default.prompt([{ 
          type: "checkbox", 
          name: q.name, 
          message: q.title || q.name, 
          choices: q.choices, 
          default: q.default ? q.default instanceof Array ? q.default : [q.default] : q.default }], 
        function (answers) {
          res = answers[q.name];
          done();});})();




      return res;} }, { key: "list", value: function list(








    q) {
      var res;


      (0, _deasync2.default)(function (done) {
        _inquirer2.default.prompt([{ 
          type: "list", 
          name: q.name, 
          message: q.title || q.name, 
          choices: q.choices, 
          default: q.default }], 
        function (answers) {
          res = answers[q.name];
          done();});})();




      return res;} }]);return Inquirer;}();exports.default = Inquirer;