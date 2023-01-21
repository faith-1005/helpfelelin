var feet = "";
var fur = "";

Array_result = [];

function preload(){

feet = createVideo("video.mp4");
feet.hide();

}

function draw(){

image(feet, 0, 0, 900, 600);

if(fur != ""){

    objectDetector.detect(feet, gotResult);

    for(i = 0; i < Array_result.length; i++){

        document.getElementById("famous").innerHTML = "status : your pathetic objects are detected";
        document.getElementById("fiend").innerHTML = "No. of pathetic objects detetcted are "+Array_result.length;

        fill("red");
        percent = floor(Array_result[i].confidence*100);
        text(Array_result[i].label+" "+percent+"%", Array_result[i].x+15, Array_result[i].y+15);
        noFill();
        stroke("red");
        rect(Array_result[i].x, Array_result[i].y, Array_result[i].width, Array_result[i].height);

    }

}

}

function setup(){

canvas = createCanvas(900, 600);
canvas.center();

}

function foe(){

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("fiend").innerHTML = "Status : Detecting your pathetic objects";

}

function modelLoaded(){

    console.log("model Loaded");
    fur = true;
    feet.loop();
    feet.speed(1);
    feet.volume(0);

}

function gotResult(error, results){

if(error){
    console.log(error);
}
else{
    console.log(results);
    Array_result = results;
}

}