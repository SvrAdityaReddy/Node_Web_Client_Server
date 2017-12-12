const sum=require('./utility.js')
require('./account-service.js')

let checking_account_balance=200
let savings_account_balance=1000
let retirement_account_balance=20000

retirement_account_balance=40000

let total_balance=sum([checking_account_balance, savings_account_balance, retirement_account_balance])
console.log(total_balance)