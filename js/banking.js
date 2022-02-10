document.getElementById('deposit-button').addEventListener('click',function(){
    let dipositInput = document.getElementById('deposit-input');
    let newDipositAmountText = dipositInput.value;
    let newDipositAmount = parseFloat(newDipositAmountText);
    //for diposit
    let dipositTotal = document.getElementById('diposit-total');
    let previousDipositAmountText = dipositTotal.innerText ;
    let previousDipositAmount = parseFloat(previousDipositAmountText);

    let currentDipositTotalAmount = previousDipositAmount + newDipositAmount ;

    dipositTotal.innerText = currentDipositTotalAmount;
    
    
    //for balance
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceAmountText = balanceTotal.innerText ;
    let previousBalanceAmount = parseFloat(previousBalanceAmountText);

    let currentBalanceTotalAmount = previousBalanceAmount + newDipositAmount ;

    balanceTotal.innerText = currentBalanceTotalAmount;
    //clear deposit input 
    dipositInput.value = '';
});

//for withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let newWithdrawAmountText = withdrawInput.value;
    let newWithdrawAmount = parseFloat(newWithdrawAmountText);
    
    let withdrawTotal = document.getElementById('withdraw-total');
    let previousWithdrawAmountText = withdrawTotal.innerText ;
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    let currentWithdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount ;

    withdrawTotal.innerText = currentWithdrawTotalAmount;
//update balance
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText ;
    let previousBalance = parseFloat(previousBalanceText);

    let currentBalanceTotal = previousBalance - currentWithdrawTotalAmount;
    balanceTotal.innerText = currentBalanceTotal;
    
    withdrawInput.value ='';
})