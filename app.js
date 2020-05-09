const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#list-expenses');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.subHeader = 'Reason/Amount';
    alert.message = 'Reason or amount is not valid.';
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    return alert.present();
  };

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ": $" + enteredAmount;
  expensesList.appendChild(newItem);
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener('click', clear);
