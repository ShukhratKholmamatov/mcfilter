let navbar = document.getElementById('bar');
let more_text = document.getElementById('more_text');
let kamroq = document.getElementById('kamroq');
let koproq = document.getElementById('koproq');

function bar(){
    navbar.style.display = "flex";
    navbar.style.transition = "all 2s";
}

function cancel(){
    navbar.style.display = "none";
}


function more(){ 
    more_text.style.height = "auto";
    more_text.style.webkitTextFillColor = "#000";
    koproq.style.display = "none";
    kamroq.style.display = "flex";
    // -webkit-background-clip: text;
}

function less(){
    more_text.style.height = "100px";
    more_text.style.webkitTextFillColor = "transparent";
    koproq.style.display = "flex";
    kamroq.style.display = "none";
}

let counter = 0;

function popOut() {
    let text = document.querySelector('.pop_out');
    let down = document.getElementById('down');
    let up = document.getElementById('up');
    text.style.transition = "all 3s";
    text.style.height = "auto";
    text.style.display = "block";
    down.style.display = "none";
    up.style.display = "block";
    counter++;
    if (counter%2 == 0) {
        text.style.display = "none";
        down.style.display = "block";
        up.style.display = "none";
    }
}