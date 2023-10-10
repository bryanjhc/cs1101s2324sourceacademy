//  Mission 12 Robotic Trials
// If you want to test a certain qn, remember to comment out all other questions

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

ev3_runForTime(motorA, 800, -217);
ev3_runForTime(motorB, 800, 217);

/* 
// for a speedier version
ev3_runForTime(motorA, 130, -1000);
ev3_runForTime(motorB, 130, 1000);
*/

ev3_pause(1000);


// Qn 4
const motorA = ev3_motorA();
const motorB = ev3_motorB();

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

function move5cm() {
    ev3_runForTime(motorA, 60, 800);
    ev3_runForTime(motorB, 60, 800);
    ev3_pause(1000);
}


const move10cm = () => {move5cm(); 
                        move5cm();};
                        
const move15cm = () => {move5cm();
                        move5cm();
                        move5cm();};
                        
move10cm();
turn90counterclockwise();
move5cm();
turn90clockwise();
move15cm();

