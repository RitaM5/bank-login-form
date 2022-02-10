document.getElementById('deposit-button').addEventListener('click',function(){
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = depositInput.value;
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    
})
