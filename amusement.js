img = "";
status = "";
function back(){
    window.location = "index.html";
}
function preload(){
    img = loadImage("amusing.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img, 0, 0, 380, 380);
}
function modelLoaded(){
    console.log("Model has loaded");
    status = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
