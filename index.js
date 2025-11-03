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
    const first_value = calculator.dataset.first_value
    const operator = calculator.dataset.operator
    const second_value = displayedNum
}

function  calculate(n1,n2,operator,result){
    if(operator === 'add'){
        result = parseFloat(n1) + parseFloat(n2)
    }
    else if(operator === 'subtract'){
        result = parseFloat(n1) - parseFloat(n2)
    }
    else if(operator === 'multiply'){
        result = parseFloat(n1) * parseFloat(n2)
    }
    else if(operator === 'divide'){
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}
if(!displayedNum.includes('.')){
    display.textContent = displayedNum + '.'
}
if( action === 'add' ||
    action === 'subtract' ||
    action === 'divide' ||
    action === 'multiply'
){
    const first_value = calculator.dataset.first_value
    const operator = calculator.dataset.operator
    const second_value = displayedNum

    if(first_value && operator){
    display.textContent = calculate(first_value,operator,second_value)
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator' 
calculator.dataset.firstValue = displayedNum

calculator.dataset.operator = action

}
if(first_value && 
   operator &&
   previousKeyType != 'operator'
){
    display.textContent = calculate(first_value,operator,second_value)

    const calc_value = calculate(first_value,operator,second_value)
    display.textContent = calc_value
    calculator.database.first_value = calc_value
}
else{
    calculator.database.first_value = displayedNum
}
key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action

if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum

if (firstValue) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }

calculator.dataset.previousKeyType = 'calculate'
}



