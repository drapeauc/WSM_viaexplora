var MCW= require('./MCW.js')
var {mTexte, mCheckbox, mSelect,mMultitexte} = MCW

//adminPanel
mTableauVisuel=function(ops){
		var {name='',Login, nbUser=Login.length+2, resp} = ops
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Login[i]?Login[i].username:''}),mTexte({name:`password-${i}`,value:Login[i]?Login[i].password:''}),mCheckbox({name:`ROOT-${i}`,checked:Login[i]?(Login[i].root?true:''):''})])
			
		}
		
		
		body=[	mTopAppBar({contenu:[{type:'texte', label:`Admin panel`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				'<form method="POST" action="/adminpanel">',
				mTable({name:"AdminPanel",infoTbl:user,headerTbl:["user","Password","ROOT"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}

//Membres
mTableauViForm2=function(ops){
		var {name='',Membre, nbUser=Membre.length+2, resp} = ops
		////console.log("membre = ",Membre)
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Membre[i]?Membre[i].acro:''}),mTexte({name:`titre-${i}`,value:Membre[i]?Membre[i].titre:''}),mSelect({label:"type",name:`type-${i}`,options:["Demo","Clé en main"],value:Membre[i]?Membre[i].type:''}),mButton({liens: `/infoMembre/${Membre[i]?Membre[i].acro:''}`,primary:0,outline:1,label:Membre[i]?Membre[i].titre:'',value:"salut les amis",outlined:"true",disabled:!Membre[i]})])
			
		}
		
		
		body=[	mTopAppBar({contenu:[{type:'texte', label:`Membre`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				'<form method="POST" action="/membres">',
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["user","titre","type","infoMembre"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}

//infoMembre
mTableauViForm3=function(ops){
		var {name='', resp, FileServe, abv} = ops
		i=0
		user=[]
		
		var membre= FileServe[abv]?FileServe[abv]:{}
		
		user.push([mTexte({name:`titre`,value:membre.titre?membre.titre:''}),mMultitexte({name:`dns`,value:membre.dns?membre.dns:''}),mTexte({name:`path`,value:membre.path?membre.path:''}),mCheckbox({name:`index`,checked:membre.index?true:''}),mCheckbox({name:`notfound`,checked:membre.notFound?true:''})])
		
		
		
body=[			mTopAppBar({contenu:[{type:'texte', label:`Info membre ${abv}`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				`<form method="POST" action="/infoMembre/${abv}">`,
				mTable({name:"Form 3 panel",infoTbl:user,headerTbl:["Titre","DNS","Path","index","notFound"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}

index=function(ops){
	var {resp, res} = ops
	body=[	mTopAppBar({contenu:[{type:'texte', label:`Index`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				'<br>',
				mButton({liens: `/adminpanel`,primary:0,outline:1,label:"Admin Panel",outlined:"true"}),
				'<br>',
				'<br>',
				mButton({liens: `/membres`,primary:0,outline:1,label:"Liste membre",outlined:"true"}),
				'',].join('')
title="index"
resp.send(mStart({title:title, body:body},))
}


mFormulaire=function(ops){
		var {name='',Formulaire, nbFormulaire=2, resp,fspec} = ops
		////console.log("Formulaire = ",Formulaire)
		////console.log(fspec)
		i=-1
		user=[]
		////console.log(Formulaire)
		if (Formulaire && !Formulaire[fspec]){
			Formulaire[fspec]=[]
			////console.log(Formulaire)
		}
		
		////console.log("nbFormulaire =",nbFormulaire)
		////console.log("form=",Formulaire[fspec][0])

		while (i<nbFormulaire){
			i++
		user.push([mTexte({name:`name-${i}`,value:Formulaire[fspec][i]?Formulaire[fspec][i].name:''}),mSelect({name:`type-${i}`,options:["texte","texte area","select","checkbox"],value:Formulaire[fspec][i]?Formulaire[fspec][i].type:''}),mTexte({name:`value-${i}`,value:Formulaire[fspec][i]?Formulaire[fspec][i].value:''}),mTexte({name:`options-${i}`,value:Formulaire[fspec][i]?Formulaire[fspec][i].options:''})])
			
		}
		 
		
		body=[	mTopAppBar({contenu:[{type:'texte', label:`Formulaire`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				'<br>',
				'<br>',
				`<form method="POST" action="/formulaire/${fspec}">`,
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["name","type","value","options"]}),
				'<br>',
				'Combien de ligne voulez vous: ',
				`${mTexte({name:"ligne",value:''})}`,
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}

mCreatForm=function(ops){
		var {resp, Formulaire,nomFormulaire,FileForm} = ops
		////console.log("le nom formulaire :",nomFormulaire)
		if (!FileForm[nomFormulaire]){
		try{
			FileForm[nomFormulaire]=require(`./data/${nomFormulaire}.json`)
			}
		catch(err){

		FileForm[nomFormulaire]=[]
		}}
		lignePop=Formulaire.pop()
		question=[]

		
		i=-1
		
		//////console.log(question)
		nbForm=FileForm[nomFormulaire].length+lignePop-1
		Form=[]
		name=[]
		Formulaire.forEach(function(valeur){
			name.push(valeur.name)
		})
		while (i<nbForm){
		i++
		question=[]
		Formulaire.forEach(function(valeur){
			//
			switch(valeur.type){
				case "texte":
				question.push(mTexte({name:`${valeur.name}-${i}`,value:FileForm[nomFormulaire][i]?FileForm[nomFormulaire][i][valeur.name]:''}))
				break;
				case "texte area":
				question.push(mMultitexte({name:`${valeur.name}-${i}`,value:FileForm[nomFormulaire][i]?FileForm[nomFormulaire][i][valeur.name]:''}))
				break;
				case "select":
				var choixOptions=valeur.options.split(",")
				question.push(mSelect({name:`${valeur.name}-${i}`,options:choixOptions, value:FileForm[nomFormulaire][i]?FileForm[nomFormulaire][i][valeur.name]:''}))
				break;
				case "checkbox":
				question.push(mCheckbox({name:`${valeur.name}-${i}`,checked:FileForm[nomFormulaire][i]?FileForm[nomFormulaire][i][valeur.name]:''}))
				break
				case "bouton":
				var choixOptions=valeur.options.split(",")
				question.push(mButton({liens:`${choixOptions[0]}${FileForm[nomFormulaire][i]?FileForm[nomFormulaire][i][valeur[choixOptions[1]]:''}}`, label:""})
				break;
			}
			//)
		})
		Form.push(question)
		}
		Formulaire.push(lignePop)
		body=[	mTopAppBar({contenu:[{type:'texte', label:`${nomFormulaire}`, position:'start'}]}),
				'<br>',
				'<br>',
				'<br>',
				`<form method="POST" action="/view/${nomFormulaire}">`,
				mTable({name:"Form 2 panel",infoTbl:Form,headerTbl:name}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title="respect"
        resp.send(mStart({title:title, body:body},))
}


formulairecreation=function (ops) {
	var {app, Formulaire} = ops
	keys= Object.keys(Formulaire)
	////console.log("les keys sont:",keys)
	var FileForm={}
	
	keys.forEach(function(valeur){
		
		app.get(`/${valeur}`, function(req, resp) {
			mCreatForm({Formulaire:Formulaire[valeur],nomFormulaire:valeur, resp:resp, FileForm})
		})
		
		app.post(`/${valeur}`, function(req, resp) {
		//////console.log("AAAAAAAAAAAAAAAAAAA:",Formulaire[valeur].name)
		creationformulaire({FileForm, Formulaire:Formulaire[valeur],resultat:Object.getOwnPropertyNames(req.body),nomFormulaire:valeur, req:req, resp:resp,keys:Formulaire[valeur].name})

	})	
	})
	/*app.get('/bob', function(req, resp) {
		
		mTableauViForm2({name:"Panel 2",nbUser:Membre.length+1, resp:resp, Membre:Membre})
	
	})*/
}

module.exports = {mTableauViForm2, mTableauVisuel, mTableauViForm3, index, mFormulaire}