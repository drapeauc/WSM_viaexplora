fs = require('fs');

var VX_widget=require('./VX_widget.js')
var {mTableauViForm2, mTableauVisuel, mTableauViForm3} = VX_widget


body=[	mTopAppBar({contenu:[{type:'texte', label:`Index`, position:'start'}]}),
				'<br>',
				mButton({liens: `/adminpanel`,primary:0,outline:1,label:Membre[i]?Membre[i].titre:'',outlined:"true",disabled:!Membre[i]}),
				'<br>',
				mButton({liens: `/membres`,primary:0,outline:1,label:Membre[i]?Membre[i].titre:'',outlined:"true",disabled:!Membre[i]})
				'',].join('')

resp.send(mStart({title:title, body:body},))