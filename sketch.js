let mirrorSlider;

function setup() {
  createCanvas(600, 600);
  background(0);
  blendMode(ADD);  // Set blend mode to additive
  
  // Create slider: min 3, max 12, default 6 mirrors
  mirrorSlider = createSlider(3, 12, 6, 1);
  mirrorSlider.position(10, 10);
  mirrorSlider.style('width', '80px');

  colorSlider = createSlider(3, 12, 6, 1);
  ColorSlider.position(10, 20);
  ColorSlider.style('width', '80px');
}

function draw() {
  if (mouseIsPressed) {
    // Calculate center point of canvas
    let centerX = width/2;
    let centerY = height/2;
    
    // Calculate relative position from center
    let dx = mouseX - centerX;
    let dy = mouseY - centerY;
    
    // Get number of mirrors from slider
    let mirrors = mirrorSlider.value();
    let angleStep = 360 / mirrors;

    let colorValue = mirrorSlider.value();
    
    // Draw mirrored circles
    for (let angle = 0; angle < 360; angle += angleStep) {
      let angleRad = radians(angle);
      
      let x = centerX + dx * cos(angleRad) - dy * sin(angleRad);
      let y = centerY + dx * sin(angleRad) + dy * cos(angleRad);
      
      fill(colorValue, 0, 120, 127); // Lighter purple
      noStroke();
      ellipse(x, y, 5, 5);
    }
  }
}
