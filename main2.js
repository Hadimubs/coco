status1="";
object=[];
    function preload(){
        dog=loadImage("living.webp");
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
        rect(175,225,275,100);
        text("sofa",180,240);
            }
        }
        
        
        
        
        
        }
        function p(){
        window.location="index.html";
        }