// Reflection 8

// Qn 1
function make_withdraw(balance, set_password) {
    let wrg_pw_counter = 0; /* if u put it outside of the function,
                               then the wrg_pw_counter will be shared 
                               across all made bank accounts */
    function withdraw(amount, insert_password) {
        if (wrg_pw_counter >= 3) {
            return "Account disabled";
        } else if (insert_password !== set_password) {
            wrg_pw_counter = wrg_pw_counter + 1;
            return "Wrong password; no withdraw";
        } else if (balance >= amount) {
            wrg_pw_counter = 0;
            balance = balance - amount;
            return balance;
        } else {
            wrg_pw_counter = 0;
            return "Insufficient funds";
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
display(acc(30, "his_passcode")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns 70
display(acc(10, "sesame")); // returns "Wrong password; no withdraw"
display(acc(15, "canola")); // returns "Wrong password; no withdraw"
display(acc(25, "olive")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"


// Qn 2
let commission = 25; // my commission in dollars
// return a calculator for total price
// total price = (commission + cost) * (1 + tax_rate)
function make_price_calculator(tax_rate) {
    function calculator(cost) {
        return (commission + cost) * (1 + tax_rate);
    }
    return calculator;
}
const calc = make_price_calculator(0.07);
commission = 125;
calc(75);


// Qn 3
function curry(f) {
 return x => y => f(x, y);
}
(curry(math_pow))(3)(4);