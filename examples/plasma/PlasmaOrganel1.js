define('plasma/PlasmaOrganel1',['util','organic'], function () {

var util = require('util');
var Organel = require('organic').Organel,
	Chemical = require('organic').Chemical;


var PlasmaOrganel1 = function PlasmaOrganel1 (plasma, config) {
	Organel.call(this, plasma);
	//debugger;

	this.on('DoSomething', function (chemical, sender, callback) {
		//debugger;
		
		console.log('PlasmaOrganel1 doing something');
		if (callback) callback('PlasmaOrganel1');

		// this ebables the chemical to be emitted to other organeles
		// without false it will be emitted only to the first organel in the dna order
		return false;
	});
	
	// the Organel can emit messages too
}

util.inherits(PlasmaOrganel1, Organel);

return PlasmaOrganel1;


});