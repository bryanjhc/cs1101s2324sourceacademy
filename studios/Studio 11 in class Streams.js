// Studio 11 in class

function stream_pairs(s) {
    return is_null(s)
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}
const ints = pair(1, () => pair(2, () => pair(3, 
                () => pair(4, () => pair(5, () => null)))));
                
stream_pairs(ints);

display_list(eval_stream(stream_pairs(ints), 10));

function stream_append_pickle(xs, ys) {
return is_null(xs)
? ys()
: pair(head(xs),
() => stream_append_pickle(stream_tail(xs),
ys));
}
function stream_pairs2(s) {
return is_null(s)
? null
: stream_append_pickle(
stream_map(
sn => pair(head(s), sn),
stream_tail(s)),
() => stream_pairs2(stream_tail(s)));
}

const integers = integers_from(1);
const s2 = stream_pairs2(integers);


function interleave_stream_append(s1, s2) {
    return is_null(s1)
           ? s2
           : pair(head(s1), () => interleave_stream_append(s2, stream_tail(s1)));
}

function stream_pairs3(s) {
    return (is_null(s) || is_null(stream_tail(s)))
        ? null
        : pair(pair(head(s), head(stream_tail(s))), 
               () => interleave_stream_append(
                        stream_map(x => pair(head(s), x), stream_tail(stream_tail(s))),
                        stream_pairs3(stream_tail(s))));
}

display_list(eval_stream(stream_pairs3(integers), 10));