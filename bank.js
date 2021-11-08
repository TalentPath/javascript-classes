class BankAccount{
    constructor(accountNum){
        this.accountNumber = accountNum;
        this.balance =0;
        this.routingNumber='32423432424';
    }

    deposit(amount){
        this.balance +=amount;
        console.log(`You have deposited ${amount}`);
    }
    withdraw(amount){
        this.balance -= amount;
        console.log('parentWithdraw');
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNum){
        super(accountNum);
        this.balance = 50;
        this.numberOfWithdrawals = 0;
    }


    withdrawSavings(amount){
        this.numberOfWithdrawals++;
        if(this.numberOfWithdrawals >3){
            console.log('you have made too many withdrawals');
        } else{
            this.balance-=amount;
        }
        console.log(amount, this.balance, this.numberOfWithdrawals);
    }
}


let mySavings = new SavingsAccount(456434656546);
//console.log(mySavings)
//mySavings.widthdraw(100);
//mySavings.deposit(100);
mySavings.parentWithdraw(200);