var MCW= require('./MCW.js')
var {mTexte, mCheckbox, mSelect,mMultitexte} = MCW

mTableauVisuel=function(ops){
		var {name='',Login, nbUser=Login.length+2, resp} = ops
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

mTableauViForm2=function(ops){
		var {name='',Membre, nbUser=Membre.length+2, resp} = ops
		console.log("membre = ",Membre)
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Membre[i]?Membre[i].acro:''}),mTexte({name:`titre-${i}`,value:Membre[i]?Membre[i].titre:''}),mSelect({label:"type",name:`type-${i}`,options:["Demo","Clé en main"],value:Membre[i]?Membre[i].type:''})])
			
		}
		
		
		body=['<form method="POST" action="/form2">',
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["user","titre","type"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}


mTableauViForm3=function(ops){
		var {name='', resp, FileServe, abv} = ops
		i=0
		user=[]
		
		var membre= FileServe[abv]?FileServe[abv]:{}
		
		user.push([mTexte({name:`titre`,value:membre.titre?membre.titre:''}),mMultitexte({name:`dns`,value:membre.dns?membre.dns:''}),mTexte({name:`path`,value:membre.path?membre.path:''}),mCheckbox({name:`index`,checked:membre.index?true:''}),mCheckbox({name:`notfound`,checked:membre.notFound?true:''})])

		
		
		body=[	`<h1>For ${abv}</h1>`,
				'<br>',
				`<form method="POST" action="/form3/${abv}">`,
				mTable({name:"Form 3 panel",infoTbl:user,headerTbl:["Titre","DNS","Path","index","notFound"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}


module.exports = {mTableauViForm2, mTableauVisuel, mTableauViForm3}