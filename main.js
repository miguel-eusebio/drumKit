'use strict'

var class_drum = document.querySelectorAll(".drum");

for (let i = 0; i < class_drum.length; i++) {

    class_drum[i].addEventListener("click", function(){
        var innerHTML = (this.innerHTML);
        makeSound(innerHTML);
        buttonAnimation(innerHTML);
    })
   
}


document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){
    switch (key) {
        case "w":
            var music = new Audio('sounds/tom-1.mp3');
            music.play();
        break;
        case "a":
            var music = new Audio('sounds/tom-2.mp3');
            music.play();
        break;
        case "s":
            var music = new Audio('sounds/tom-3.mp3');
            music.play();
        break;
        case "d":
            var music = new Audio('sounds/tom-4.mp3');
            music.play();
        break;
        case "j":
            var music = new Audio('sounds/crash.mp3');
            music.play();
        break;
        case "k":
            var music = new Audio('sounds/kick-bass.mp3');
            music.play();
        break;
        case "l":
            var music = new Audio('sounds/snare.mp3');
            music.play();
        break;
    
        default:
            break;
    }
}


function buttonAnimation(current_key){
    var activeButton = document.querySelector("." + current_key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200)
}