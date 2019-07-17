
var MCW= require('./MCW.js')

var { mPageMCW, mButton } = MCW

test=mPageMCW({},
  mButton({label:'bouton simple'}),
  '<br/>',
  mButton({primary:0,outline:1,icon:'stop',trailingIcon:'start',label:"Stop/Start"},
    ),
 ''
 )


console.log(test)
