function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(50, 50, 25);
  circle(200, 200, 25);
  circle(300, 350, 25);
  describe('A white circle with black outline in the middle of a gray canvas.');
  
   // Bottom-right.
  arc(200, 55, 50, 50, 0, HALF_PI);

  noFill();

  // Bottom-left.
  arc(300, 25, 60, 60, HALF_PI, PI);

  // Top-left.
  arc(350, 55, 70, 70, PI, PI + QUARTER_PI);

  // Top-right.
  arc(259, 250, 80, 80, PI + QUARTER_PI, TWO_PI);

  
   // Style the line.
  stroke('magenta');
  strokeWeight(5);

  line(300, 200, 85, 75);
  line(200, 300, 85, 75);
}
