//lets store these variables in an object


//circle 1
/*var  circle1={
  X:0,
  Y:150,
  dia:50
}


circle2={X:650,
  Y:50,
  dia:100


}

function setup() {
    createCanvas(1300, 600);   
  }
  
  function draw() {
background(200);

//circle 1
    stroke(0);
    fill(0,0,0);
    circle1.X=random(0,width)
    circle1.Y=random(0,width)
    circle(circle1.X,circle1.Y,circle1.dia);

    //circle1.X=circle1.X+5
    
    //circle 2

    fill(0);
    circle(circle2.X,circle2.Y,circle2.dia)
    circle2.Y=circle2.Y+9
  }

  var circle1={
    X:300,
    Y:300,
    dia:50
  }

  function setup(){
    createCanvas(600,600);
    background(200)
  }
  function draw(){
    if(mouseX<301){
      fill(0)
    }else if(mouseX===250 && mouseY===20){
      background(255)
    }
    else{fill(255,0,0);
    noStroke()
    circle(circle1.X,circle1.Y,200)
  }
    circle(circle1.X,circle1.Y,circle1.dia)

   


  }*/
  var circle5={
    X:00,
    Y:200,
    dia:50
  }

  var circle6={

    X:200,
    Y:0,
    dia:100
  }
var speed=15
var speedOfY=5

  function setup(){
createCanvas(window.innerWidth,500);
noCursor()

  }
  function draw(){
background(0);
  fill("rgba(255,0,0,1)")
  noStroke()
    circle(circle5.X,circle5.Y,circle5.dia)
if(circle5.X>width ||circle5.X<0 ){
      speed=speed*-1
      console.log(speed);
    }

    circle5.X=circle5.X+speed

    
fill("rgba(118, 93, 105, 1)")
stroke(200);
strokeWeight(3)

  circle(circle6.X,circle6.Y,circle6.dia)

if(circle6.Y>height/1.5 ||circle6.Y<0){

  speedOfY=speedOfY*-1
}
  circle6.Y=circle6.Y+speedOfY
if(mouseIsPressed){
  speed=speed/2;
  console.log(speed);
 }
//  if(mouseIsPressed){
//    speed=-5
//  }
//  // else{
//   if(circle5.X>width ||circle5.X<0 ){
//     speed=speed*-1
//   }

//   circle5.X=circle5.X+speed

//  }
 rectMode("center")
  rect(mouseX,400,200,59);

  
 } 



  