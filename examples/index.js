require(['cell/Cell1'],function(){

	var Cell1 = require('cell/Cell1');

	var dna = {
		plasma: {
			"PlasmaOrganel1": {
				"source": "plasma/PlasmaOrganel1",
				"option": "organel1"
			},
			"PlasmaOrganel2": {
				"source": "plasma/PlasmaOrganel2",
				"option": "organel2"
			}
		}
	};


	new Cell1(dna, {}, function(cell){
		// the other to parameters are optional
		// the chemical can be object as well
		// cell.plasma.emit('DoSomething');

		// the second argument - sender - can be anything
		// and can be omitted as well		
		cell.plasma.emit('DoSomething', cell, function (organel) {
			console.log(organel + ' DoSomething callback');
		});		
	});
		

	

});

	