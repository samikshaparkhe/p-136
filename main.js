status = "";
objects = [];
video = "";
function setup()
{
 canvas = createCanvas(450, 350);
 canvas.center();
}
function preload()
{
    video = createCapture('video');
    video.hide();
}
function draw()
{
 image(video, 0, 0, 450, 350);
}
function modelLoaded()
{
 console.log("Model Loaded!");
 status = true;
 video.loop
}
function start()
{
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
 document.getElementById("search").objects;
}