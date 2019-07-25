fs = require('fs');
log = console.log.bind(console);


const express = require('express')
var http = require('http');

var MCW= require('./MCW.js')
var {mTexte, mCheckbox} = MCW
var fs = require("fs");

var FileServe
try{
	FileServe=require('./Membre.json')
}
catch(err){
	FileServe=[]
}



MesOptions=function(ops){
var options=[]

FileServe.forEach(function(user,i){
	options[i]=user.titre
})
return options
}


menuSelect=function(ops){
	var {name='', resp} = ops
		body=['<form method="POST" action="/fileserv_post">',
				mSelect({name:"User",options:MesOptions()}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
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
	
	
	//Aller chercher le bon membre
	//Ecrire et lire son fichier
	//
    app.get('/fileserv', function(req, resp) {
		menuSelect({name:"Admin panel", resp:resp})
		fs.writeFile(`${publicDir[0].acro}.json`, JSON.stringify(Membre), (err) => {
			if (err) console.log(err);
			console.log("Successfully Written to File.");
		});
    })
	
	app.post('fileserv_post', function (req,resp){
		manu
	}
	
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