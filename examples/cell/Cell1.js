define('cell/Cell1',
	['module', 'exports', 'require','util','organic'],
	function (module, exports, require) {


	var util = require('util');
	var Cell = require('organic').Cell;


	module.exports = function Cell1 (dna, core, callback) {
		Cell.call(this, dna, core, callback);
		//debugger;
	}

	util.inherits(module.exports, Cell);


});