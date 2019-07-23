
fs = require('fs');
log = console.log.bind(console);


const express = require('express')
var http = require('http');

var MCW= require('./MCW.js')
var {mTexte, mCheckbox} = MCW
var fs = require("fs");

var Membre
try{
	Membre=require('./Membre.json')
}
catch(err){
	Membre=[]
}


mTableauVisuel=function(ops){
		var {name='',nbUser=Membre.length+2, resp} = ops
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Membre[i]?Membre[i].acro:''}),mTexte({name:`titre-${i}`,value:Membre[i]?Membre[i].titre:''}),mSelect({label:"Type",name:Membre[i]?Membre[i].type:'',value:["Demo","Clé en main"]})])
			
		}
		
		
		body=['<form method="POST" action="/adminreponse">',
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["user","titre","type"]}),
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}



function pageHTML(contenu) {
}

function initserveur() {
	

    const app = express()
    var publicDir = require('path').join(__dirname, '/public');
    app.use(express.static(publicDir));
    const port = 3000
	app.use(express.urlencoded())
	
/*   Redirect
    app.get('/', function(req, res, next) {
        req.url = '/vers ou la redirect ce fait'
        next('route')
    })
	*/
	/* req deffinition*/
	
    app.get('/adminpanel', function(req, resp) {
		mTableauVisuel({name:"Admin panel",nbUser:Membre.length+1, resp:resp})
		fs.writeFile("Membre.json", JSON.stringify(Membre), (err) => {
			if (err) console.log(err);
			console.log("Successfully Written to File.");
		});
    })
	
	app.post('/adminreponse', function(req, resp) {
			
		console.log("body=",req.body)
		var resultat = Object.getOwnPropertyNames(req.body)
			var type=[]
			var acro=[]
			var titre=[]
			Membre=[]
			
		resultat.forEach(function(valeur){
			var x = valeur.split('-')
			var col = x[0], ligne = x[1]
			switch (col){
				case "user":
					acro[ligne]=req.body[valeur]
				break;
				case "titre":
					titre[ligne]=req.body[valeur]
				break;
				case "type":
					type[ligne]= !!req.body[valeur]
					console.log(type[ligne])
				break;
			}
			
		})
		console.log(`acro= ${acro}`,acro)
		
		acro.forEach(function(user,i){
			if(user){
				Membre.push({
					acro:user,
					titre:titre[i],
					type:type[i]
					})
			}
			})
			fs.writeFile("Membre.json", JSON.stringify(Membre), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mTableauVisuel({name:"Panel 2",nbUser:Membre.length+1, resp:resp})
	})	
	
	app.listen(port, () => console.log("server listen")
	)
}

 /*
 separer
 User,pw, type (switch)
 mettre array bonne position
 string.parseInt()
 */


initserveur()