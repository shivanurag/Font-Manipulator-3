leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500)
  canvas=createCanvas(550,500);
  canvas.position(550,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialised');
}

function gotPoses(results)
{
   if(results.length>0)
   {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
   }
}

function draw()
{
  background("#E45001");
  text('Mehan',125,275);
  textSize(difference);
  fill(35,140,154);
}