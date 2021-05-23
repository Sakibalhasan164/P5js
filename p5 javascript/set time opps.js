class Word{
    constructor(){
        let a=random(width)
        let b=random(height)
        this.pos=createVector(a,b)
    }

   //text show mathode
   show(){
        fill(255)
        textSize(35)
       text("random",this.pos.x,this.pos.y)
   }


}