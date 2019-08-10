
fs = require('fs');
log = console.log.bind(console);



const express = require('express')
var http = require('http');
var serveIndex = require('serve-index')
var fs = require("fs");

var MCW= require('./MCW.js')
var {mTexte, mCheckbox} = MCW

var VX_widget=require('./VX_widget.js')
var {mTableauViForm2, mTableauVisuel, mTableauViForm3, index} = VX_widget

var	VX_server=require('./VX_server.js')
var {adminpost,membrespost,formulairepost} = VX_server

var FileServe
try{
	FileServe=require('./data/FileServe.json')
	}
catch(err){
	console.log("il y a une erreur avec FileServe")
	FileServe={}
}
var Login
try{
	Login=require('./data/login.json')
}
catch(err){
	Login=[]
}

var Membre
try{
	Membre=require('./data/Membre.json')
}
catch(err){
	console.log("il y a une erreur avec Membre")
	Membre=[]
}

var Formulaire
try{
	Formulaire=require('./data/Formulaire.json')
}
catch(err){
	console.log("il y a une erreur avec Formulaire")
	Formulaire={}
}


function pageHTML(contenu) {
}

function initserveur() {
	

    const app = express()
    var publicDir = require('path').join(__dirname, '/public');
    const port = 3000
	app.use(express.urlencoded())

/*   Redirect
    app.get('/', function(req, res, next) {
        req.url = '/vers ou la redirect ce fait'
        next('route')
    })
	*/
	/* req deffinition*/
	
	// ajout /:abv     abv = abv
    
	app.get('/formulaire/:fspec', function(req, resp) {
		
		mFormulaire({name:"Création Formulaire",nbFormulaire:2+1, resp:resp, Formulaire:Formulaire, fspec:req.params.fspec})
	
	})
	
	app.post('/formulaire/:fspec', function(req, resp) {
		console.log(req.params.fspec)
		formulairepost({name:"Création Formulaire",nbUser:2+1, resp:resp, Formulaire:Formulaire, fspec:req.params.fspec, resultat:Object.getOwnPropertyNames(req.body)})
	})	
	


	app.use(express.static('./'))
	app.use(serveIndex('./', {'icons': true}))
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