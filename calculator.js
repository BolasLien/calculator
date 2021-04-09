// 使用者輸入數字
let keyNumber = 0

// 暫存數字
let tempNumber = 0

// 使用者輸入運算
let keyOperator = ''

// 顯示
const result = document.getElementById('result')

/* 功能按紐 */
// 清除
const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function () {
  result.innerText = '0'
  keyNumber = 0
  tempNumber = 0
  keyOperator = ''
})

const plusmn = document.getElementById('plusmn')
plusmn.addEventListener('click', function () {
  if (keyOperator && tempNumber === 0) {
    tempNumber = keyNumber
    keyNumber = 0
  } else {
    keyNumber =  keyNumber * -1
  }

  result.innerText = keyNumber
  debugLog()
})
const percnt = document.getElementById('percnt')

/* 運算按紐 */
// 加
const addButton = document.getElementById('add')
addButton.addEventListener('click', function () {
  inputOperator('+')
})

// 減
const minusButton = document.getElementById('minus')
minusButton.addEventListener('click', function () {
  inputOperator('-')
})

// 乘
const multiplyButton = document.getElementById('multiply')
multiplyButton.addEventListener('click', function () {
  inputOperator('*')
})

// 除
const divideButton = document.getElementById('divide')
divideButton.addEventListener('click', function () {
  inputOperator('/')
})

// 等於
const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', function () {
  calculate()
})

/* 數字按紐 */
const numberButton = []
for (let i = 0; i <= 9; i++) {
  numberButton[i] = document.getElementById('number' + i)
  numberButton[i].addEventListener('click', function () {
    InputNumber(i.toString())
  })
}

const pointButton = document.getElementById('point')
pointButton.addEventListener('click', function () {
  if (keyNumber.toString().indexOf('.') === -1) {
    InputNumber('.')
  }
})

// 輸入數字
let InputNumber = number => {
  if (keyOperator && tempNumber === 0) {
    tempNumber = keyNumber
    keyNumber = 0
  }

  keyNumber += number
  result.innerText = Number(keyNumber)
  debugLog()
}

// 輸入運算
let inputOperator = operator => {
  if (keyOperator) {
    calculate()
  }
  keyOperator = operator
  debugLog()
}

// 運算結果
let calculate = () => {
  if(tempNumber === 0){
    return
  }

  switch (keyOperator) {
    case '+':
      result.innerText = Number(tempNumber) + Number(keyNumber)
      break
    case '-':
      result.innerText = Number(tempNumber) - Number(keyNumber)
      break
    case '*':
      result.innerText = Number(tempNumber) * Number(keyNumber)
      break
    case '/':
      result.innerText = Number(tempNumber) / Number(keyNumber)
      break
  }

  keyNumber = result.innerText
  tempNumber = 0
  keyOperator = ''
  debugLog()
}

let debugLog = () => {
  console.log('keyNumber=' + keyNumber, 'tempNumber=' + tempNumber, 'keyOperator=' + keyOperator)
}
