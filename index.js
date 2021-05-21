function saturdayFun( i = "roller-skate"){
  return `This Saturday, I want to ${i}!`
}

function mondayWork(m = 'go to the office') {
  return `This Monday, I will ${m}.`;
}

function wrapAdjective(f = '*'){
  return function (m = "special"){
    return `You are ${f + m + f}!`
  }
}

const Calculator = {
  add : function (a, b) { return a + b },
  subtract : function (a, b) { return a - b },
  multiply : function (a, b) { return a * b },
  divide : function (a, b) { return a / b },
}

function actionApplyer(int, ary){
    return ary.reduce((accumelator, func) => func(accumelator), int)
}

