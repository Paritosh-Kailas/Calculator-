const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action

    }
})


if(!action){
    console.log('number key!')
}
if(
    action === 'add' || 
    action === 'subtract' ||
    action === 'multiply'|| 
    action === 'divide' 
){
    console.log('operator key')
}
if(
    action === 'decimal'
){
    console.log('decimal key')
}
if(action === 'clear'){
    console.log('AC key!')
}
if(action === 'calculate'){
    console.log('equal-key!')
}

const display = document.querySelector('.calculator_display')
keys.addEventListener('click', e => {
    if(e.target.matches(button)){
        const key = e.target
        const action = key.dataset.action
        const keycontent = key.textcontent
        const displayedNum = display.textContent
    }

})
if(!action){
    if(displayedNum === '0'){
        display.textContent = keycontent
    }else{
        display.textContent = displayedNum + keycontent
    }
}
if(action === 'decimal'){
    display.textContent = displayedNum + '.'

}
if( action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
){
    keys.classList.add("is-depressed")
    calculator.datset.previouskeytype = 'operator'
}
keys.addEventListener('click',e =>{
    if(e.target.matches('button')){
        const key = e.target

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
}

)
if(!action){
    const previouskeytype = calculator.dataset.previouskeytype
    if(displayedNum === '0' || previouskeytype === 'operator'){
        display.textContent = keycontent
    }
    else{
        display.textContent = displayedNum + keycontent
    }

}
if(action === 'calculate'){
    const first_value = calculator.dataset
}

