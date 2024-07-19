#! /usr/bin/env node
interface IBankAccount {
    credit(amount: number): void;
    debit(amount: number): void;
}

class BankAccount implements IBankAccount {
    accountBalance: number;

    constructor(accountBalance: number) {
        this.accountBalance = accountBalance;
    }

    public credit(amount: number) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credit successful. Your balance is: " + this.accountBalance);
        } else {
            console.log("Credit unsuccessful");
        }
    }

    public debit(amount: number) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log('Debit successful. Your balance is: ' + this.accountBalance);
        } else {
            console.log('Debit unsuccessful');
        }
    }
}

// Customer details
class Customer {
    person: {
        firstname: string;
        lastname: string;
    };
    age: number;
    gender: string;
    phone: number;
    bankaccount: BankAccount;

    constructor(person: { firstname: string; lastname: string }, age: number, gender: string, phone: number, bankaccount: BankAccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.bankaccount = bankaccount;
    }

    public display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Phone: " + this.phone);
        console.log("Amount in Bank: " + this.bankaccount.accountBalance);
        console.log();
    }
}

const a1 = new BankAccount(8000);
const c1 = new Customer({ firstname: "Mudassir", lastname: "Ali" }, 20, "Male", 102203324, a1);

c1.display();
c1.bankaccount.debit(500);
console.log();

const a2 = new BankAccount(5000);
const c2 = new Customer({ firstname: "Ahmed", lastname: "Khan" }, 23, "Male", 453295739, a2);

c2.display();
c2.bankaccount.debit(200);
console.log();
