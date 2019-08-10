formulairepost=function(ops){

var {resultat, req, resp} = ops
var type=[]
		var name=[]
		var type=[]	
		var value=[]
		var options=[]
		
		Formulaire[fspec]=[]
		//name type valueoptions
        
		resultat.forEach(function(valeur){
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			//console.log("valeur= ",valeur)
			switch (col){
				case "name":
					name[ligne]=req.body[valeur]
				break;
				case "type":
					type[ligne]=req.body[valeur]
				break;
				case "value":
					value[ligne]=req.body[valeur]
				//	console.log(type[ligne])
				case "options":
					options[ligne]=req.body[valeur]
				//	console.log(type[ligne])
				break;
			}
	//	console.log("type = "+type)
	//	console.log("acro = "+acro)
		})
		console.log(`acro= ${acro}`,acro)
		
		name.forEach(function(nom,i){
			if(user){
		//		console.log("GELO"+type[i])
		//		console.log(user)
				Formulaire[fspec].push({
					name:nom,
					type:titre[i],
					value:type[i],
					options:options[i]
					
					})
			}
			})
			
			fs.writeFile("data/Formulaire.json", JSON.stringify(Formulaire), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp, Membre:Membre})
}