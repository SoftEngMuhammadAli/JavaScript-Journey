let account = {
  accountNumber: "123456789",
  accountHolder: "John Doe",
  balance: 1000,
};

function deposit(account, amount) {
  if (amount > 0) {
    account.balance += amount;
    console.log(`Deposited: $${amount}. New Balance: $${account.balance}`);
  } else {
    console.log("Deposit amount must be positive.");
  }
}

function withdraw(account, amount) {
  if (amount > 0 && amount <= account.balance) {
    account.balance -= amount;
    console.log(`Withdrew: $${amount}. New Balance: $${account.balance}`);
  } else {
    console.log("Invalid withdraw amount.");
  }
}

function getBalance(account) {
  console.log(`Current Balance: $${account.balance}`);
  return account.balance;
}

deposit(account, 500);
withdraw(account, 200);
getBalance(account);
