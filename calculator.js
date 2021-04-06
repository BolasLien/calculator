// 使用者輸入
let tempA = 0
let tempB = 0
let tempOperator = ''

// 顯示
let result = document.getElementById('result')

/* 功能鍵 */

// 清除
let clear = document.getElementById('clear')
clear.addEventListener('click', function () {
  result.innerText = '0'
  tempA = 0
  tempB = 0
  tempOperator = ''
})

let plusmn = document.getElementById('plusmn')
let percnt = document.getElementById('percnt')

/* 運算子 */
// 加
let add = document.getElementById('add')
add.addEventListener('click', function () {
  inputOperator('+')
})

let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')

// 等於

let equal = document.getElementById('equal')
equal.addEventListener('click',function(){
  switch(tempOperator){
    case '+':
      result.innerText = addResult(Number(tempA),Number(tempB))
      break;
  }

  tempA = result.innerText
  tempB = 0
  tempOperator = ''
})


let inputOperator = operator =>{
  tempOperator = operator
}

/* 數字鍵 */
let number = []
for (let i = 0; i <= 9; i++) {
  number[i] = document.getElementById('number' + i)
  number[i].addEventListener('click', function () {
    InputNumber(this.innerText)
    console.log('tempA='+ Number(tempA));
    console.log('tempB='+ Number(tempB));
    console.log('tempOperator='+tempOperator);
  })
}

let InputNumber = number => {
  if (result.innerText == '0') {
    result.innerText = ''
  }

  if(tempOperator){
    tempB += number
  } else {
    tempA += number
  }
  result.innerText += number
}

let addResult = (a,b)=>{
  return a + b
}