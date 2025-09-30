// A beautiful sketch with circles.
// A grid of expanding and contracting circles. Basically an animation

let t = 0;

// A variable to control animation

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  noStroke(); 
  
  // No outline for the shapes
  
  colorMode(HSB, 360, 100, 100, 100); 
  // Use HSB (hue, saturation, brightness) color mode with transparency
}



function draw() {
  background('white'); 
  // White background

  for (let x = 0; x <= width; x += 50) {
    
    for (let y = 0; y <= height; y += 50) {
      
      // Calculate the distance from the mouse position
      //changing the number leads to more or less distortation
      //lower the number...more combined the circles are and vice versa
      
      let d = dist(mouseX, mouseY, x, y);
      
      // The closer the mouse, lesser the proximity
      
      let size = map(d, 0, 200, 50, 5);

      // Use a sine wave to make the circles pulse
      
      let pulse = sin(t+(x * 0.01) + (y * 0.01)) * 5;

      // Set the fill color with transparency
      
      fill(200, 80, 70, 60);
      //hsba again

      // Draw the circle
      circle(x, y, size+pulse);
    }
  }

  t += 0.05; 
  //the time variable keeps increasing for animation
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}