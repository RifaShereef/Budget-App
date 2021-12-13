var moneyEARNED = 0;
var moneySPENT = 0;
var moneyAVAILABLE = 0;

let addButton1 = document.getElementById('AddIncome');
let addButton2 = document.getElementById('AddExpense');
let Container1 = document.getElementById('input1');
let Container2 = document.getElementById('input2');
let inputField = document.getElementById('input');

addButton1.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('buttons');
    paragraph.innerText = inputField.value;
    Container1.appendChild(paragraph);

    moneyEARNED = moneyEARNED + parseInt(inputField.value);
    document.getElementById("earned").innerHTML = moneyEARNED;

    inputField.value = "";

    moneyAVAILABLE = moneyEARNED - moneySPENT;
    document.getElementById("available").innerHTML = moneyAVAILABLE;
})

addButton2.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('buttons');
    paragraph.innerText = inputField.value;
    Container2.appendChild(paragraph);

    moneySPENT = moneySPENT + parseInt(inputField.value);
    document.getElementById("spent").innerHTML = moneySPENT;

    inputField.value = "";

    moneyAVAILABLE = moneyEARNED - moneySPENT;
    document.getElementById("available").innerHTML = moneyAVAILABLE;
})
