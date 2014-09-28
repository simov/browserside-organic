define('cell/Cell1',['util','organic'], function (util, organic) {

	var util = require('util');
	var Cell = require('organic').Cell;


	var Cell1 = function Cell1 (dna, core, callback) {
		Cell.call(this, dna, core, callback);
		//debugger;
	}

	util.inherits(Cell1, Cell);

	return Cell;


});