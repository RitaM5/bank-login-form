//for deposit
function depositMoney(value){
    let depositValue = document.getElementById('deposit-input');
    let depositOutput = document.getElementById('deposit-output');
    let balanceTotal = document.getElementById('balance-total');

    if(depositValue.value > 0){
        depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
        //for balance
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositValue.value);
        depositValue.value = '';
    }
    
    else{
        alert('enter positive number');
    }
    
    }
   
//for withdraw
function withdrawMoney(){
    let withdrawValue = document.getElementById('withdraw-input');
    let withdrawOutput = document.getElementById('withdraw-output');
    let balanceTotal = document.getElementById('balance-total');

    if(withdrawValue.value > 0 && withdrawValue.value < balanceTotal.innerText) {
        withdrawOutput.innerText = Number(withdrawValue.value) + Number(withdrawOutput.innerText);
        //for balance
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawValue.value);
        withdrawValue.value = '';
        }
    else if(withdrawValue.value > balanceTotal.innerText){
        alert('you dont have sufficient balance');
    }
    else if(withdrawValue.value < 0){
        alert('enter positive number');
    }
    
 
  
 
}

































/*function getInputValue (inputId){
    let inputField = document.getElementById(inputId);
    let newAmountText = inputField.value;
    let amount = parseFloat(newAmountText);
    inputField.value = '';
    return amount;
}

function updateTotalField(totalId,amount){
    let totalElement = document.getElementById(totalId);
    let totalAmountText = totalElement.innerText ;
    let totalAmount = parseFloat(totalAmountText);

    let currentTotalAmount = totalAmount + amount ;

    totalElement.innerText = currentTotalAmount;
    return currentTotalAmount;
}

function getCurrentBalance(){
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText ;
    let previousBalanceAmount = parseFloat(previousBalanceText);
    return previousBalanceAmount;
}

function updateBalance(amount,isAdd){
    let balanceTotal = document.getElementById('balance-total');
    //let previousBalanceText = balanceTotal.innerText ;
    //let previousBalanceAmount = parseFloat(previousBalanceText);
    let previousBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceAmount + amount ;
}
   else{
        balanceTotal.innerText = previousBalanceAmount - amount ;
   }
    //balanceTotal.innerText = currentBalanceTotalAmount;
   //return currentBalanceTotalAmount ;
}



document.getElementById('deposit-button').addEventListener('click',function(){
    let dipositAmount = getInputValue('deposit-input');
    let currentBalance = getCurrentBalance();

    if(dipositAmount > 0){
    let total = updateTotalField('diposit-total',dipositAmount);
    let dipositBalance = updateBalance(dipositAmount,true);
}
    /*let dipositInput = document.getElementById('deposit-input');
    let newDipositAmountText = dipositInput.value;
    let newDipositAmount = parseFloat(newDipositAmountText);*/
    //let dipositAmount = getInputValue('deposit-input'); //*** 
    //for diposit
    /*let dipositTotal = document.getElementById('diposit-total');
    let previousDipositAmountText = dipositTotal.innerText ;
    let previousDipositAmount = parseFloat(previousDipositAmountText);

    let currentDipositTotalAmount = previousDipositAmount + newDipositAmount ;

    dipositTotal.innerText = currentDipositTotalAmount;*/
    //let total = updateTotalField('diposit-total',dipositAmount); //*** 
    
    
    //for balance
    /*let balanceTotal = document.getElementById('balance-total');
    let previousBalanceAmountText = balanceTotal.innerText ;
    let previousBalanceAmount = parseFloat(previousBalanceAmountText);

    let currentBalanceTotalAmount = previousBalanceAmount + dipositAmount ;

    balanceTotal.innerText = currentBalanceTotalAmount;*/

    //let dipositBalance = updateBalance(dipositAmount,true);//***
    //clear deposit input 
    //dipositInput.value = '';
//});

//for withdraw
/*document.getElementById('withdraw-button').addEventListener('click',function(){
    let withdrawAmount = getInputValue('withdraw-input');
    let currentBalance = getCurrentBalance();
    
    if((withdrawAmount > 0) && (withdrawAmount < currentBalance)){
    let withdrawTotalAmount = updateTotalField('withdraw-total',withdrawAmount);
    let withdrawBalance = updateBalance(withdrawAmount,false)
}
    /*let withdrawInput = document.getElementById('withdraw-input');
    let newWithdrawAmountText = withdrawInput.value;
    let newWithdrawAmount = parseFloat(newWithdrawAmountText);*/
    //let WithdrawAmount = getInputValue('withdraw-input');//*** 
    
    /*let withdrawTotal = document.getElementById('withdraw-total');
    let previousWithdrawAmountText = withdrawTotal.innerText ;
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    let currentWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount ;

    withdrawTotal.innerText = currentWithdrawTotalAmount;*/
    //let withdrawAmount = updateTotalField('withdraw-total',WithdrawAmount);//*** 
//update balance
    /*let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText ;
    let previousBalance = parseFloat(previousBalanceText);

    let currentBalanceTotal = previousBalance - WithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;*/

//let withdrawBalance = updateBalance(withdrawAmount,false);//*** 
   // withdrawInput.value ='';
//})