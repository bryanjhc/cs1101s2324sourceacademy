// Practical 1

// TASK 1A
function make_k_list(k, d) {
    return d === 0
           ? 0
           : map(u => make_k_list(k, d - 1), enum_list(1, k));
}


// TASK 1B
function sum_k_list(klist) {
    return is_null(klist)
           ? 0
           : is_number(klist)
           ? klist
           : is_number(head(klist))
           ? head(klist) + sum_k_list(tail(klist))
           : sum_k_list(head(klist)) + sum_k_list(tail(klist));
}


// TASK 1C
function map_k_list(f, klist) {
    return is_null(klist)
           ? null
           : is_number(klist)
           ? f(klist)
           : is_number(head(klist))
           ? pair(f(head(klist)), map_k_list(f, tail(klist)))
           : pair(map_k_list(f, head(klist)), map_k_list(f, tail(klist)));
}


// TASK 2A
function route_distance(mat, route) {
    return is_null(tail(route))
           ? 0
           : mat[head(route)][head(tail(route))] + route_distance(mat, tail(route));
}
// TASK 2A for-loop
function route_distance(mat, route) {
    // ur solution here
    const len = length(route);
    if (len < 2) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < len - 1; i = i + 1) {
            sum = sum + mat[head(route)][head(tail(route))];
            route = tail(route);
        }
        return sum;
    }
}

const mat = [[0, 1, 2, 3],
             [2, 0, 5, 6],
             [3, 3, 0, 4],
             [4, 4, 5, 0]];
const route = list(2, 1, 3, 1);
route_distance(mat, route); // returns 13 (= 3 + 6 + 4)


// TASK 2B
// The route_distance function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own route_distance function.
/*
function route_distance(mat, route) {
    // Pre-declared
}
*/

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }

    // first remove peters house
    const rest_of_the_houses = remove(start, enum_list(0, n - 1));
    const all_routes = map(x => append(pair(start, x), list(start)), permutations(rest_of_the_houses));
    const shortest_route = accumulate((x1, wish) => 
                                        route_distance(mat, x1) < route_distance(mat, wish) 
                                        ? x1 
                                        : wish, 
                                      head(all_routes), tail(all_routes));
    // const all_route_distances = map(x => route_distance(mat, x), all_routes);
    // return all_route_distances;
    return pair(shortest_route, route_distance(mat, shortest_route));
}


// TASK 3A
function make_postfix_exp(bae) {
    const pfe_arr = [];
    let pointer = 0;
    
    function helper(bae) {
        const arr_len = array_length(bae);
        let i = 0;
        if (is_number(bae)) {
            pfe_arr[pointer] = bae;
            pointer = pointer + 1;
        } else { // means bae is an array
            while (i < arr_len) {
                if (is_array(bae[i])) {
                    helper(bae[i]);
                    i = i + 1;
                } else if (is_number(bae[i])) { // number just push
                    pfe_arr[pointer] = bae[i];
                    pointer = pointer + 1;
                    i = i + 1;
                } else { // means it is an operator 
                    helper(bae[i + 1]); //what if the right operand is bae?
                    pfe_arr[pointer] = bae[i];
                    pointer = pointer + 1;
                    i = i + 2;
                }
            }
        }
    }
    helper(bae);
    return pfe_arr;
}
const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]


// TASK 3B
function eval_postfix_exp(pfe) {
    function get_op(oper) {
        return oper === "+"
               ? (x, y) => x + y
               : oper === "-"
               ? (x, y) => x - y
               : oper === "*"
               ? (x, y) => x * y
               : oper === "/"
               ? (x, y) => x / y
               : () => null;
    }
    
    let temp = [pfe[0]]; // push first value into temp first
    const arr_len = array_length(pfe);
    for (let i = 1; i < arr_len; i = i + 1) { // start traversign from second elem
        const temp_len = array_length(temp);
        if (is_number(pfe[i])) {
            temp[temp_len] = pfe[i]; // push it onto a stack
        } else {
            // perform operation on the last 2 values in temp
            const result = get_op(pfe[i])(temp[temp_len - 2], temp[temp_len - 1]);
            const new_temp = [];
            for (let j = 0; j < temp_len - 2; j = j + 1) {
                new_temp[j] = temp[j];
            }
            new_temp[temp_len - 2] = result; // replace left operand with result
            temp = new_temp; // delete right operand
        }
    }
    return temp[0];
}

const pfe = [8, 2, "-", 7, 3, "+", "*"];
eval_postfix_exp(pfe);  // returns 60
