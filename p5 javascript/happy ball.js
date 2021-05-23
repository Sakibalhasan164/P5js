class Ball{
    constructor(x,y,d){
        this.x=x;
        this.y=y;
        this.d=d;//diameter
    }
    show(){
        stroke(0)
        strokeWeight(2)
        smooth()
        fill(251,154,2)
        circle(this.x,this.y,this.d)
    }
    cilcked(x,y){
        let distance=dist(x,y,this.x,this.y)
        if(distance<this.d/2){
            return true
            console.log(ball.length);
        }
    }
}
