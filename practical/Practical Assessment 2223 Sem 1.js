// Practical 22/23 Sem 1

// // Task 1A: Inserting a Subsequence
// // inserting S at position (or index) pos of L .
// function insert_subseq(L, pos, S) {
//     return pos === 0
//         ? append(S, L)
//         : pair(head(L), insert_subseq(tail(L), pos - 1, S));
// }

// display_list(insert_subseq( list(10, 11, 12), 0, list(55, 66) ));
// // returns list(55, 66, 10, 11, 12)
// display_list(insert_subseq( list(10, 11, 12), 2, list(55, 66) ));
// // returns list(10, 11, 55, 66, 12)
// display_list(insert_subseq( list(10, 11, 12), 3, list(55, 66) ));
// // returns list(10, 11, 12, 55, 66)
// display_list(insert_subseq( list(10, 11, 12), 1, null ));
// // returns list(10, 11, 12)
// display_list(insert_subseq( null, 0, list(55, 66) ));
// // returns list(55, 66)
// display_list(insert_subseq( null, 0, null ));
// // returns null



// // Task 1B: Removing a Subsequence
// function remove_subseq(L, start_pos, end_pos) {
//     return start_pos > 0
//         ? pair(head(L), remove_subseq(tail(L), start_pos - 1, end_pos - 1))
//         : end_pos >= 0
//         ? remove_subseq(tail(L), start_pos, end_pos -1)
//         : L;
// }

// function remove_subseq_for_loop(L, start_pos, end_pos) {
//     const len = length(L);
//     let temp_list = L;
//     let final_list = null;
//     for (let i = 0; i < len; i = i + 1) {
//         if (i < start_pos) {
//             final_list = append(final_list, list(head(temp_list)));
//         } else if (i > end_pos) {
//             final_list = append(final_list, list(head(temp_list)));
//         }
//         temp_list = tail(temp_list);
//     }
//     return final_list;
// }

// display_list(remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 2, 4 ));
// // returns list(10, 11, 15, 16)
// display_list(remove_subseq( list(14, 11, 12, 13, 14, 15, 16), 3, 5 ));
// // returns list(14, 11, 12, 16)
// display_list(remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 0 ));
// // returns list(11, 12, 13, 14, 15, 16)
// display_list(remove_subseq( list(13, 11, 12, 13, 14, 15, 16), 3, 3 ));
// // returns list(13, 11, 12, 14, 15, 16)
// display_list(remove_subseq( list(10, 16, 12, 13, 14, 15, 16), 6, 6 ));
// // returns list(10, 16, 12, 13, 14, 15)
// display_list(remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 2 ));
// // returns list(13, 14, 15, 16)
// display_list(remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 4, 6 ));
// // returns list(10, 11, 12, 13)
// display_list(remove_subseq( list(10, 11, 12, 13, 14, 15, 16), 0, 6 ));
// // returns null
// display_list(remove_subseq( list(10), 0, 0 ));
// // returns null



// Task 2A: Prefix
function is_prefix_of(subseq, seq) {
    return is_null(subseq) // no more conditions
        ? true
        : is_null(seq) // conditions still have but no more list to check conditions
        ? false
        : head(subseq) === head(seq)
        ? is_prefix_of(tail(subseq), tail(seq))
        : false;
}

is_prefix_of(list("a", "b", "c"),
list("a", "b", "c", "d", "e"));
// returns true
is_prefix_of(list("b", "c"),
list("a", "b", "c", "d", "e"));
// // returns false
is_prefix_of(list("a", "b", "c"),
list("a", "b", "c"));
// // returns true
is_prefix_of(list("a", "b", "c"),
list("a", "b"));
// returns false
is_prefix_of(list(), list("a", "b", "c"));
// // returns true
is_prefix_of(list(), list());
// returns true

function tail_n_times(xs, n) {
    return is_null(xs)
        ? null
        : n <= 0
        ? xs
        : tail_n_times(tail(xs), n - 1);
}

//Task 2B: Subsequence Replacement
function subseq_replace(new_sub, old_sub, seq) {
    return is_null(seq)
        ? seq
        : is_prefix_of(old_sub, seq)
        ? append(new_sub,
                subseq_replace(new_sub,
                              old_sub, 
                              tail_n_times(seq, length(old_sub))))
        : pair(head(seq), subseq_replace(new_sub, old_sub, tail(seq)));
}


// Test cases
subseq_replace(list("x"), list("a", "b", "a"),
list("a", "b", "a", "b", "a", "b", "a"));
// returns list("x", "b", "x")
subseq_replace(list("x", "y", "z"), list("a", "b"),
list("a", "b", "c", "d", "e", "a", "b"));
// returns list("x", "y", "z", "c", "d", "e", "x", "y", "z")
subseq_replace(list("x", "y"), list("p", "q", "r"),
list("a", "b", "a", "b", "a", "b", "a"));
// returns list("a", "b", "a", "b", "a", "b", "a")



// Task 3A: Numbers-in-Front Trees (10 marks/XP)
function make_NiFT(T) {
    let num_list = null;
    let list_list = null;
    let tree = T;
    while(!is_null(tree)) {
        if (is_number(head(tree))) {
            num_list = append(num_list, list(head(tree)));
        } else {
            const wish = make_NiFT(head(tree));
            list_list = append(list_list, list(wish));
        }
        tree = tail(tree);
    }
    return append(num_list, list_list);
}

// Soln 2
// TASK 3A

// You may write helper functions here.

// SOLUTION:
function make_NiFT(T) {
    if (is_null(T)) {
        return null;
    } else if (!is_list(T)) {
        return T;
    } else {
        const T2 = map(x => make_NiFT(x), T);
        const list_of_nums = filter(x => !is_list(x), T2);
        const list_of_lists = filter(x => is_list(x), T2);
        return append(list_of_nums, list_of_lists);
    }
}

const tree1 = list( list(4,4,1), 5, 2, list(8,9), 4, list(6,7), 3 );
display_list(make_NiFT(tree1));
// returns list( 5, 2, 4, 3, list(4,4,1), list(8,9), list(6,7) )
const tree2 = list( list(1, 2, list(3, 4), 5), 6, null, list(7), 8, 9,
list( list(10), 11, list(12, 13, list(14, 15)) ) );
display_list(make_NiFT(tree2));
// returns list( 6, 8, 9, list(1, 2, 5, list(3, 4)), null, list(7),
// list( 11, list(10), list(12, 13, list(14, 15)) ) )



// TASK 3B

// You may write helper functions here.

// SOLUTION:
function insert(x, xs) {
    return is_null(xs)
           ? list(x)
           : x <= head(xs)
           ? pair(x, xs)
           : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
    return is_null(xs)
           ? xs
           : insert(head(xs), insertion_sort(tail(xs)));
}

function map_tree(fun, tree) {
    return map(sub_tree =>
                   !is_list(sub_tree)
                   ? fun(sub_tree)
                   : map_tree(fun, sub_tree),
               tree);
}

function flatten_tree(T) {
    return accumulate((x, ys) => is_list(x)
                                 ? append(flatten_tree(x), ys)
                                 : append(list(x), ys),
                      null, T);
}

function make_SToN(T) {
    let sorted_list = insertion_sort(flatten_tree(T));

    function traverse_sorted_list(x) {
        const h = head(sorted_list);
        sorted_list = tail(sorted_list);
        return h;
    }

    return map_tree(traverse_sorted_list, T);
}



// TASK 4

// You may write helper functions here.

// SOLUTION:
function shortest_path_length(maze, start_row, start_col) {
    const nrows = array_length(maze);
    const ncols = array_length(maze[0]);

    function min_path_len(r, c) {
        if (r < 0 || r >= nrows || c < 0 || c >= ncols) {
            return Infinity;
        } else if (maze[r][c] === "#") {
            return Infinity;
        } else if (maze[r][c] === "G") {
            return 0;
        } else {
            const orig_cell_val = maze[r][c];
            maze[r][c] = "#";

            const east  = min_path_len(r, c + 1);
            const north = min_path_len(r - 1, c);
            const west  = min_path_len(r, c - 1);
            const south = min_path_len(r + 1, c);

            maze[r][c] = orig_cell_val;

            return 1 + math_min(east, north, west, south);
        }
    }
    return min_path_len(start_row, start_col);
}