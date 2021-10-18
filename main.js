function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
  background(300);
    noFill();

}

function draw() {
    image(video, 200, 150, 320, 280);
   

   fill(255,165,0)
   rect(75,30,500,10);
   rect(45,40,10,400)
   rect(600,40,10,400)
   rect(75,450,500,10)
   fill(255, 0, 0,);
  stroke(127, 63, 120);
circle(50, 30, 50);
 circle(50, 450, 50);
  circle(600, 30, 50);
   circle(600, 450, 50);
}

function take_snapshot(){
save('student_name.png');
}