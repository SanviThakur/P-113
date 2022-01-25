function preload(){

}

function setup(){
    canvas = createCanvas(700, 400 );
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()  
}

function draw(){
    image(video, 100, 100, 500, 300);
    stroke(224, 153, 191);
    fill(224, 153, 191);
    rect(90, 90, 500, 20);

    stroke(224, 153, 191);
    fill(153, 209, 240);
    rect(90, 90, 20, 300);

    stroke(224, 153, 191);
    fill(153, 209, 240);
    rect(590, 90, 20, 300);

    stroke(224, 153, 191);
    fill(224, 153, 191);
    rect(90, 390, 500, 20);
    
    
    
}

function take_snapshot(){
    save("image.png");
}