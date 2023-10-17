// Mission 14 Finding ELDRIC

// // Qn 1
// const robot_eyes = ev3_colorSensor();
// while (true) {
//     display(ev3_reflectedLightIntensity(robot_eyes));
//     ev3_pause(1000);
// }


// Qn 2
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const robot_eyes = ev3_colorSensor();

function turncounterclockwise() {
    ev3_runForTime(motorA, 50, -217);
    ev3_runForTime(motorB, 50, 217);
    ev3_pause(100);
}
function turnclockwise() {
    ev3_runForTime(motorA, 50, 217);
    ev3_runForTime(motorB, 50, -217);
    ev3_pause(100);
}
function turn90clockwise() {
            ev3_runForTime(motorA, 800, 217);
            ev3_runForTime(motorB, 800, -217);
            ev3_pause(100);
        }

function move() {
    while (ev3_colorSensorGetColor(robot_eyes) === 1) {
        ev3_runForTime(motorA, 60, 100);
        ev3_runForTime(motorB, 60, 100);
        ev3_pause(100);
    }
    correct();
}

function correct() {
    let i = 0;
    while (ev3_colorSensorGetColor(robot_eyes) !== 1 && i < 16) {
        turncounterclockwise();
        i = i + 1;
    }
    if (ev3_colorSensorGetColor(robot_eyes) === 1) {
        move();
    } else {
        while (ev3_colorSensorGetColor(robot_eyes) !== 1 && i < 32) {
            turnclockwise();
            i = i + 1;
        }
        if (ev3_colorSensorGetColor(robot_eyes) === 1) {
            move();
        } else {
            return undefined;
        }
    }
}

correct();