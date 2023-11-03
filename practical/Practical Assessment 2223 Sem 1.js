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



// Task 2B: Subsequence Replacement
function subseq_replace(new_sub, old_sub, seq) {
    
}