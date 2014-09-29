define('Chemical', 
	['module', 'exports', 'require', 'util'], 
	function (module, exports, require) {

	var util = require("util");

	module.exports = function Chemical(input, data) {
	  if(typeof input == "object") {
		for(var key in input)
		  this[key] = input[key];
	  } else {
		this.type = input;
		this.data = data;
	  }
	}

	module.exports.extend = function(constructor, properties){
	  util.inherits(constructor, Chemical);
	  for(var key in properties) 
		constructor.prototype[key] = properties[key];
	  return constructor;
	}

	
});