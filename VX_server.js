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
					console.log(ROOT[ligne])
				break;
			}
			
		})
		console.log(`username= ${username}`,username)
		
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
			  console.log("Successfully Written to File.");
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
			//console.log("valeur= ",valeur)
			switch (col){
				case "user":
					acro[ligne]=req.body[valeur]
				break;
				case "titre":
					titre[ligne]=req.body[valeur]
				break;
				case "type":
					type[ligne]=req.body[valeur]
				//	console.log(type[ligne])
				break;
			}
	//	console.log("type = "+type)
	//	console.log("acro = "+acro)
		})
		console.log(`acro= ${acro}`,acro)
		
		acro.forEach(function(user,i){
			if(user){
		//		console.log("GELO"+type[i])
		//		console.log(user)
				Membre.push({
					acro:user,
					titre:titre[i],
					type:type[i]
					})
			}
			})
			
			fs.writeFile("data/Membre.json", JSON.stringify(Membre), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
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

infopost=function(ops){
	var {abv, req, resp, FileServe} = ops
	
	Formulaire[abv]={	
		name: req.body.titre,
		type: req.body.dns,
		value: req.body.path,
		options: req.body.index,
		notFound: req.body.notfound
					}
		fs.writeFile(`data/FileServe.json`, JSON.stringify(FileServe), (err) => {
				if (err) console.log(err);
				else console.log(FileServe);
		});
		mTableauViForm3({name:"Form 3", resp:resp, FileServe:FileServe, abv})
	
}

module.exports = {adminpost,membrespost}