// Mission 9 Musical Diversions


// Qn 1
const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}

function bass_drum(note, duration) {
    /* your answer here */
    return drum_envelope(simultaneously(list(sine_sound(79, duration),
                                        sine_sound(83, duration),
                                        sine_sound(89, duration),
                                        sine_sound(97, duration),
                                        sine_sound(101, duration),
                                        sine_sound(103, duration),
                                        sine_sound(107, duration),
                                        sine_sound(109, duration),
                                        sine_sound(113, duration),
                                        sine_sound(127, duration),
                                        sine_sound(131, duration),
                                        sine_sound(137, duration),
                                        sine_sound(139, duration),
                                        sine_sound(149, duration))));
}

function mute(note, duration) {
    /* your answer here */
    return silence_sound(duration);
}

// Test
// play(snare_drum(50, 0.2));
// play(bass_drum(50, 0.2));

// play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2),
//                         mute(0, 0.2),
//                         snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));
                        

// Qn 2
function generate_list_of_note(letter_name, list_of_interval) {
    /* your answer here */
    function listprocessor(addingfunc, list_of_interval) {
    return is_null(list_of_interval)
           ? null
           : pair(addingfunc(head(list_of_interval)), 
            listprocessor(x => addingfunc(x) + head(list_of_interval),
                            tail(list_of_interval)));
    }
    return map(x => x + letter_name_to_midi_note(letter_name), 
                append(list(0), listprocessor(x => x, list_of_interval)));
}

const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);

// display(c_major_scale);

function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return accumulate((x, y) => consecutively(list(instrument(x, duration), y)),
                        silence_sound(0), list_of_midi_note);
}

const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
// play(c_major_scale_sound);

const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", harmonic_minor_scale_interval);
const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
// play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", melodic_minor_scale_interval);
const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
// play(c_melodic_minor_scale_sound);


// Qn 3
// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
function generate_list_of_note(letter_name, list_of_interval) {
    /* your answer here */
    function listprocessor(addingfunc, list_of_interval) {
    return is_null(list_of_interval)
           ? null
           : pair(addingfunc(head(list_of_interval)), 
            listprocessor(x => addingfunc(x) + head(list_of_interval),
                            tail(list_of_interval)));
    }
    return map(x => x + letter_name_to_midi_note(letter_name), 
                append(list(0), listprocessor(x => x, list_of_interval)));
}

// display(c_major_scale);

function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return accumulate((x, y) => consecutively(list(instrument(x, duration), y)),
                        silence_sound(0), list_of_midi_note);
}

const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    /* your answer here */
    return length(arpeggio) < 4
           ? silence_sound(0)
           : consecutively(list(list_to_sound(list(list_ref(arpeggio, 0), 
                                              list_ref(arpeggio, 1), 
                                              list_ref(arpeggio, 2), 
                                              list_ref(arpeggio, 3)), 
                                              duration_each, instrument), 
                                              arpeggiator_up(tail(arpeggio), duration_each, instrument)));
           
}

// Test
// draw_sound_2d(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));
// play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));


// Qn 4
function simplify_rhythm(rhythm) {
    /* your answer here */
    function pairsimplify(repeatrhythm, n) {
        return n === 0
               ? null
               : append(simplify_rhythm(repeatrhythm), pairsimplify(repeatrhythm, n - 1));
    }
    
    return is_list(rhythm)
           ? is_number(head(rhythm))
               ? rhythm
               // if not means it is a list of lists, hence we append al the lists tgt
               : accumulate((x, y) => append(simplify_rhythm(x), y), null, rhythm) 
           : pairsimplify(head(rhythm), tail(rhythm));
}

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);


// Qn 5
const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}
function mute(note, duration) {
    /* your answer here */
    return silence_sound(duration);
}
function simplify_rhythm(rhythm) {
    /* your answer here */
    function pairsimplify(repeatrhythm, n) {
        return n === 0
               ? null
               : append(simplify_rhythm(repeatrhythm), pairsimplify(repeatrhythm, n - 1));
    }
    
    return is_list(rhythm)
           ? is_number(head(rhythm))
               ? rhythm
               // if not means it is a list of lists, hence we append al the lists tgt
               : accumulate((x, y) => append(simplify_rhythm(x), y), null, rhythm) 
           : pairsimplify(head(rhythm), tail(rhythm));
}

function percussions(distance, list_of_sounds, rhythm) {
    /* your answer here */
    const simplifiedrhythm = simplify_rhythm(rhythm);
    
    function helper(distance, list_of_sounds, simplerhythm) {
        return is_null(simplerhythm)
               ? silence_sound(0)
               : consecutively(list(list_ref(list_of_sounds, head(simplerhythm)),
                                    silence_sound(distance),
                                    helper(distance, list_of_sounds, tail(simplerhythm))));
    }
    return helper(distance, list_of_sounds, simplifiedrhythm);
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));