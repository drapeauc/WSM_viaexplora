
var log= console.log.bind(console)
var isArray= Array.isArray

/*mStart
title = titre HTML
body = contenu page HTML
*/
mStart= function(ops){
	var {title, body} = ops
	return `
	<html>
		<head>
			  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
			  <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.css" rel="stylesheet">
			  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.js"></script>

				<meta charset="UTF-8">
				<title>${title}</title>
		</head>
<body>
${body}
</body>
<script type="text/javascript">
  window.mdc.autoInit();
</script>
</html>
`
}
/* MCW Icon
 * ariaNotHidden: tf f ne pas metrre le aria hidden
 * children: nom de l'icon
 */
mIcon= function(ops){
    var { icon='', ariaNotHidden,className=''}=ops
    // join ' ' pcq plusieurs icons possible
    return `<i class="material-icons ${className}" ${ariaNotHidden?'':'aria-hidden="true"'}>${icon}</i>`
}


/* MCW Button
 * primary: tf t style primary
 * outlined: tf f  ""
 * href: string '', href utilise un tag a
 * icon: string '', nom de l'icon avant
 * trailingIcon: string '' nom icon après
 */
 
 
mButton= function(ops){

    console.log("mButton got",{ops})
	
    var { label='', raised=true, outlined, dense=true, icon, trailingIcon, disabled, href,  className='' }= ops


    return [
        `<button class="mdc-button ${raised?'mdc-button--raised ':''}${outlined?'mdc-button--outlined ':''}" ${disabled?'disabled':''} >`,
		icon?mIcon({className:'mdc-button__icon', icon}):'',
        
		trailingIcon?mIcon({className:'mdc-button__icon', icon:trailingIcon}):'',
        '</button>'
        ].filter(x=>x).join('\n')
}

/*MCW Checkbox
label: Texte afficher
checked: Cocher de base ou none
inderterminate: Inteterminate de base (a travailler)
disabled: disabled
icon: avant
trailingIcon: apres
value: Valeur de retour (0 ou 1)
name: Nom
Id: Id généré
*/
var idchk=0
mCheckbox=function(ops){
	
	var {label='', checked, inderterminate, disabled, icon, trailingIcon, value, name, id=`idchk${idchk++}`} = ops
	return[`
	<div class="mdc-form-field">
		<div class="mdc-checkbox">
			<input type="checkbox" ${value?`value=${value}`:''}${name?`name=${name}`:''}
				   class="mdc-checkbox__native-control"
				   id=${id} ${disabled?'disabled':''}
				   ${disabled?'mdc-checkbox--disabled':''} 
				   ${inderterminate?'aria-checked="mixed"':''} 
				   ${checked?'checked':''}/>
			<div class="mdc-checkbox__background">
			  <svg class="mdc-checkbox__checkmark"
				   viewBox="0 0 24 24">
				<path class="mdc-checkbox__checkmark-path"
					  fill="none"
					  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
			  </svg>
			  <div class="mdc-checkbox__mixedmark"></div>
			</div>
		  </div>
		${label?`<label for=${id}>${label}</label>`:''}
	</div>	
	`]
	
}

/*mSwitches

*/
var idswi=0
mSwitches=function(ops){
	
	var {label='',checked,disabled,icon,trailingIcon,value,name,id=`idswi${idswi++}`} = ops
	return[` 
<div class="mdc-switch ${disabled?'mdc-switch--disabled':''} ${checked?'mdc-switch--checked':''}" data-mdc-auto-init="MDCSwitch" >
	<div class="mdc-switch__track"></div>
	<div class="mdc-switch__thumb-underlay">
		<div class="mdc-switch__thumb">
        <input type="checkbox" id=${id} class="mdc-switch__native-control" role="switch" ${value?`value="${value}"`:''} ${name?`name="${name}"`:''} ${disabled?'disabled':''} ${checked?'checked':''}>
		</div>
	</div>
</div>
<label for=${id}>${label}</label>
	`]
}
var idtxt=0
mTexte=function(ops){ 
	var {label='',maxL="140",helper,disabled,icon,trailingIcon,value,name,id=`idtxt${idtxt++}`} = ops
	return[` 
	<div class="mdc-text-field ${disabled?'mdc-text-field--disabled':''}" data-mdc-auto-init="MDCTextField">
		<input type="text" id=${id} class="mdc-text-field__input" ${disabled?'disabled':''} ${value?`value="${value}"`:''}>
		<label class="mdc-floating-label ${value?'mdc-floating-label--float-above':''}for=${id}">${label}</label>
		<div class="mdc-line-ripple"></div>
	</div>
	${helper?`<div class="mdc-text-field-helper-line">
	<div class="mdc-text-field-helper-text">${helper}</div>
	</div> ` :''}
	
	`]
}
/*mMultitexte
Problème avec: 
*/
var idmultitxt=0
mMultitexte=function(ops){
	var {label='',rows="8",maxL="140",cols="40",helper,disabled,icon,trailingIcon,value,name,id=`idmultitxt${idmultitxt++}`} = ops
 return[` 
  <div class="mdc-text-field mdc-text-field--textarea ${disabled?'mdc-text-field--disabled':''}" data-mdc-auto-init="MDCTextField">
  <div class="mdc-text-field-character-counter">0 / ${maxL}</div>
  <textarea id=${id} class="mdc-text-field__input" rows="${rows}" cols="${cols}" maxlength="${maxL}" ${disabled?'disabled':''}>${value?`${value}`:''}</textarea>
  <div class="mdc-notched-outline">
    <div class="mdc-notched-outline__leading"></div>
    <div class="mdc-notched-outline__notch">
      <label for=${id} class="mdc-floating-label" >${label}</label>
    </div>
    <div class="mdc-notched-outline__trailing"></div>
  </div>
</div>
${helper?`<div class="mdc-text-field-helper-line">
	<div class="mdc-text-field-helper-text">${helper}</div>
	</div> ` :''}
`]
}
module.exports = { mButton, mIcon, mCheckbox, mSwitches,mStart, mTexte, mMultitexte}
