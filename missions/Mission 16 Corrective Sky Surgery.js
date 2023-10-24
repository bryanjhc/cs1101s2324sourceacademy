// Mission 16  Corrective Sky Surgery

// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function my_first_filtereg(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = 255 - src[y][x][0]; // invert red intensity
            dest[y][x][1] = 255 - src[y][x][1]; // invert green intensity
            dest[y][x][2] = 255 - src[y][x][2]; // invert blue intensity
            dest[y][x][3] = 255;                // always 255
        }
    }
}

function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();
    const widthlastidx = width - 1;
    const heightlastidx = height - 1;

    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = (255 / heightlastidx) * y; // red
            dest[y][x][1] = (255 / widthlastidx) * x; // green
            dest[y][x][2] = (255 / math_min(widthlastidx, heightlastidx)) * math_min((heightlastidx - y), (widthlastidx - x)); // blue
            dest[y][x][3] = 255;                // always 255
        }
    }
}

install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 2

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function copy(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            dest[i][j][0] = src[i][j][0];
            dest[i][j][1] = src[i][j][1];
            dest[i][j][2] = src[i][j][2];
            dest[i][j][3] = src[i][j][3];
        }
    }
}

function crosshair(src, dest) {
    // your program goes here
    const square = x => x * x;
    const width = image_width();
    const height = image_height();
    const midwidth = math_floor(width / 2);
    const midheight = math_floor(height / 2);
    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            dest[i][j][0] = src[i][j][0];
            dest[i][j][1] = src[i][j][1];
            dest[i][j][2] = src[i][j][2];
            dest[i][j][3] = src[i][j][3];
        }
    }
    for (let y = 0; y < height; y = y + 1) {
        dest[y][midwidth][0] = 255;
    }
    for (let x = 0; x < width; x = x + 1) {
        dest[midheight][x][0] = 255;
    }
    for (let k = 0; k < height; k = k + 1) {
        for (let l = 0; l < width; l = l + 1) {
            let radius = math_sqrt(square(k - midheight) + square(l - midwidth));
            if (radius % 50 >= 25) {
                dest[k][l][2] = 255;
            }
        }
    }
}

install_filter(copy);
install_filter(crosshair);  // use this filter when crosshair function is ready.
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 3

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function zoom(factor) {
    // your solution here
    const width = image_width();
    const height = image_height();
    const startwidth = (width * (factor - 1) / (factor * 2)) - 1;
    const startheight = (height * (factor - 1) / (factor * 2)) - 1;
    
    function get_height_pos(i) {
        return math_floor(i / factor) + startheight;
    }
    
    function get_width_pos(j) {
        return math_floor(j / factor) + startwidth;
    }
    
    return (src, dest) => {
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                dest[i][j][0] = src[get_height_pos(i)][get_width_pos(j)][0];
                dest[i][j][1] = src[get_height_pos(i)][get_width_pos(j)][1];
                dest[i][j][2] = src[get_height_pos(i)][get_width_pos(j)][2];
                dest[i][j][3] = src[get_height_pos(i)][get_width_pos(j)][3];
            }
        }
    }
}

install_filter(zoom(2));
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 4

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}


// Copy your solution for Task 3 (zoom) here.
function zoom(factor) {
    // your solution here
    const width = image_width();
    const height = image_height();
    const startwidth = (width * (factor - 1) / (factor * 2)) - 1;
    const startheight = (height * (factor - 1) / (factor * 2)) - 1;
    
    function get_height_pos(i) {
        return math_floor(i / factor) + startheight;
    }
    
    function get_width_pos(j) {
        return math_floor(j / factor) + startwidth;
    }
    
    return (src, dest) => {
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < width; j = j + 1) {
                dest[i][j][0] = src[get_height_pos(i)][get_width_pos(j)][0];
                dest[i][j][1] = src[get_height_pos(i)][get_width_pos(j)][1];
                dest[i][j][2] = src[get_height_pos(i)][get_width_pos(j)][2];
                dest[i][j][3] = src[get_height_pos(i)][get_width_pos(j)][3];
            }
        }
    };
}


function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function stack(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_height = math_floor(height / 2);

        filter1(src, temp1);
        filter2(src, temp2);

        for (let i = 0; i < half_height; i = i + 1) {
            dest[i] = temp1[i * 2];
            dest[i + half_height] = temp2[i * 2];
        }

        // take last row from temp2, if height is odd
        for (let i = half_height * 2; i < height; i = i + 1) {
            dest[i] = temp2[i];
        }
    };
}

function beside(filter1, filter2) {
    // your program goes here
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);
    
    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_width = math_floor(width / 2);
        
        filter1(src, temp1);
        filter2(src, temp2);
        
        for (let i = 0; i < height; i = i + 1) {
            for (let j = 0; j < half_width; j = j + 1) {
                dest[i][j] = temp1[i][j * 2];
                dest[i][j + half_width] = temp2[i][j * 2];
            }
        }
        // take last col from temp2, if height is odd
        for (let i = 0; i < height; i = i + 1) {
            for (let j = half_width * 2; j < height; j = j + 1) {
                dest[i][j] = temp2[i][j];
            }
        }
    };
}


install_filter(stack(beside(flip_vertically, color_invert),
                     beside(copy_image, zoom(2))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();


// TASK 5

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}

function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function compose(filter1, filter2) {
    // your program goes here
    const temp = make_image(WIDTH, HEIGHT);
    return (src, dest) => {
        filter1(src, temp);
        filter2(temp, dest);
    };
}

install_filter(compose( flip_vertically, color_invert));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();