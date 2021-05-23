let xSpeed=5,
 ySpeed=5
x=395
y=225

let r,g,b

// function preload(){
//     img = loadImage('javascript p5/dvd-logo.jpg');
// }
let logo;
function preload(){
    logo=loadImage("allen ginsberg.jpg");
}

function setup() {
    createCanvas(window.innerWidth,600)
    //position varialble for the circle
     x=random(width/2)
     y=random(height/2)
     
 
}
function draw(){
    background(0)
    show()
//    tint(r,g,b)
}

// function pickcolor(){
//     r=random(256)
//     g=random(256)
//     b=random(256)
// }
///show function
function show(){
    

///the real rect
// Image(logo,this.x,this.y)

fill(255)
image(logo,x,y,200,300)
x+=xSpeed
y+=ySpeed
if(x>=width||x<=0){
 console.log("im out");
 xSpeed=xSpeed*-1
//  pickcolor()
}
 else if(y>=height|| y<=0){
ySpeed=ySpeed*-1
console.log("im out y");
// pickcolor()
}
}
