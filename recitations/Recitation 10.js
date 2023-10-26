// Recitation 10

// Pre-declaring functions
function add_streams(s1, s2) {
    return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1) + head(s2),
    () => add_streams(stream_tail(s1),
    stream_tail(s2)));
}

function mul_streams(s1, s2) {
    return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1) * head(s2),
    () => mul_streams(stream_tail(s1),
    stream_tail(s2)));
}

function scale_stream(s, f) {
    return stream_map(x => x * f, s);
}

const integers = integers_from(1);
const ones = pair(1, () => ones);

function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}


// Task 1
function stream_map_optimized(f, s) {
    return is_null(s)
    ? null
    : pair(f(head(s)),
    memo_fun( () => stream_map_optimized(
    f, stream_tail(s)) ));
}

const x = stream_map(display, enum_stream(0, 10));
stream_ref(x, 3);
stream_ref(x, 5);

const x1 = stream_map_optimized(display, enum_stream(0, 10));
stream_ref(x1, 3);
stream_ref(x1, 5);


// Task 2
// const increasingnumbers = (n) => pair(n, () => increasingnumbers(n * 10 + n));

// function zip_list_of_streams(list_of_streams) {
//     return pair(head(head(list_of_streams)),
//                 () => zip_list_of_streams(stream_append(tail(head(list_of_streams)),
//                                                  stream_tail(list_of_streams))));
// }


// const s1 = increasingnumbers(1);
// const s2 = increasingnumbers(2);
// const s3 = increasingnumbers(3);
// const ss = zip_list_of_streams(list(s1, s2, s3));

// eval_stream(ss, 6);

function partial_sums(s) {
    return pair(head(s), () => add_streams(stream_tail(s), partial_sums(s)));
}

const str = integers_from(1);

stream_tail(partial_sums(str));