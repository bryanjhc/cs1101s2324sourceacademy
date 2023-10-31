// Studio 11 Streams

// Qn 1
function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const A = pair(1, () => scale_stream(2, A));
// returns 1, 2, 4, 8, 16 keeps scaling by 2
function mul_streams(a,b) {
    return pair(head(a) * head(b),
            () => mul_streams(stream_tail(a), stream_tail(b)));
}
const integers = integers_from(1);
const B = pair(1, () => mul_streams(B, integers));
// returns 1, 1, 2, 6, 24, 120, 6!, 7!, 8!, 9! and so on

eval_stream(B, 10);