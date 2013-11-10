var app = require('../../application.js');

var myHooks = function () {
  this.Before(function(callback) {
    app.Application();
    callback();
  });
};

module.exports = myHooks;
