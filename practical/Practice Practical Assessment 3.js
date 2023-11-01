// Practice Practical Assessment 3

// Qn 1
function is_pa_word(s) {
    // your solution goes here
    return accumulate((x1, wish) => s === x1 || wish, false, pa_words);
}

// testing

// is_pa_word("exhilarating");   // should return true
// is_pa_word("tintinnabulate"); // should return false


// Qn 2
function count_matches(char, pos) {
    // your solution goes here
    const filtered_pa_words = filter(x1 => (char_at(x1, pos) === char), pa_words);
    return length(filtered_pa_words);
}

// testing

// count_matches("q", 2);  // should return 3
// count_matches("y", 26); // should return 1


// Qn 3
function char_stream(s) {
    // your solution goes here
    function helper_cstr(pos) {
        const curr = char_at(s, pos);
        return curr === undefined
               ? null
               : pair(curr, () => helper_cstr(pos + 1));
    }
    return helper_cstr(0);
}

// testing

const my_stream = char_stream("hello");
stream_ref(my_stream, 4);  // returns "o"


// Qn 4
function solve(n, constraints) {
    // your solution goes here
    return filter(x1 => (string_length(x1) === n 
                        &&
                            accumulate((z1, wish) => char_at(x1, head(z1)) === tail(z1) && wish, 
                            true, constraints)), 
                        pa_words);
}

// testing

display_list(solve(13, list(pair(2, "s"), pair(4, "u"), pair(7, "e"), pair(9, "u"))));
//   should display list("resourcefully")


// Qn 5
function eval_poly(poly) {
    return x => accumulate((z1, wish) => head(z1) * math_pow(x, tail(z1)) + wish,
                            0, poly);
}


// Qn 6
function add_poly(poly1, poly2) {
    if (is_null(poly1)) {
        return poly2;
    } else if (is_null(poly2)) {
        return poly1;
    } else {
        const coeff1 = head(head(poly1));
        const coeff2 = head(head(poly2));
        const exp1 = tail(head(poly1));
        const exp2 = tail(head(poly2));
        if (exp1 === exp2) {
            const coeff_new = coeff1 + coeff2;
            return coeff_new === 0
                   ? add_poly(tail(poly1), tail(poly2))
                   : pair(pair(coeff_new, exp1),
                          add_poly(tail(poly1), tail(poly2)));
        } else if (exp1 < exp2) {
            return pair(head(poly1), 
                        add_poly(tail(poly1), poly2));
        } else {
            return pair(head(poly2), 
                        add_poly(poly1, tail(poly2)));
        }
    }
}


// Qn 7
function multiply_poly(poly1, poly2) {
    return accumulate((x1, wish1) => 
                        add_poly(accumulate((x2, wish2) => 
                                    pair(pair(head(x1) * head(x2),
                                    tail(x1) + tail(x2)),
                                    wish2), null, poly2),
                                wish1), 
                        null, poly1); /* outside accumulate traversing
                                        each value of poly1 
                                        you can also use double map*/ 
}


// Qn 8
function alt_column_matrix(R, C) {
    const M = [];

    for (let row = 0; row < R; row = row + 1) {
        M[row] = [];
    }
    
    for (let row = 0; row < R; row = row + 1) {
        for (let col = 0; col < C; col = col + 1) {
            if (col % 2 === 0) {
                M[row][col] = (col * R) + (row + 1);
            } else {
                M[row][col] = ((col + 1) * R) - row;
            }
        }
    }
    
    return M;
}
