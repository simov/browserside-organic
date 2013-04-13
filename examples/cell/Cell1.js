require.register('cell/Cell1', function (module, exports, require) {


var util = require('util');
var Cell = require('organic').Cell;


module.exports = function Cell1 (dna, callback) {
	Cell.call(this, dna);
	debugger;
}

util.inherits(module.exports, Cell);


});