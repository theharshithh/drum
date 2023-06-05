let audio1 = new Audio('sounds/crash.mp3');
let audio2 = new Audio('sounds/kick-bass.mp3');
let audio3 = new Audio('sounds/snare.mp3');
let audio4 = new Audio('sounds/tom-1.mp3');
let audio5 = new Audio('sounds/tom-2.mp3');
let audio6 = new Audio('sounds/tom-3.mp3');
let audio7 = new Audio('sounds/tom-4.mp3');
// dectecting key pressed.     
var i; let numberOfDrums = document.querySelectorAll(".drum").length;
document.addEventListener("keypress",function(event) {
    let keyPressed = event.key; 
    makeSound(keyPressed); 
    startAnimation(keyPressed);
} );


for(i=0; i<numberOfDrums; i++) { 
    //checks if button is being clickd and if so doing the req fucntion.
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    let btnText= this.innerHTML;
        makeSound(btnText); // makes sound if button is pressed. 
        startAnimation(btnText);

    });
    // making sound for the recieved key, be it click or be it letter pressed. 
    function makeSound(key) {
        switch (key) {
            case 'w':
                audio1.play()    
                break;
            case 'a':
                audio2.play()    
                break;
            case 's':
                audio3.play()    
                break;
            case 'd':
                audio4.play()    
                break;        
            case 'j':
                audio5.play()    
                break;
            case 'k':
                audio6.play()    
                break;
            case 'l':
                audio7.play()    
                break;
        }
    }
    function startAnimation(currentKey) {
       let activeBtn =  document.querySelector("."+currentKey);
       activeBtn.classList.add("pressed"); 
       setTimeout(function() {
        activeBtn.classList.remove("pressed");
       }, 100); 
    }
}



