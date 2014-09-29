define('Cell',
	['module', 'exports', 'require', 'util','xtend','Nucleus','Plasma','Membrane'], 
	function (module, exports, require) {

	var util = require("util");
	var xtend = require("xtend");

	//default core organelles
	var dcore = {};
	dcore.Membrane = require("Membrane");	
	dcore.Nucleus = require("Nucleus");
	dcore.Plasma = require("Plasma");
	
	module.exports = function Cell(dna, core, callback){
	  core = xtend({}, dcore, core || {});

	  if(!this.plasma)
		this.plasma = new core.Plasma();
	  
	  var that = this;

	  new core.Nucleus(dna, this.plasma, function(nucleus){
	  	nucleus.createNamespace("plasma", that, function(organelles){
			that.organelles = organelles;
			callback(that);
		});
	  });
	  
	  //this.membrane = new core.Membrane(nucleus, this.plasma);
	  
	  
	}

	module.exports.prototype.clone = function(){
	  // experimental
	  return cluster.fork();
	}

	module.exports.extend = function(constructor, properties){
	  util.inherits(constructor, module.exports);
	  for(var key in properties) 
		constructor.prototype[key] = properties[key];
	  return constructor;
	}
	

});