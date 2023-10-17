// Studio 9 in class

// Qn 1a (fails when a the head and tail of a pair point to the same thing)
function count_pairs(x) {
    if (!is_pair(x)) {
    return 0;
    } else {
    return 1 + count_pairs(head(x)) + count_pairs(tail(x));
    }
}


/* Qn 1b (this function will collate a list of 
unique pairs and hence return the length of this list) */
function correct_count_pairs(x) {
    let counted_pairs = null;
    function check(y) {
        if (!is_pair(y)) {
            return undefined;
        } else if (!is_null(member(y, counted_pairs))) {
            return undefined;
        } else {
            counted_pairs = pair(y, counted_pairs);
            check(head(y));
            check(tail(y));
        }
    }
    check(x);
    return length(counted_pairs);
}

const a = list(1, 2, 3);
set_tail(tail(tail(a)), a);
draw_data(a);
correct_count_pairs(a);