//  Mission Robotic Trials

// Qn 1
ev3_speak("HELLO MY WORLD");

// Qn 2
const motorA = ev3_motorA();
const motorB = ev3_motorB();

ev3_runForTime(motorA, 3000, 1000);
ev3_runForTime(motorB, 3000, 1000);

ev3_pause(1000);

// Qn 3
const motorA = ev3_motorA();
const motorB = ev3_motorB();


ev3_runForTime(motorA, 1000, -250);
ev3_runForTime(motorB, 1000, 250);

ev3_pause(1000);