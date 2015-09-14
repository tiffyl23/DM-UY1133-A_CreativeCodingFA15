// check this out:
// http://numeral.com/agents/gateFiles/

function setup() {
  createCanvas(800, 600); // sets up the size of the canvas
  
  background(0, 0, 0);
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

}

function draw() {
  if(mouseIsPressed) // this only runs when the mouse is down
  {
    var d = sqrt((pmouseX-mouseX)*(pmouseX-mouseX) + (pmouseY-mouseY)*(pmouseY-mouseY));
    d = d*0.5;
    
    fill(255);
    stroke(0);
    strokeWeight(1);
    ellipse(mouseX, mouseY, d, d);
    
    stroke(255, 255, 0);
    strokeWeight(d/5);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
    var f = d*100.;
    osc.freq(f);
    osc.amp(0.5, 0.05); // turn up sine wave
  }
  else {
    osc.amp(0., 0.05); // turn down sine wave
  }
}

function keyReleased()
{
  if(key==' ') background(0, 0, 0);

}
