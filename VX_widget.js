var MCW= require('./MCW.js')
var {mTexte, mCheckbox, mSelect,mMultitexte} = MCW

mTableauVisuel=function(ops){
		var {name='',nbUser=Login.length+2, resp, Login} = ops
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
		var {name='',nbUser=Membre.length+2, resp, Membre} = ops
		i=-1
		user=[]
		
	
		while (i<nbUser){
			i++
		user.push([mTexte({name:`user-${i}`,value:Membre[i]?Membre[i].acro:''}),mTexte({name:`titre-${i}`,value:Membre[i]?Membre[i].titre:''}),mSelect({label:"type",name:`type-${i}`,options:["Demo","Clé en main"],value:Membre[i]?Membre[i].type:''})])
			
		}
		
		
		body=['<form method="POST" action="/form2reponse">',
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["user","titre","type"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}


mTableauViForm3=function(ops){
		var {name='',nbUser=FileServe.length+2, resp, FileServe} = ops
		i=0
		user=[]
		
	
		user.push([mTexte({name:`titre-${i}`,value:FileServe[i]?FileServe[i].titre:''}),mMultitexte({name:`DNS-${i}`,value:FileServe[i]?FileServe[i].DNS:''}),mTexte({name:`path-${i}`,value:FileServe[i]?FileServe[i].path:''}),mCheckbox({name:`index-${i}`,checked:FileServe[i]?(FileServe[i].index?true:''):''}),mCheckbox({name:`notfound-${i}`,checked:FileServe[i]?(FileServe[i].notfound?true:''):''})])

		
		
		body=['<form method="POST" action="/form2reponse">',
				mTable({name:"Form 2 panel",infoTbl:user,headerTbl:["Titre","DNS","Path","index","notFound"]}),
				'<br>',
			  '<button type="submit">Metre à jour</button>',
			  '</form>',
		'',].join('')
		title=name
        resp.send(mStart({title:title, body:body},))
}


module.exports = {mTableauViForm2, mTableauVisuel, mTableauViForm3}