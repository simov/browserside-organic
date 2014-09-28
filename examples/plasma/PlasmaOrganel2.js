define('plasma/PlasmaOrganel2',['util','organic'], function () {

var util = require('util');
var Organel = require('organic').Organel,
	Chemical = require('organic').Chemical;


var PlasmaOrganel2 = function PlasmaOrganel2 (plasma, config) {
	Organel.call(this, plasma);
	//debugger;

	this.on('DoSomething', function (chemical, sender, callback) {
		//debugger;
		
		console.log('PlasmaOrganel2 doing something');
		if (callback) callback('PlasmaOrganel2');

		// without false any other organeles defined after this one in the dna order
		// will not reveive this chemical
		// return false;
	});
	
	// the Organel can emit messages too
}

util.inherits(PlasmaOrganel2, Organel);

return PlasmaOrganel2;

});