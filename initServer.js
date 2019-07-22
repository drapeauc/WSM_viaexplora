
fs = require('fs');
log = console.log.bind(console);


const express = require('express')
var http = require('http');

var MCW= require('./MCW.js')
var {mTexte, mCheckbox} = MCW
var fs = require("fs");

var Login
try{
	Login=require('./login.json')
}
catch(err){
	Login=[]
}


mTableauVisuel=function(ops){
		var {name='',nbUser=Login.length+2, resp} = ops
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Login[i]?Login[i].username:''}),mTexte({name:`password-${i}`,value:Login[i]?Login[i].password:''}),mCheckbox({name:`ROOT-${i}`,checked:Login[i]?(Login[i].root?true:''):''})])
			
		}
		
		
		body=['<form method="POST" action="/adminreponse">',
				mTable({name:"AdminPanel",infoTbl:user,headerTbl:["user","Password","ROOT"]}),
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
		mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp})
		fs.writeFile("login.json", JSON.stringify(Login), (err) => {
			if (err) console.log(err);
			console.log("Successfully Written to File.");
		});
    })
	
	app.post('/adminreponse', function(req, resp) {
			
		console.log("body=",req.body)
		var resultat = Object.getOwnPropertyNames(req.body)
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
			fs.writeFile("login.json", JSON.stringify(Login), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp})
	})	
	
	app.listen(port, () => console.log("server listen")
	)
}

 /*
 separer
 User,pw, root (switch)
 mettre array bonne position
 string.parseInt()
 */


initserveur()