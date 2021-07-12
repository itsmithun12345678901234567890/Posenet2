noseX=0;
noseY=0;
function preload(){
   clown_nose = loadImage('https://i.postimg.cc/3RgNpgHJ/unnamed.png');
}

function setup() {
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded(){
   console.log("poseNet is Initialized");
}

function gotPoses(results){
   if(results.length > 0){
       console.log(results);
       noseX = results[0].pose.nose.x -80;
       noseY = results[0].pose.nose.y -38;
       console.log("nose x ="+results[0].pose.nose.x);
       console.log("nose y ="+results[0].pose.nose.y);
   }
}

function draw() {
   image(video,0,0,300,300);
   image(clown_nose, noseX, noseY, 160, 100);
}

function take_snapshot(){
save('myFilterImage.png');
}







