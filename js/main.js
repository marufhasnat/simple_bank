// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const bankArea = document.getElementById('bank-area');
    bankArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

// function for taking amount
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// function for updating total amount
function updateSpanText(id,addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

// function for clearing number
function clearNumber(id) {
    document.getElementById(id).value = "";
}

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    clearNumber('depositAmount');
});

// withdraw button event handler
const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    clearNumber('withdrawAmount');
});