fs = require('fs');

var VX_widget=require('./VX_widget.js')
var {mTableauViForm2, mTableauVisuel, mTableauViForm3} = VX_widget

adminpost=function(ops){
	var {resultat, req, resp} = ops
		var ROOT=[]
		var username=[]
		var password=[]
		Login=[]
			
		resultat.forEach(function(valeur){
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			switch (col){
				case "user":
					username[ligne]=req.body[valeur]
				break;
				case "password":
					password[ligne]=req.body[valeur]
				break;
				case "ROOT":
					ROOT[ligne]= !!req.body[valeur]
					//console.log(ROOT[ligne])
				break;
			}
			
		})
		//console.log(`username= ${username}`,username)
		
		username.forEach(function(user,i){
			if(user){
				Login.push({
					username:user,
					password:password[i],
					root:ROOT[i]
					})
			}
			})
			fs.writeFile("data/login.json", JSON.stringify(Login), (err) => {
			  if (err) console.log(err);
			  //console.log("Successfully Written to File.");
			});
			
			mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp,Login:Login})
	}

membrespost=function(ops){
	var {resultat, req, resp} = ops
var type=[]
		var acro=[]
		var titre=[]		
		Membre=[]
			
		resultat.forEach(function(valeur){
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			////console.log("valeur= ",valeur)
			switch (col){
				case "user":
					acro[ligne]=req.body[valeur]
				break;
				case "titre":
					titre[ligne]=req.body[valeur]
				break;
				case "type":
					type[ligne]=req.body[valeur]
				//	//console.log(type[ligne])
				break;
			}
	//	//console.log("type = "+type)
	//	//console.log("acro = "+acro)
		})
		//console.log(`acro= ${acro}`,acro)
		
		acro.forEach(function(user,i){
			if(user){
		//		//console.log("GELO"+type[i])
		//		//console.log(user)
				Membre.push({
					acro:user,
					titre:titre[i],
					type:type[i]
					})
			}
			})
			
			fs.writeFile("data/Membre.json", JSON.stringify(Membre), (err) => {
			  if (err) console.log(err);
			  //console.log("Successfully Written to File.");
			});
			mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp, Membre:Membre})
}
			
infopost=function(ops){
	var {abv, req, resp, FileServe} = ops
	
	FileServe[abv]={	
		titre: req.body.titre,
		dns: req.body.dns,
		path: req.body.path,
		index: req.body.index,
		notFound: req.body.notfound
					}
		fs.writeFile(`data/FileServe.json`, JSON.stringify(FileServe), (err) => {
				if (err) console.log(err);
				else console.log(FileServe);
		});
		mTableauViForm3({name:"Form 3", resp:resp, FileServe:FileServe, abv})
	
}

formulairepost=function(ops){

	var {resultat, req, resp,Formulaire,fspec} = ops
	var type=[]
	var name=[]
	var type=[]	
	var value=[]
	var options=[]
	var nbLigne
		Formulaire[fspec]=[]
		//name type valueoptions
			console.log(resultat)
		resultat.forEach(function(valeur){
			console.log(valeur)
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			////console.log("valeur= ",valeur)
			switch (col){
				case "name":
					name[ligne]=req.body[valeur]
				break;
				case "type":
					type[ligne]=req.body[valeur]
				break;
				case "value":
					value[ligne]=req.body[valeur]
				//	//console.log(type[ligne])
				case "options":
					options[ligne]=req.body[valeur]
				//	//console.log(type[ligne])
				break
				case "ligne":
					console.log("ligneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee= ",req.body[valeur])
					nbLigne=req.body[valeur]
				break;
			}
	//	//console.log("type = "+type)
	//	//console.log("acro = "+acro)
		})
		console.log(nbLigne)
		name.forEach(function(nom,i){
			if(nom){
		//		//console.log("GELO"+type[i])
		//		//console.log(user)
				Formulaire[fspec].push({
					name:nom,
					type:type[i],
					value:value[i],
					options:options[i]
					
					})
			}
			})
			console.log(nbLigne)
		
			Formulaire[fspec].push(parseInt(nbLigne))
			
			fs.writeFile("data/Formulaire.json", JSON.stringify(Formulaire), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mFormulaire({name:"Création Formulaire",nbFormulaire:Formulaire[req.params.fspec].length+2, resp:resp, Formulaire:Formulaire, fspec:req.params.fspec})
}


creationformulaire=function(ops){
	var {resultat, req, resp, keys, nomFormulaire,Formulaire,FileForm} = ops
		info={}
		returnFinal=[]
		name=[]
		
		Formulaire.forEach(function(valeur){
			name.push(valeur.name)
		})
		
		
		name.forEach(function(etat){
			info[etat]=[]
			//console.log("KEYYYYY =",etat)
		})
		
		resultat.forEach(function(valeur){
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			//console.log("x =",x[0],"ligne = ",x[1])
			//console.log("COL =",col)
			
			name.forEach(function(etat){
			//console.log("etat = ",etat)
			//console.log("col = ",col)
			if (col===etat){
				//console.log("info[etat][ligne] = ",info[etat][ligne])
				//console.log("col value = ",req.body[valeur])
				info[etat][ligne]=req.body[valeur]
				//console.log("info[etat][ligne] = ",info[etat][ligne])
			}
			//console.log("info[etat] = ",info[etat])
			})	
			//console.log("info = ", info)
		})
		
		generique= Object.keys(info)
		//console.log("INFOOOOOOOOOOOOOOOO",info[generique[0]])
		info[generique[0]].forEach(function(user,i){
			objet={}
			generique.forEach(function(value){
				objet[value]=info[value][i]
			})
			returnFinal.push(objet)
		})
		
			FileForm[nomFormulaire]=returnFinal
			fs.writeFile(`data/${nomFormulaire}.json`, JSON.stringify(returnFinal), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mCreatForm({Formulaire:Formulaire,nomFormulaire:nomFormulaire, resp:resp, FileForm:FileForm})
	}
	
module.exports = {adminpost,membrespost,formulairepost}