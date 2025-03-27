// Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
const user = {
  mood: "happy",
  hobby: "play games",
  premium: true,
};

const { mood, hobby, premium } = user;

console.log(mood);  
console.log(hobby); 
console.log(premium);

const updatedUser = {
  ...user,            
  hobby: "skydiving", 
  premium: false,     
};

console.log(updatedUser);
// ---------------

function countProps(obj) {
  return Object.keys(obj).length; 
}
console.log(countProps(user));

// ------------------

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (let [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

let employees = {
  Liza: 12,
  Misha: 17,
  Kate: 6,
};

console.log(findBestEmployee(employees));

// --------------------------


function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

let salaries = {
  Liza: 4000,
  Misha: 9000,
  Kate: 1900,
};

console.log(countTotalSalary(salaries));

// ----------------

function getAllPropValues(arr, prop) {
  return arr
  .map((obj) => obj[prop])
  .filter((value) => value !== undefined); 
}

let products = [
  { name: "Apple", price: 40, quantity: 7 },
  { name: "Banana", price: 62, quantity: 10 },
  { name: "Orange", price: 88, quantity: 20 },
];

console.log(getAllPropValues(products, "name"));

// --------------------------

function calculateTotalPrice(allProducts, productName) {
  let product = allProducts.find((p) => p.name === productName);
  return product ? product.price * product.quantity : 0;
}
console.log(calculateTotalPrice(products, "Apple"));


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
  