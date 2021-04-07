// 使用者輸入數字
let keyNumber = 0

// 暫存數字
let tempNumber = 0

// 使用者輸入運算
let keyOperator = ''

// 顯示
let result = document.getElementById('result')

/* 功能鍵 */

// 清除
let clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function () {
  result.innerText = '0'
  keyNumber = 0
  tempNumber = 0
  keyOperator = ''
})

let plusmn = document.getElementById('plusmn')
let percnt = document.getElementById('percnt')

/* 運算子 */
// 加
let addButton = document.getElementById('add')
addButton.addEventListener('click', function () {
  inputOperator('+')
})

let minusButton = document.getElementById('minus')
let multiplyButton = document.getElementById('multiply')
let divideButton = document.getElementById('divide')

// 等於

let equalButton = document.getElementById('equal')
equalButton.addEventListener('click', function () {
  calculate()
})

let calculate = () => {
  switch (keyOperator) {
    case '+':
      result.innerText = addResult(Number(keyNumber), Number(tempNumber))
      break
  }

  keyNumber = result.innerText
  tempNumber = 0
  debugLog()
}

let inputOperator = operator => {
  if (keyOperator) {
    calculate()
  }
  keyOperator = operator
  debugLog()
}

/* 數字鍵 */
let number = []
for (let i = 0; i <= 9; i++) {
  number[i] = document.getElementById('number' + i)
  number[i].addEventListener('click', function () {
    InputNumber(this.innerText)
    debugLog()
  })
}

let InputNumber = number => {
  if (keyOperator && tempNumber === 0) {
    tempNumber = keyNumber
    keyNumber = 0
  }

  keyNumber += number
  result.innerText = Number(keyNumber)
}

let addResult = (a, b) => {
  return a + b
}

let debugLog = () => {
  console.log('keyNumber=' + Number(keyNumber))
  console.log('tempNumber=' + Number(tempNumber))
  console.log('keyOperator=' + keyOperator)
}
