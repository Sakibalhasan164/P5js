class Word{
    constructor(str,x,y,s){
        this.str=str;
        this.x=x;
        this.y=y;
        this.s=s
    }

    show(){
        textSize(this.s)
        fill(50)
        noStroke()
         smooth()
         textAlign(CENTER)
        text(this.str,this.x,this.y)
    }
}