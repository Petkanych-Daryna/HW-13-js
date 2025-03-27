// Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ


// 2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.



const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
  
    createTransaction(amount, type) {
      return { id: this.transactions.length + 1, type, amount };
    },
  
    deposit(amount) {
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
      this.balance += amount;
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостатньо коштів на рахунку.');
        return;
      }
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      this.balance -= amount;
    },
  
    getBalance() {
      return this.balance;
    },
  
    getTransactionDetails(id) {
      return this.transactions.find(t => t.id === id) || `Транзакцію з id ${id} не знайдено.`;
    },
  
    getTransactionTotal(type) {
      return this.transactions
        .filter(({ type: t }) => t === type)
        .reduce((sum, { amount }) => sum + amount, 0);
    },
  };
  

  account.deposit(233);
  account.deposit(58);
  account.withdraw(400);
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(2));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT)); 
  console.log(account.getTransactionTotal(Transaction.WITHDRAW)); 
  