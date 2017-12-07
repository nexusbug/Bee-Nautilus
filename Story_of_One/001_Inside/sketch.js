/*
http://nexusbug.com/
*/

var canvas;
var field = [];

function setup() {
    canvas = createCanvas(600, 600);
    for (var i = 0; i < 200; i++) {
        field.push(new Field(8));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < field.length; i++) {
        field[i].update();
        field[i].disp();
    }
}
