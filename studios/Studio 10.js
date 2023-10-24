// Studio 10

// Qn 2
function bubblesort_array(A) {
    const len = array_length(A);
    for (let i = len - 1; i >= 1; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (A[j] > A[j + 1]) {
                const temp = A[j];
                A[j] = A[j + 1]; // mainly change these two lines
                A[j + 1] = temp; // to apply this to a list instead
            }
        }
    }
}

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L; // pointer
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) > head(tail(p))) {
                const temp = head(p);
                set_head(p, head(tail(p))); // mainly change these two lines
                set_head(tail(p), temp); // to apply this to a list instead
            }
            p = tail(p); // move the pointer to the next element in L
        }
    }
}
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]
