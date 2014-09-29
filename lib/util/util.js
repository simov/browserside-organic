define('util',
	['module', 'exports', 'require'],
	function (module, exports, require) {


	module.exports.inherits = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};


});