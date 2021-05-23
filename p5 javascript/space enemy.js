let speed=4





class Enemy{
    
    constructor(x,y,r){
            this.x=x;
            this.y=y;
            this.r=r;
        }
    //show of enemy
    show(){
        fill(0, 102, 204)
        noStroke()
        circle(this.x,this.y,this.r)
    }
    //shrink function
    shrink(){
        this.r=this.r-1
    }


    ///movement for the enemys
    move(){
        this.x+=speed
        if(this.x>width ||this.x<0-35){
            speed=speed*-1
            console.log(speed);
            
        }
    }
}