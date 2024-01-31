status1="";
object=[];
function preload(){
dog=loadImage("myroom.webp");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
ObjectDetected=ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("detect").innerHTML="Status:Object Detecting";
}

function ModelLoaded(){
console.log("Model Is Loaded");
status1=true;
ObjectDetected.detect(dog,GotResult);

}

function GotResult(error,result){
if (error) {
console.log(error); 
}
else{
    console.log(result);
    object=result;
}
}

function draw(){
image(dog,0,0,640,420);
if (status1 != "") {
    for (let i = 0; i < object.length; i++) {
    document.getElementById("detect").innerHTML="Status:Object Detected";
   fill("red");
stroke("red")
noFill();
percent=floor(object[i].confidence*100);
rect(object[i].x,object[i].y-150,object[i].width-100,object[i].height-150);
text(object[i].label+" "+percent+"%",object[i].x+5,object[i].y-130);
    }
}





}
function p(){
window.location="index.html";
}