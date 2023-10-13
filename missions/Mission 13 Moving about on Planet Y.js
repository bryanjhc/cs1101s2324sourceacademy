// Mission 13 Moving about on Planet Y

// Qn 1
while(true) {
const distance = (ev3_ultrasonicSensorDistance(ev3_ultrasonicSensor()))/11;
ev3_pause(1000);
display(distance);
}


// Qn 2
// Your program here.
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const robotic_eyes = ev3_ultrasonicSensor();
while (ev3_ultrasonicSensorDistance(robotic_eyes)/11 >= 10) {
    ev3_runForTime(motorA, 60, 800);
    ev3_runForTime(motorB, 60, 800);
    ev3_pause(1000);
}
ev3_runForTime(motorA, 300, -1000);
ev3_runForTime(motorB, 300, -1000);
ev3_pause(1000);

// Qn 3
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const robotic_eyes = ev3_ultrasonicSensor();
const coin = math_random();
display(coin);
function turn90counterclockwise() {
    ev3_runForTime(motorA, 800, -217);
    ev3_runForTime(motorB, 800, 217);
    ev3_pause(1000);
}
function turn90clockwise() {
    ev3_runForTime(motorA, 800, 217);
    ev3_runForTime(motorB, 800, -217);
    ev3_pause(1000);
}
while (ev3_ultrasonicSensorDistance(robotic_eyes)/11 >= 10) {
    ev3_runForTime(motorA, 60, 800);
    ev3_runForTime(motorB, 60, 800);
    ev3_pause(1000);
}
if (coin < 0.5) {
    turn90counterclockwise();
    ev3_runForTime(motorA, 600, 1000);
    ev3_runForTime(motorB, 600, 1000);
    ev3_pause(2000);
    turn90clockwise();
    ev3_runForTime(motorA, 600, 1000);
    ev3_runForTime(motorB, 600, 1000);
    ev3_pause(1000);
} else {
    turn90clockwise();
    ev3_runForTime(motorA, 600, 1000);
    ev3_runForTime(motorB, 600, 1000);
    ev3_pause(2000);
    turn90counterclockwise();
    ev3_runForTime(motorA, 600, 1000);
    ev3_runForTime(motorB, 600, 1000);
    ev3_pause(1000);
}