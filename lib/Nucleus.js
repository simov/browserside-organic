require.register('Nucleus', function (module, exports, require) {


module.exports = function Nucleus(dna, plasma){
  this.dna = dna;
  this.organellesMap = {};
  this.plasma = plasma;
  this.organelles = this.createNamespace("nucleus", this);
}

module.exports.prototype.createNamespace = function(namespace, parent){
  var result = [];
  var branch = this.dna[namespace];
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
      var OrganelClass = require(source);
      var instance = new OrganelClass(this.plasma, objectConfig, parent);
      result.push(instance);
      
      var address = (typeof objectConfig.address !== "undefined") ? objectConfig.address : (namespace + objectId);
      this.organellesMap[address] = { "instance": instance };
    }
  }
  return result;
}


});