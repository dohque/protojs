var landingPageSteps = function () {

    this.World = require("../support/world.js").World; // overwrite default World constructor

    this.Given(/^web browser$/, function(callback) {
	callback();
	// express the regexp above with the code you wish you had
	//callback.pending();
    });

    this.When(/^I navigate to home page$/, function(callback) {
	// express the regexp above with the code you wish you had
	callback.pending();
    });

    this.Then(/^I see company logo$/, function(callback) {
	// express the regexp above with the code you wish you had
	callback.pending();
    });

}

module.exports = landingPageSteps;
