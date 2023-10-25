// Mission 17 Reusing Your Pairs

// TASK 1

function d_split_list(xs) {
    const half_len = math_floor((length(xs) - 1) / 2);
    let split_head_last = null;
    let split_tail = null;
    function helper(xs, n) {
        if (n === 0) {
            split_tail = tail(xs);
            set_tail(xs, null);
        } else {
            helper(tail(xs), n - 1);
        }
    }
    helper(xs, half_len);
    return pair(xs, split_tail);
}

// // TEST:
// const my_list1 = list(1, 2, 3, 4, 5, 6);
// const my_list2 = list(5, 4, 3, 2, 1);
// d_split_list(my_list1);
// d_split_list(my_list2);


// TASK 2

function d_merge(xs, ys) {
    let temp = null;
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else if (head(xs) <= head(ys)) {
        temp = tail(xs);
        set_tail(xs, d_merge(temp, ys));
        return xs;
    } else {
        temp = tail(ys);
        set_tail(ys, d_merge(xs, temp));
        return ys;
    }
}

// // TEST:
// const my_list1 = list(2, 4, 5, 9);
// const my_list2 = list(3, 5, 8);
// d_merge(my_list1, my_list2);


// TASK 3

function d_merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const splitlist = d_split_list(xs);
        return d_merge(d_merge_sort(head(splitlist)), 
                       d_merge_sort(tail(splitlist)));
    }
}

// TEST:
const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
d_merge_sort(my_list);