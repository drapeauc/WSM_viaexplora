
var MCW= require('./MCW.js')

body=[
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
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"multi - ligne",row:"10"}),
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"disable",disabled:"10"}),
	"<br>",
	"<br>",
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"value",value:"je suis la value"}),
	mMultitexte({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Helper",helper:"je suis le helper"}),
	''].join('')
 



console.log(mStart({title:"Charles", body:body},
))
