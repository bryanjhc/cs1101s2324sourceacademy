// Studio 8

// Qn 1
function change(x, new_value) {
    x = new_value;
}


let x = 0;
display(x);
change(x, 1);
display(x);


// Qn 2 (incomplete)
function d_filter(pred, xs) {
    
    if (is_null(xs)) {
        return xs;
    } else if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    } else {
        return d_filter(pred, tail(xs));
    }
    
}

const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; // What is L now?
