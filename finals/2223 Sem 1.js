// Finals 22/23 Sem 1

// Qn 1 and 2
function make_RCL(L) {
    let C = pair(head(L), null); // new pair for the first element.
    function helper(lst) {
        if (is_null(tail(lst))) {
            C = lst;
            set_tail(C, L);
        } else {
            helper(tail(lst));
        }
    }
    helper(L);
    return C;
}



function insert_last(C, x) {
    const newpair = pair(x, tail(C));
    set_tail(C, newpair);
    return newpair;
}

// const L = list(11, 22, 33, 44, 55);
// const C = make_RCL(L);

// draw_data(C);
// head(C); // returns 55
// head(tail(C)); // returns 11

// const D = insert_last(C, 66);
// draw_data(C);
// head(D); // returns 66
// head(tail(D)); // returns 11
// head(C); // returns 55
// head(tail(C)); // returns 66


// Qn 3
function append_RCLs(C1, C2) {
    const firstelem = tail(C1);
    set_tail(C1, tail(C2));
    set_tail(C2, firstelem);
    return C2;
}
// const L1 = list(11, 22);
// const L2 = list(33, 44);
// const C1 = make_RCL(L1);
// const C2 = make_RCL(L2);
// const D = append_RCLs(C1, C2);
// head(D); // returns 44
// head(tail(D)); // returns 11
// head(tail(tail(D))); // returns 22
// head(tail(tail(tail(D)))); // returns 33
// draw_data(D);


// Qn 4
function remove_last(C) {
    // Find second last pair.
    let second_last = C;
    while (tail(second_last) !== C) {
        second_last = tail(second_last);
    }
    set_tail(second_last, tail(C));
    return second_last;
}
// const L = list(11, 22, 33, 44);
// const C = make_RCL(L);
// draw_data(C);
// const D = remove_last(C);
// head(D); // returns 33
// head(tail(D)); // returns 11
// head(tail(tail(D))); // returns 22
// draw_data(D);
// head(tail(tail(tail(D)))); // returns 33


// Qn 5
function RCL_to_stream(C) {
function helper(D) {
    return D === C // last element
           ? pair(head(D), () => null)
           : pair(head(D), () => helper(tail(D)));
}
return helper(tail(C));
}
// const L = list(11, 22, 33, 44);
// const C = make_RCL(L);
// const S = RCL_to_stream(C);
// display_list(stream_to_list(S)); // returns list(11, 22, 33, 44)


// Qn 13
function utm(n) {
    const M = [];
    for (let r = 0; r < n; r = r + 1) {
        M[r] = [];
        for (let c = 0; c < n; c = c + 1) {
            M[r][c] = c >= r ? 1 : 0;
        }
    }
    return M;
}

utm(1); // returns [[1]]
utm(3); // returns [[1, 1, 1], [0, 1, 1], [0, 0, 1]]


// Qn 20
function valid_next(row, col, maze) {
    const n_rows = array_length(maze); // number of rows
    const n_cols = array_length(maze[0]); // number of columns
    const next = [[row, col+1], [row+1, col], [row+1, col+1]];
    let n_valids = 0;
    const ans = [];
    for (let i = 0; i < array_length(next); i = i + 1) {
        // const rowpos = next[i][0];
        // const colpos = next[i][1];
        // if (rowpos < n_rows && colpos < n_cols) {
        //     if (i === 2) {
        //         if (n_valids >= 1 && maze[rowpos][colpos] === 0) {
        //             ans[array_length(ans)] = next[i];
        //             n_valids = n_valids + 1;
        //         }
        //     } else if (maze[rowpos][colpos] === 0) {
        //         ans[array_length(ans)] = next[i];
        //         n_valids = n_valids + 1;
        //     }
        // }
        
        // ans
        if (next[i][0] < n_rows && next[i][1] < n_cols
            && maze[next[i][0]][next[i][1]] === 0) {
            ans[n_valids] = next[i];
            n_valids = n_valids + 1;
        }
    }
    return ans;
}

const maze_1 = [[0, 0, 1, 0],
 [1, 0, 1, 1],
 [1, 0, 0, 0]];
const maze_2 = [[0, 0, 1, 0],
 [1, 1, 1, 0],
 [1, 0, 0, 0]];

valid_next(0, 0, maze_1); // returns [[0, 1], [1, 1]]
valid_next(2, 1, maze_1); // returns [[2, 2]]
valid_next(0, 1, maze_2); // returns []


// Qn 21
function is_solvable(row, col, maze) {
    const n_rows = array_length(maze); // number of rows
    const n_cols = array_length(maze[0]); // number of cols
    let ans = false;
    if (row === n_rows - 1 && col === n_cols - 1) {
        // base case – have reached end
        ans = true;
    } else {
        // have not reached end yet
        const next = valid_next(row, col, maze);
        for (let i = 0; i < array_length(next); i = i + 1) {
            ans = ans || is_solvable(next[i][0], next[i][1], maze);
        }
    }
    return ans;
}
is_solvable(0, 0, maze_1); // returns true
is_solvable(0, 0, maze_2); // returns false