function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tintColour = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColour);
}
function filter() {
    tintColour = document.getElementById("tintColour").value;
}
function take_snapshot() {
    save("video.jpg");
}