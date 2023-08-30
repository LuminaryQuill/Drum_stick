var noOfDrum = document.querySelectorAll("button").length;
for (var i = 0; i < noOfDrum; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
    //   showing response with button
        var buttoninnerhtml = this.innerHTML;
        addsound(buttoninnerhtml);
        addanimation(buttoninnerhtml);
    });


    // showing response with respect to keyboard
    document.addEventListener("keypress",function(event){
        addsound(event.key);
        addanimation(event.key);
    
    });
}

function addsound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break; 
    }
    // var sound=new Audio("sounds/tom-1.mp3");
    // sound.play();
    // this.innerHTML.style.color="red";
}

function addanimation(current_key){
    document.querySelector("."+current_key ).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+current_key ).classList.remove("pressed");
    },20);
    
}




