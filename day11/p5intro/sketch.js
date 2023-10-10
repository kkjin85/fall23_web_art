function setup() {
    createCanvas(innerWidth,innerHeight)
    background(0,22,30)
    rectMode(CENTER)
}

function draw() {

    let red = map(mouseX,0,width,0,255)
    fill(red,0,0)
    strokeWeight(1)
    stroke(mouseX,mouseY,250)
    rect(mouseX,mouseY,random(10,50),random(10,50))
    text("YOOO",random(innerWidth),random(innerHeight))
    textSize(20)
}

// an event listener that "listens" for when the page is resized. if it is... do whatever is in the function
function windowResized() {
    resizeCanvas(innerWidth,innerHeight);
    background(0,22,30)
}