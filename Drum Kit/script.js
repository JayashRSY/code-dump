var box = document.querySelectorAll(".box");

box[0].style.backgroundImage = "url('img/tom1.png')";
box[1].style.backgroundImage = "url('img/tom2.png')";
box[2].style.backgroundImage = "url('img/tom3.png')";
box[3].style.backgroundImage = "url('img/tom4.png')";
box[4].style.backgroundImage = "url('img/crash.png')";
box[5].style.backgroundImage = "url('img/kick.png')";
box[6].style.backgroundImage = "url('img/snare.png')";

var music;
function makeSound(key) {
    switch(key) {
        case 'a':
            music = new Audio('sounds/tom-1.mp3');
            music.play();
            break;
        case 's':
            music = new Audio('sounds/tom-2.mp3');
            music.play();
            break;
        case 'd':
            music = new Audio('sounds/tom-3.mp3');
            music.play();
            break;
        case 'f':
            music = new Audio('sounds/tom-4.mp3');
            music.play();
            break;
        case 'j':
            music = new Audio('sounds/crash.mp3');
            music.play();
            break;
        case 'k':
            music = new Audio('sounds/kick-bass.mp3');
            music.play();
            break;
        case 'l':
            music = new Audio('sounds/snare.mp3');
            music.play();
            break;
        default:
            break;
    }
}

function press(key) {
    pressedBox = document.querySelector("."+key);
    pressedBox.classList.add("pressed");

    setTimeout(function() {
        pressedBox.classList.remove("pressed");
    }, 100);
}

for (var i=0;i<box.length;i++) {
    box[i].addEventListener('click', function () {
        makeSound(this.innerHTML);
        press(this.innerHTML);   
    });

}
document.addEventListener('keypress', function(event) {
    makeSound(event.key);
    press(event.key);
});
