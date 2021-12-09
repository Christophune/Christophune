var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {

   img4 = loadImage('cloud2.png'); 
   img2 = loadImage('cloud.png');  
   img5 = loadImage('cloud5.png');  
   img6 = loadImage('cloud6.png');  
   img7 = loadImage('cloud7.png');  
   img8 = loadImage('cloud8.png');  
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   stroke(252, 196, 169);
    testbox(252, 196, 169);
    testbox(252, 196, 169);
    
  } else if (toolChoice == '2') { // second tool

   stroke(195, 205, 230);
    testbox(195, 205, 230);
    testbox(195, 205, 230);
  } else if (toolChoice == '3') { // third tool
    image(img2, mouseX-25, mouseY-25, 150, 150);

  } else if (toolChoice == '4') {
image(img4, mouseX-25, mouseY-25, 150, 150);
  
  } else if (key == '5') { // this tool calls a function
   image(img5, mouseX-0, mouseY-10, 250, 150);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
 image(img6, mouseX-0, mouseY-10, 250, 150);
 
  
  } else if (toolChoice == '7') {
 image(img7, mouseX -350, mouseY-300, 700, 330);
    
  } else if (toolChoice == '8') {
 image(img8, mouseX -120, mouseY-120, 250, 250);

  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img1, mouseX-25, mouseY-25, 100, 100);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
