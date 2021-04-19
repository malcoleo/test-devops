// (c) Anuflora Systems 
const balance = document.getElementById('balance');
const money_plus = document.getElementById('Income');
const money_minus = document.getElementById('Expense');
const list = document.getElementById('list');
const form = document.getElementById('form');
const typeinput = document.getElementById('type_input');
const amountinput = document.getElementById('amount_input');



const TransactionDataAll = [
   { id: 1, type: 'Salary',  amount: 3500},
   { id: 2, type: 'Food', amount: -150},
   { id: 3, type: 'Transport',  amount: -20},
   { id: 4, type: 'Entertainment',  amount: -80},
   { id: 5, type: 'Insurance',  amount: -110 },

  ];   // Data should come from backend

function updatetransaction(){
  TransactionDataAll.push({id: TransactionDataAll.length+1, type: typeinput.value,  amount: amountinput.value},);   
};

 var TransactionData = null;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    if (transaction.amount>0){
  const deposit_item = document.createElement('li');
  deposit_item.classList.add('plus');
  deposit_item.innerHTML = `
  ${transaction.type}  <span> $${Math.abs(
    transaction.amount  
  )}</span> 
  `;

  list.appendChild(deposit_item);
  }else{
  const loan_item = document.createElement('li');
  loan_item.classList.add('minus');
  loan_item.innerHTML = `
  ${transaction.type}<span> -$${Math.abs(
    transaction.amount  
  )}</span> 
  `;

  list.appendChild(loan_item);
  }
}

var deposits =[]
var loans =[]


// Update the balance, deposit and loan
function updateValues() {
  var total_income =0
  var total_expense =0
    TransactionData.forEach(function(item){
    if (item.amount>0){
      total_income += parseInt(item.amount);
    }else{
      total_expense += parseInt(item.amount);
    }
  });
  const bal = total_income - Math.abs(total_expense);
  balance.innerText = `$${bal}`;
  money_plus.innerText = `$${total_income}`;
  money_minus.innerText = `-$${Math.abs(total_expense)}`;
  reco.innerText = (bal >= 0)? "You Have Sound Financial Health": "Your Financial Health is Weak";
}

function init() {
  list.innerHTML = '';
  TransactionData = [...TransactionDataAll]; //copy the whole array
  TransactionData.forEach(addTransactionDOM);
  updateValues();
  }

function updateTransaction(e) {
  e.preventDefault();  //to prevent form from submitting and refreshing the page
  list.innerHTML = '';
  TransactionData = [...TransactionDataAll]; 
  TransactionData.forEach(addTransactionDOM);
  updateValues(); 
}

init();
form.addEventListener('submit', updateTransaction);
