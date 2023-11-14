// TASK 2B

// You may write helper functions here.

function value_to_baseN(N, x) {

    const DIGIT_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                           "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                           "U", "V", "W", "X", "Y", "Z"];
    // WRITE YOUR SOLUTION HERE.
    // let power_n = 0;
    // let final_no = null;
    // let current = x;
    // while (current >= N) {
    //     current = current / N;
    //     power_n = power_n + 1;
    // }
    // let temp = x;
    // for (let i = power_n; i >= 0; i = i - 1) {
    //     const digit = math_floor(temp / math_pow(N, i));
    //     display(digit);
    //     final_no = append(final_no, list(DIGIT_SYMBOLS[digit]));
    //     temp = temp - (digit * math_pow(N, i));
    // }
    // return pair(N, final_no); 
    if (x === 0) {
        return pair(N, list(0));
    } else if (x < N) {
        return pair(N, list(x));
    } else {
        let digits = null;
        for (let temp = x; temp !== 0; temp = math_floor(temp / N)) {
            const remainder = temp % N;
            digits = pair(DIGIT_SYMBOLS[remainder], digits);
        }
        return pair(N, digits);
    }
}

// value_to_baseN(16, 584255);
// // returns [16, list("8", "E", "A", "3", "F")]

// value_to_baseN(10, 6932180);
// // returns [10, list("6", "9", "3", "2", "1", "8", "0")]

// value_to_baseN(2, 405);
// // returns [2, list("1", "1", "0", "0", "1", "0", "1", "0", "1")]

// value_to_baseN(36, 106595);
// // returns [36, list("2", "A", "8", "Z")]