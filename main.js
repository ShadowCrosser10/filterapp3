nose_x = 0;
nose_y = 0;

function preload() {
    mustache =   loadImage("https://i.postimg.cc/J7T630C3/mustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 400);
    video.hide();
    video.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initalized.");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x-45;
        nose_y = results[0].pose.nose.y;
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
    } 
}

function draw() {
  image(video, 0, 0, 550, 400);
  image(mustache, nose_x, nose_y, 100, 40);
}

function snapshot() {
    save("Filtered_Image.png"); 
}