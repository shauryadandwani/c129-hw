song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload (){
    
}

function setup(){
canvas= createCanvas(600, 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWrist")


    }
}


function draw(){
    image(video, 0, 0, 600, 500)

}
function play(){
    song.play();
}
