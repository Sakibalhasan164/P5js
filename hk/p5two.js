

var speed=5


 var circle1={
     X:0,
     Y:50,
     dia:50
 }




function setup(){
    createCanvas(650,400)
    

}
function draw(){

background(00)
  
//for loop to fill the window with ciecls

fill(random(245),0,random(254))
    for(var i=0;i<width;i=i+150){
       circle(i,circle1.Y,circle1.dia)
    
    }
    for(var j=50;j<400;j=j+80){
      circle(random(0,150),j,50)
    }
    for(var j=50;j<400;j=j+80){
        circle(0,j,50)
      }
    for(var j=50;j<400;j=j+80){
        circle(300,j,50)
      }
    for(var j=50;j<450;j=j+80){
        circle(450,j,50)
      }
    for(var j=50;j<450;j=j+80){
        circle(600,j,50)
      }
        fill(random(0,255))
    smooth()
    circle(circle1.X,circle1.Y,random(155,120));
    circle1.X=circle1.X+speed

if(circle1.X>width ||circle1.X<0){
   console.log(speed);
   speed=speed*-1
 }
 //console.log(randomSeed(0,5)
 //);
//  noCursor()
}
