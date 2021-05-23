class Kata{
    constructor(){
        this.pos=createVector(300,300)

    }
    
    // update(vo){
    //     // this.pos=createVector(200,200)
    //     this.vel=p5.Vector.sub(vo,this.pos)

    // }
    show(mouse){
    this.v=p5.Vector.sub(mouse,this.pos)
            let vr=random(50,100)
    this.v.setMag(vr)
        stroke(255)
        strokeWeight(5)
        line(0,0,this.v.x,this.v.y)
        
    }



}