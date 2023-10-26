function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    colorMode(HSB);
}

function draw() {
    background(0); // Set the background to black

    // Create a loop to generate flames
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = height;
        let size = random(5, 20);
        let hue = random(10, 50); // Adjust the hue for the desired flame color

        fill(hue, 255, 255);
        ellipse(x, y, size, size * 5);

        // Simulate flames rising
        y -= random(1, 10);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
