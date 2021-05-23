class Box{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y
        this.w=w
        this.h=h
    }

   //show function for the box object
   show(){
       
       fill(251,154,2)
       rect(this.x,this.y,this.w,this.h)
   }
   //click function to remove from the array
   anotherClick(){ 
       if(mouseX>this.x && mouseX<this.x+this.w && mouseY>this.y && mouseY<this.y+this.h){
           return true
       }

   }
}
