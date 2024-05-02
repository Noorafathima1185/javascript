// write a methods for solving the given questions

class Bank{
    //property
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000},
    }
    // validate a given account number
    validate(acno){
        return acno in this.accountDetails?'valid account':'invalid account'
    }

    // authentication the account
    authenticate(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('authentication successfull');
            }
        }
        else{
            console.log('invalid account');
        }
    }

    // check the balance
    balance(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log(`current balance of ${acno} is ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account number');
        }
    }

    // fund transfer
    fundTransfer(fromacno,toacno,fpswd,amount){
        if(this.validate(fromacno)&&this.validate(toacno)){
            if(this.accountDetails[fromacno].password==fpswd){
                if(this.accountDetails[fromacno].balance>=amount){
                    console.log(`current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance} before fund transfer`);
                    this.accountDetails[fromacno].balance-=amount
                    this.accountDetails[toacno].balance+=amount
                    console.log(`current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance} after fund transfer`); 
                }else{
                    console.log('insufficient balance');
                }           
            }else{
                console.log('invalid password');
            }
        }else{
            console.log('invalid account number');
        }
    }
}

const user1 = new Bank()
console.log(user1.validate(1004)?'valid':'invalid');
console.log('-----------------------------------');
user1.authenticate(1000,'userone')
console.log('-----------------------------------');
user1.balance(1000,'userone')
console.log('-----------------------------------');
