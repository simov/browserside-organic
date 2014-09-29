define('organic',
	['module', 'exports', 'require', 'Nucleus','Plasma','Organel','Chemical','Cell'],
	function (module, exports, require) {

	module.exports.Nucleus = require("Nucleus");
	module.exports.Plasma = require("Plasma");
	module.exports.Organel = require("Organel");
	//module.exports.Membrane = require("Membrane");
	module.exports.Chemical = require("Chemical");
	module.exports.Cell = require("Cell");

});