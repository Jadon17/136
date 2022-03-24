status1 = "";


function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,380,380);
}

function start(){
    object_detector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("stat").innerHTML = "Status : Objects are being detected";
    answer = document.getElementById("input11").ariaValueMax;
}

function modelloaded(){
    console.log("MODEL HAS LOADED SUCCESFULLY !!");
    status1 = true;
}