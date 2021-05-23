class Particle{
    constructor(){
    this.pos=createVector(random(width),height)
    this.vel=createVector(0,random(-8,-12))

    this.gravity=createVector(0,.01)
    this.acc=createVector(0,0)
    

    }
     
    //unpdate mathode for the particle
    update(){
        this.acc.add(this.gravity)
        this.vel.add(this.acc)
       this.pos.add(this.vel)
            }



    //show the particles
   show(){
       stroke(255)
       strokeWeight(5)
       point(this.pos.x,this.pos.y)
   }



}