
		
		
	
		while (i<nbUser){
			i++
		//	quoi?({	
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