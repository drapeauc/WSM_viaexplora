
fs = require('fs');
log = console.log.bind(console);

var FileForm={}

const express = require('express')
var http = require('http');
var serveIndex = require('serve-index')
var fs = require("fs");

var MCW= require('./MCW.js')
var {mTexte, mCheckbox} = MCW

var VX_widget=require('./VX_widget.js')
var {mTableauViForm2, mTableauVisuel, mTableauViForm3, index} = VX_widget

var	VX_server=require('./VX_server.js')
var {adminpost,membrespost} = VX_server

var FileServe
try{
	FileServe=require('./data/FileServe.json')
	}
catch(err){
	//console.log("il y a une erreur avec FileServe")
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
	//console.log("il y a une erreur avec Membre")
	Membre=[]
}

var Formulaire
try{
	Formulaire=require('./data/Formulaire.json')
}
catch(err){
	//console.log("il y a une erreur avec Formulaire")
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
	
    app.get('/adminpanel', function(req, resp) {
		mTableauVisuel({name:"Admin panel",nbUser:Login.length+1, resp:resp, Login:Login})
    })
	
	app.post('/adminpanel', function(req, resp) {
			

		adminpost({resultat:Object.getOwnPropertyNames(req.body),req:req, resp:resp})
	//tetetete	})
	})	
	app.get('/membres', function(req, resp) {
		
		mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp, Membre:Membre})
	
	})
	
	app.post('/membres', function(req, resp) {
			
		membrespost({req:req,resp:resp,resultat:Object.getOwnPropertyNames(req.body)})
	})	
	
	app.get('/', function (req,resp){
		index({resp:resp})
	})
	
	    app.get('/infoMembre/:abv', function(req, resp) {
		abv = req.params.abv
		
		
	
		
		//console.log(FileServe)
		
		mTableauViForm3({name:`Form 3 ${abv}`, resp:resp, FileServe:FileServe, abv:abv})

    })
	
	
		app.get('/formulaire/:fspec', function(req, resp) {
		
		mFormulaire({name:"Création Formulaire",nbFormulaire:Formulaire[req.params.fspec]?Formulaire[req.params.fspec].length+2:3, resp:resp,req:req, Formulaire:Formulaire, fspec:req.params.fspec})
	
	})
	
	app.post('/formulaire/:fspec', function(req, resp) {
		//console.log(req.params.fspec)
		formulairepost({name:"Création Formulaire",nbFormulaire:Formulaire[req.params.fspec]?Formulaire[req.params.fspec].length+2:3, resp:resp,req:req, Formulaire:Formulaire, fspec:req.params.fspec, resultat:Object.getOwnPropertyNames(req.body)})
	})	
	
	app.get('/view/:formulaire', function(req, resp, next) {
		formulaire= req.params.formulaire 
		if (!FileForm[formulaire]){
		try{
			FileForm[formulaire]=require(`./data/${formulaire}.json`)
			}
		catch(err){
		////console.log(err)
		////console.log("il y a une erreur avec FileServe")
		FileForm[formulaire]=[]
		}}
		if (!Formulaire[formulaire]) return next()	
			
		mCreatForm({Formulaire:Formulaire[formulaire],nomFormulaire:formulaire, resp:resp, FileForm})
	})
	
	app.post('/view/:formulaire', function(req,resp,next){
		valeur= req.params.formulaire 
		creationformulaire({FileForm, Formulaire:Formulaire[valeur],resultat:Object.getOwnPropertyNames(req.body),nomFormulaire:valeur, req:req, resp:resp,keys:Formulaire[valeur].name})

	})
	formulairecreation({app:app,Formulaire:Formulaire})
	
		app.post('/infoMembre/:abv', function(req, resp) {
		infopost({req:req,resp:resp, abv:req.params.abv,FileServe:FileServe})
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