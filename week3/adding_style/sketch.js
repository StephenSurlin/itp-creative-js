// Creating other HTML elements, adding style.


function setup() {

  var text = createHTML("This is an HTML string with style!");
  var canvas = createCanvas(600, 400);

  text.position(50, 50);
  text.id("apple");
  text.style("font-family: monospace; background-color: #FF0000; color: #FFFFFF; font-size: 18pt; padding: 10px;");
  canvas.position(150, 150);
  canvas.class("lemon");

};


function draw() {

  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);

};
