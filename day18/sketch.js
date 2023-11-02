function setup() {
    createCanvas(windowWidth,windowHeight,WEBGL)
    background(10,10,10)
    angleMode(DEGREES)
    // let x = random(width)
    // let y = random(height)
}

function draw(){
    fill(255,0,255,10)
    stroke(0,125,29,127)
    strokeWeight(2)

    push()
    translate(mouseX-width/2,mouseY-height/2)
    // rotateX(map(mouseX,0,width,0,360))
    // rotateY(map(mouseY,0,height,0,360))

    rotateX(frameCount*5)
    rotateY(frameCount*4)
    // scale(map(mouseX,0,width,0.1,2))
    scale(.5)
    // box(width/4,height/4,170)
    torus(60,15)
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight)
    background(10,10,10)

    // rect(random(width), random(height),20,20)
    
    // console.log(width,height)
    // console.log("window resized")
}