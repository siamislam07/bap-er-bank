document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2: get the deposit from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    

    // console.log(depositAmmount);
    //step 3; get the current deposit total
    //for non-input(element other than input, textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // console.log(depositTotal );

    //step-4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal

    //step-5: get ballance total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    //step-6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal
    // step-7: clear the deposit field
    depositField.value = '';

})