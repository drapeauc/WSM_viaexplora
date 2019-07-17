
var log= console.log.bind(console)
var isArray= Array.isArray

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
        `<button class="mdc-button ${raised?'mdc-button--raised ':''}${outlined?'mdc-button--outlined ':''}" ${disabled?'disabled':'' b} >`,
		icon?mIcon({className:'mdc-button__icon', icon}):'',
        
		trailingIcon?mIcon({className:'mdc-button__icon', icon:trailingIcon}):'',
        '</button>'
        ].filter(x=>x).join('\n')
}

/*MCW Checkbox
*/
var idchk=0
mCheckbox{
	console.log("mCheckbox got",{ops})
	
	var {label='', checked, indeterminate, disabled, icon, trailingIcon, value, name, id=`idchk${idchk++}`} = ops
	return[`
	<div class="mdc-form-field">
		<div class="mdc-checkbox" ${disabled?'mdc-checkbox--disabled':''} ${value?`'value=${value}':''` ${name?`'name=${name}':''`} ${inderterminate?'aria-checked="mixed"':''} ${checked?'checked':''}>
			<input type="checkbox"
				   class="mdc-checkbox__native-control"
				   id=${id} ${disabled?'disabled':disabled}/>
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
		${label?`'<label for=id>${label}</label>'`:''}
	</div>	
	`]
	
}



/* AFAIRE CHARLES */
mPageMCW= function(ops,...children){ return children.join('\n')}

module.exports = { mButton, mIcon, mPageMCW }
