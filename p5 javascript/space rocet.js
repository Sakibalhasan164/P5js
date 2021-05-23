
class Roccet{

    constructor (x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    //show function
    show(){
        // rectMode(CENTER)
        fill(255)
        stroke(0)
        strokeWeight(1)
        rect(this.x,this.y,this.w,this.h)
    }
    ///moving the rocet with keyboard

    move(dir){
        // console.log("right arrow");
        this.x+=dir*25
        
    }

     edges(){
         if(this.x<0-24 ||this.x>width- 25){
             console.log("edge");
             return true
         }
         
     }
}