
fs = require('fs');
log = console.log.bind(console);


const express = require('express')
var http = require('http');

var MCW= require('./MCW.js')
var VX_widget=require('./VX_widget.js')

var {mTexte, mCheckbox} = MCW
var {mTableauViForm2, mTableauVisuel, mTableauViForm3} = VX_widget
var fs = require("fs");

var Login
try{
	Login=require('./login.json')
}
catch(err){
	Login=[]
}

var Membre
try{
	Membre=require('./Membre.json')
}
catch(err){
	Membre=[]
}

var FileServe
try{
	FileServe=require('./FileServe.json')
}
catch(err){
	FileServe=[]
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
		mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp, Login:Login})
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
			mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp,Login:Login})
	})	
	
	
		app.get('/form2', function(req, resp) {
			
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
					type[ligne]=req.body[valeur]
				//	console.log(type[ligne])
				break;
			}
		//	console.log("type = "+type)
		//	console.log("acro = "+acro)
		})
	//	console.log(`acro= ${acro}`,acro)
		
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
			fs.writeFile("Membre.json", JSON.stringify(Membre), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp, Membre:Membre})
	})	
	
	
	app.post('/form2reponse', function(req, resp) {
			
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
					type[ligne]=req.body[valeur]
				//	console.log(type[ligne])
				break;
			}
		//	console.log("type = "+type)
		//	console.log("acro = "+acro)
		})
	//	console.log(`acro= ${acro}`,acro)
		
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
			fs.writeFile("Membre.json", JSON.stringify(Membre), (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
			mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp})
	})	
	
	    app.get('/form3', function(req, resp) {
		mTableauViForm3({name:"Form 3",nbUser:Login.length+1, resp:resp, FileServe:FileServe})
		fs.writeFile("FileServe.json", JSON.stringify(Login), (err) => {
			if (err) console.log(err);
			console.log("Successfully Written to File.");
		});
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