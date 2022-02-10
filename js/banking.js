document.getElementById('deposit-button').addEventListener('click',function(){
    let dipositInput = document.getElementById('deposit-input');
    let newDipositAmountText = dipositInput.value;
    let newDipositAmount = parseFloat(newDipositAmountText);

    let dipositTotal = document.getElementById('diposit-total');
    let previousDipositAmountText = dipositTotal.innerText ;
    let previousDipositAmount = parseFloat(previousDipositAmountText);

    let currentDipositTotalAmount = previousDipositAmount + newDipositAmount ;

    dipositTotal.innerText = currentDipositTotalAmount;
    dipositInput.value = '';
    
})
