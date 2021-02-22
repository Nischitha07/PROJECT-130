LeftWrist = 0;
RightWrist = 0;
song1 = " ";
song2 = " ";
status = 0;
score = 0;
function preload()
{
    song1 = loadSound("harry_potter.mp3");
    song2 = loadSound("frozen.mp3");
}
function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video , 0 , 0 ,500 , 350);
    stroke("#ff0022");
    fill ("#ff0022");

    if (results[0].pose.leftWrist>0)
    {
        song1.isPlaying();
    }
    else if(results[0].pose.reftWrist>0)
    {
        song2.isPlaying();
    }
    
}

function modelLoaded()
{
    console.log("modelLoaded");

}
function play_sound()
{
  
    song2.play();
  
    song2.setVolume(1);
    song2.rate(1);
}
function stop_sound()
{
    song1.stop();
    song2.stop();
}
function play_sound2()
{
    song1.play();
   
    song1.setVolume(1);
    song1.rate(1);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);

LeftWrist = results[0].pose.leftWrist;
RightWrist = results[0].pose.rightWrist;
console.log("leftWristX  " + leftWristX + rightWristX + "RightWrist" );
    }
}