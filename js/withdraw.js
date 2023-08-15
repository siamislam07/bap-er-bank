/**
    1. add event handler with the withdraw button
    2. get the withdraw ammount from the withdraw input field
    2.5- also make sure to convert the input into a number by using parseFloat
    3. get previous withdraw total
    4.calculate total withdraw amount
    4.5.set total withdraw amount
    5. get the previous balance total
    6.calculate new balance total
    6.5 set the new balance
7. clear the input field
 *  */

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step -2
    const withdreawField = document.getElementById('withdraw-field');
    const newWithDrawAmmountString = withdreawField.value
    const newWithDrawAmmount = parseFloat(newWithDrawAmmountString)

    // step 7
    withdreawField.value = ''

    if (isNaN(newWithDrawAmmount)) {
        alert('fokinni tk er ammount de abcd likhte koi nai')
        return;
    }

    //step-3
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawtotalString = WithdrawTotalElement.innerText;
    const previousWithdrawtotal = parseFloat(previousWithdrawtotalString)
    console.log(previousWithdrawtotal);



    // step 5
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    if (newWithDrawAmmount > previousBalanceTotal) {
        alert('baap er bank e eto taka nai ')
        return;
    }

    //step 4
    const currentWithdrawTotal = previousWithdrawtotal + newWithDrawAmmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal


    //step6 
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;


})