
var zombie = require('zombie');

var World = function World(callback) {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function(url, callback) {
    this.browser.visit(url, callback);
  };

  this.hasLogo = function(callback) {
    if (this.browser.query('.navbar-brand')) {
      callback();
    } else {
      callback.fail("No company logo found");
    }
  }

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;
