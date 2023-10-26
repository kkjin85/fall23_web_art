console.log("hello world");

let a=2;
let b=3;
let c=a+b;

let myName = "jin";

console.log(c);
console.log(myName);

//for(let i=0; i<100; i++){
//console.log(i);
//}

//store a reference to myButton in JavaScript
let myButton = document.getElementById("myButton")

//add an event listener that listens for when the user clicks on the button

myButton.addEventListener("click", function(){
//the function body, the sutff that should happen when the button is clicked
    console.log("button was clicked")

    //change the background color of the circle
    let myCircle= document.getElementById("myCircle")

    //store a reference to the circle
    myCircle.style.backgroundColor="orangered"

})