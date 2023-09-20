// Mission 8 POTS and Pans

import { play } from "sound";
// Task 1

// Function type: Number -> pair_of_numbers
// where input is between 0 - 15 inclusive.
// where 0 - 9 represent the digits
// 10 represents *, 11 represents #,
// and 12 - 15 represent the letters A-D.

function get_dtmf_frequencies(number) {
    // your answer here
    const dtmf_freq_list = list(pair(941, 1336), pair(697, 1209), pair(697, 1336), pair(697, 1477),
                                pair(770, 1209), pair(770, 1336), pair(770, 1477),
                                pair(852, 1209), pair(852, 1336), pair(852, 1477), 
                                pair(941, 1209), pair(941, 1477), 
                                pair(697, 1633), pair(770, 1633), pair(852, 1633), pair(941, 1633));
    return list_ref(dtmf_freq_list, number);
}

get_dtmf_frequencies(8);


// Task 2

// Copy your function get_dtmf_frequencies here.
function get_dtmf_frequencies(number) {
    // your answer here
    const dtmf_freq_list = list(pair(941, 1336), pair(697, 1209), pair(697, 1336), pair(697, 1477),
                                pair(770, 1209), pair(770, 1336), pair(770, 1477),
                                pair(852, 1209), pair(852, 1336), pair(852, 1477), 
                                pair(941, 1209), pair(941, 1477), 
                                pair(697, 1633), pair(770, 1633), pair(852, 1633), pair(941, 1633));
    return list_ref(dtmf_freq_list, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

// testing
// draw_sound_2d(make_dtmf_tone(get_dtmf_frequencies(15)));
play(make_dtmf_tone(get_dtmf_frequencies(15)));


// Task 3

// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
function get_dtmf_frequencies(number) {
    // your answer here
    const dtmf_freq_list = list(pair(941, 1336), pair(697, 1209), pair(697, 1336), pair(697, 1477),
                                pair(770, 1209), pair(770, 1336), pair(770, 1477),
                                pair(852, 1209), pair(852, 1336), pair(852, 1477), 
                                pair(941, 1209), pair(941, 1477), 
                                pair(697, 1633), pair(770, 1633), pair(852, 1633), pair(941, 1633));
    return list_ref(dtmf_freq_list, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    // your answer here
    return is_null(list_of_digits)
           ? silence_sound(0)
           : consecutively(list(make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))),
                                silence_sound(0.1), 
                                dial(tail(list_of_digits))));
}

// Test
// draw_sound_2d(dial(list(6,2,3,5,8,5,7,7)));
play(dial(list(6,2,3,5,8,5,7,7)));


// Task 4

// Copy your functions get_dtmf_frequencies,
// make_dtmf_tone and dial here.
function get_dtmf_frequencies(number) {
    // your answer here
    const dtmf_freq_list = list(pair(941, 1336), pair(697, 1209), pair(697, 1336), pair(697, 1477),
                                pair(770, 1209), pair(770, 1336), pair(770, 1477),
                                pair(852, 1209), pair(852, 1336), pair(852, 1477), 
                                pair(941, 1209), pair(941, 1477), 
                                pair(697, 1633), pair(770, 1633), pair(852, 1633), pair(941, 1633));
    return list_ref(dtmf_freq_list, number);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair), 0.5), 
                               sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    // your answer here
    return is_null(list_of_digits)
           ? silence_sound(0)
           : consecutively(list(make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))),
                                silence_sound(0.1), 
                                dial(tail(list_of_digits))));
}



function dial_all(list_of_numbers) {
    // your answer here
    const bad_number = list(1,8,0,0,5,2,1,1,9,8,0);
    const hashtone = make_dtmf_tone(get_dtmf_frequencies(11));
    const filtered_list = filter(x => !equal(x ,bad_number), list_of_numbers);
    return accumulate((x, y) => consecutively(list(dial(x), hashtone, silence_sound(0.1),
                                                y)), silence_sound(0), filtered_list);
}

// Test

play(dial_all(
       list(
         list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
         list(6,2,3,5,8,5,7,7),
         list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
        ));
