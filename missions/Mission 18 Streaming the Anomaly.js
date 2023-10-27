// Mission 18 Streaming the Anomaly

// TASK 1

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

function array_to_stream(a) {
    const len = array_length(a);
    const arr_to_str = (arr, idx) => idx < len ? pair(arr[idx], () => arr_to_str(a, idx + 1)) : null;
    return arr_to_str(a, 0);
}


display(array_length(anomaly_data) ===
        stream_length(array_to_stream(anomaly_data)));
display(anomaly_data[7] ===
        stream_ref(array_to_stream(anomaly_data), 7));
        
        
// TASK 2

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    const len = array_length(a);
    const arr_to_str = (arr, idx) => idx < len ? pair(arr[idx], () => arr_to_str(a, idx + 1)) : null;
    return arr_to_str(a, 0);
}

function stream_to_filter(s) {
    // your solution goes here
    const height = image_height();
    const width = image_width();
    let pointer = s;
    return (src, dest) => {
        while (!is_null(pointer)) {
            const curr_img = head(pointer);
            for (let i = 0; i < height; i = i + 1) {
                for (let j = 0; j < width; j = j + 1) {
                    dest[i][j][0] = curr_img[i][j][0];
                    dest[i][j][1] = curr_img[i][j][1];
                    dest[i][j][2] = curr_img[i][j][2];
                    dest[i][j][3] = curr_img[i][j][3];
                }
            }
            pointer = stream_tail(pointer);
        }
    };
}


install_filter(stream_to_filter(array_to_stream(anomaly_data)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 3

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    const len = array_length(a);
    const arr_to_str = (arr, idx) => idx < len ? pair(arr[idx], () => arr_to_str(a, idx + 1)) : null;
    return arr_to_str(a, 0);
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    // your solution goes here
    const height = image_height();
    const width = image_width();    
    let pointer = s;
    return (src, dest) => {
        while (!is_null(pointer)) {
            const curr_img = head(pointer);
            for (let i = 0; i < height; i = i + 1) {
                for (let j = 0; j < width; j = j + 1) {
                    dest[i][j][0] = curr_img[i][j][0];
                    dest[i][j][1] = curr_img[i][j][1];
                    dest[i][j][2] = curr_img[i][j][2];
                    dest[i][j][3] = curr_img[i][j][3];
                }
            }
            pointer = stream_tail(pointer);
        }
    };
}

function loop(s) {
    // your solution goes here
    const infinite_stream = str => is_null(str) 
                                     ? infinite_stream(s) 
                                     : pair(head(str), 
                                        () => infinite_stream(stream_tail(str)));
    return infinite_stream(s);
}


install_filter(
    stream_to_filter(
        loop(array_to_stream(anomaly_data))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 4

import { alpha_of, blue_of, compose_filter, copy_image, get_video_time,
    green_of, image_height, image_width, install_filter, keep_aspect_ratio,
    pause_at, red_of, reset_filter, set_dimensions, set_fps, set_loop_count,
    set_rgba, set_volume, start, use_image_url, use_local_file, use_video_url
} from "pix_n_flix";

const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    const len = array_length(a);
    const arr_to_str = (arr, idx) => idx < len ? pair(arr[idx], () => arr_to_str(a, idx + 1)) : null;
    return arr_to_str(a, 0);
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    // your solution goes here
    const height = image_height();
    const width = image_width();    
    let pointer = s;
    return (src, dest) => {
        while (!is_null(pointer)) {
            const curr_img = head(pointer);
            for (let i = 0; i < height; i = i + 1) {
                for (let j = 0; j < width; j = j + 1) {
                    dest[i][j][0] = curr_img[i][j][0];
                    dest[i][j][1] = curr_img[i][j][1];
                    dest[i][j][2] = curr_img[i][j][2];
                    dest[i][j][3] = curr_img[i][j][3];
                }
            }
            pointer = stream_tail(pointer);
        }
    };
}

// Your loop function from TASK 3 goes here.
function loop(s) {
    // your solution goes here
    const infinite_stream = str => is_null(str) 
                                     ? infinite_stream(s) 
                                     : pair(head(str), 
                                        () => infinite_stream(stream_tail(str)));
    return infinite_stream(s);
}

function time_lapse(s, n) {
    // your solution goes here
    const t_lapsed = (str, num) => num === 0 
                                    ? pair(head(str), 
                                        () => t_lapsed(stream_tail(str), n - 1)) 
                                    : t_lapsed(stream_tail(str), num - 1);
    return t_lapsed(s, 0);
}


install_filter(
    stream_to_filter(
        time_lapse(loop(array_to_stream(anomaly_data)),
                   3)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();