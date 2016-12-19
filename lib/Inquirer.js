//imports
import inquirer from "inquirer";
import sync from "justo-sync";

//private data
const REQUIRED_FLAG = "[R] ";

/**
 * An inquirer.
 */
export default class Inquirer {
  /**
   * Confirm a question.
   * Returns `true` or `false`.
   *
   * @param q:object  The question: name (string), title (string), default (boolean).
   * @return boolean
   */
  confirm(q) {
    return sync(function(done) {
      inquirer.prompt({
        type: "confirm",
        name: q.name,
        message: q.title || q.name,
        default: q.default
      }).then(function(answers) {
        done(undefined, answers[q.name]);
      });
    });
  }

  /**
   * Ask for input.
   *
   * @param q:object  The question: name (string), title (string), default (object), type (string || class), required (bool).
   * @return object
   */
  input(q) {
    var res;

    //(1) input
    do {
      res = sync(function(done) {
        inquirer.prompt([{
          type: "input",
          name: q.name,
          message: (q.required ? REQUIRED_FLAG : "") + (q.title || q.name),
          default: q.default,
          validate: function validate(answer) {
            var res;

            //(1) check
            if (q.type) {
              if (q.type === String || q.type == "string") res = true;
              else if (q.type === Number || q.type == "number") res = !isNaN(answer);
              else if (q.type === Boolean || q.type == "boolean") res = (answer == "true" || answer == "false");
            } else {
              res = true;
            }

            //(2) return
            return res;
          },
          filter: function filter(answer) {
            var res;

            //(1) transform
            if (q.type === Number || q.type == "number") res = Number(answer);
            else if (q.type === Boolean || q.type == "boolean") res = Boolean(answer);
            else res = answer;

            //(2) return
            return res;
          }
        }]).then(function(answers) {
          done(undefined, answers[q.name]);
        });
      });
    } while (q.required && !res);

    //(2) return
    return res;
  }

  /**
   * Ask for input.
   *
   * @param q:object  The question: name (string), title (string), type (string || class), default (string), required (bool).
   * @return object
   */
  password(q) {
    var res;

    //(1) password
    do {
      res = sync(function(done) {
        inquirer.prompt([{
          type: "password",
          name: q.name,
          message: (q.required ? REQUIRED_FLAG : "") + q.title || q.name,
          default: q.default,
          validate: function validate(answer) {
            var res;

            //(1) check
            if (q.type) {
              if (q.type === String || q.type == "string") res = true;
              else if (q.type === Number || q.type == "number") res = !isNaN(answer);
              else if (q.type === Boolean || q.type == "boolean") res = (answer == "true" || answer == "false");
            } else {
              res = true;
            }

            //(2) return
            return res;
          },
          filter: function filter(answer) {
            var res;

            //(1) transform
            if (q.type === Number || q.type == "number") res = Number(answer);
            else if (q.type === Boolean || q.type == "boolean") res = Boolean(answer);
            else res = answer;

            //(2) return
            return res;
          }
        }]).then(function(answers) {
          done(undefined, answers[q.name]);
        });
      });
    } while (q.required && !res);

    //(2) return
    return res;
  }

  /**
   * Ask for input.
   *
   * @param q:object  The question: name (string), title (string), default (string[]), choices (string[]), required (bool).
   * @return string[]
   */
  checkbox(q) {
    var res;

    //(1) checkbox
    do {
      res = sync(function(done) {
        inquirer.prompt([{
          type: "checkbox",
          name: q.name,
          message: (q.required ? REQUIRED_FLAG : "") + q.title || q.name,
          choices: q.choices,
          default: q.default ? (q.default instanceof Array ? q.default : [q.default]) : q.default
        }]).then(function(answers) {
          done(undefined, answers[q.name]);
        });
      });
    } while (q.required && res.length == 0);

    //(2) return
    return res;
  }

  /**
   * Ask for input.
   *
   * @param q:object  The question: name (string), title (string), default (string), choices (string[]).
   * @return string
   */
  list(q) {
    return  sync(function(done) {
      inquirer.prompt([{
        type: "list",
        name: q.name,
        message: q.title || q.name,
        choices: q.choices,
        default: q.default
      }]).then(function(answers) {
        done(undefined, answers[q.name]);
      });
    });
  }
}
