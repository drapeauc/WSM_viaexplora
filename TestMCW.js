
var MCW= require('./MCW.js')

body=[
	/*mButton({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Normal",value:"salut les amis"}),
	mButton({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"outlined",value:"salut les amis",outlined:"true"}),
	mButton({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Disabled",value:"salut les amis",disabled:"true"}),
	"<br>",
	mSwitches({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Normal",value:"salut les amis"}),
	mSwitches({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Checked",value:"salut les amis",checked:"true"}),
	mSwitches({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Disabled",value:"salut les amis",disabled:"true"}),
	"<br>",
	mCheckbox({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Normal",value:"salut les amis"}),
	mCheckbox({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Checked",value:"salut les amis",checked:"true"}),
	mCheckbox({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Disabled",value:"salut les amis",disabled:"true"}),
	"<br>",
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Normal"}),
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"disabled",disabled:"TRUE"}),
	"<br>",
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"value",value:"je suis la value"}),
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"helper",helper:"je suis le helper"}),
	"<br>",
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"type number",type:"number"}),
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"type date",type:"date"}),
	"<br>",
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"type time",type:"time"}),
	mTexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"type color",type:"color"}),
	"<br>",
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"multi - ligne",row:"10"}),
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"disable",disabled:"10"}),
	"<br>",
	"<br>",
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"value",value:"je suis la value"}),
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Helper",helper:"je suis le helper"}),
	"<br>",
	mRadio({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Normal",name:"radio1"}),
	mRadio({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"checked",name:"radio1",checked:"yes"}),
	mRadio({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"disabled",name:"radio1", disabled:"yes"}
	"<br>"),
	mSelectMenu({label:"disabled", disabled:"yes",name:["valeur1","valeur2","valeur3"],disabled:true}),
	mSelectMenu({label:"outlined",name:["valeur1","valeur2","valeur3"],outlined:true}),
	mSelectMenu({label:"normal", name:["valeur1","valeur2","valeur3"]}),
	"<br>"*/
	mTopAppBar({contenu:[{type:'logo', label:'menu',position:'start'},{type:'texte', label:'myMCW',position:'end'},{type:'texte', label:'START',position:'strat'}]}),
	''].join('')
 



console.log(mStart({title:"Charles", body:body},
))
