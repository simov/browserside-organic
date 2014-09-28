define('Nucleus',
  ['module', 'exports', 'require'], 
  function (module, exports, require) {

module.exports = function Nucleus(dna, plasma, callback){
  this.dna = dna;
  this.organellesMap = {};
  this.plasma = plasma;
  var that = this;
  this.createNamespace("nucleus", this, function(organelles){
	 that.organelles = organelles;
   if(callback) callback(that);
  });
}

module.exports.prototype.createNamespace = function(namespace, parent, callback){
  var result = [];
  var branch = this.dna[namespace];
  var readyCount = 0;
  if(branch) {
    for(var objectId in branch) {
      var objectConfig = branch[objectId];
      if(!objectConfig.source)
        throw new Error("can not create object without source at "+namespace);
      var source = objectConfig.source;
      // if(source.indexOf(".") && source.indexOf("/") === -1 && source.indexOf("\\") === -1)
      //   source = source.split(".").join("/");
      // if(source.indexOf("/") !== 0 && source.indexOf(":\\") !== 1)
      //   source = process.cwd()+"/"+source;
	  var that = this;
      require([source],function(OrganelClass){
		var instance = new OrganelClass(that.plasma, objectConfig, parent);
		result.push(instance);
		
		var address = (typeof objectConfig.address !== "undefined") ? objectConfig.address : (namespace + objectId);
		that.organellesMap[address] = { "instance": instance };
		//check all ready
		readyCount++;
		if(readyCount==Object.keys(branch).length){
			if(callback) callback(result);
		}
	  });
      
    }
  }else{
	  if(callback) callback(result);
  }
  
}


});