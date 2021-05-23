class Ball{
    constructor(){
        this.pos=createVector(width/2,height/2)
        this.vel=createVector(0,0)
        // this.acc=createVector(random(-1,2),random(.1,-2))

    }


    //show ffor the ball
    applyForce(mouse){
        this.acc=p5.Vector.sub(mouse,this.pos)
        this.acc.setMag(.05)
    }


    update(){
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        // this.vel.limit(10)
    }

    show(){
        fill(255)
        noStroke()
        circle(this.pos.x,this.pos.y,50)
    }
}