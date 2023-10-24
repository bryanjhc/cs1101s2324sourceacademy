// Studio 10 in class
function swap(M, a1, b1, a2, b2) {
    let temp = M[a1][b1];
    M[a1][b1] = M[a2][b2];
    M[a2][b2] = temp;
}

function transpose(M) {
    const len = array_length(M);
    for (let i = 0; i < len; i = i + 1) {
        for (let j = i + 1; j < len; j = j + 1) {
            swap(M, i, j, j, i);
        }
    }
}

function reverse(M) {
    const len = array_length(M);
    const half_len = math_floor(len / 2);
    for (let i = 0; i < len; i = i + 1) { // traversing each row
        for (let j = 0; j < half_len; j = j + 1) {
            swap(M, i, j, i, len - 1 - j);
        }
    }
}


function rotate_matrix(M) {
    transpose(M);
    reverse(M);
}


let M = [[1, 2], [3, 4]];
display(M);
rotate_matrix(M);
display(M);