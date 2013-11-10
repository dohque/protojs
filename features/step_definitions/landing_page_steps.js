var landingPageSteps = function () {

    this.World = require("../support/world.js").World;

    this.Given(/^web browser$/, function(callback) {
	// this.World = require("../support/world.js").World();
	callback();
    });

    this.When(/^I navigate to home page$/, function(callback) {
        this.visit('http://localhost:3000/', callback);
    });

    this.Then(/^I see company logo$/, function(callback) {
	this.hasLogo(callback);
    });

}

module.exports = landingPageSteps;
