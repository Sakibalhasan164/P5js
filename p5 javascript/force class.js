class Mover{
constructor(x,y,m){

    this.pos=createVector(x,y)
    this.vel=createVector(0,0)
    this.acc=createVector(0,0)
    // this.force=createVector(0,1)
    // this.wind=createVector(1,0)
     this.r=25
     this.mass=m

} 
  applyForce(force){
    let f=p5.Vector.div(force,this.mass)
      this.acc.add(f)
      // this.acc.add(this.wind)
  }


  //edge
  edge(){
      if(this.pos.y>=height-this.r){
        //   console.log("edge");
        this.pos.y=height-this.r
        this.vel.y*=-1
      }
   if(this.pos.x>width ||this.pos.x<0){
     console.log("edge");
     this.vel.x*=-1
   }
    
  }

         update() {this.vel.add(this.acc)
            this.pos.add(this.vel);
            this.acc.set(0,0)
            
            
          }
//show function for the mover
         show(){
          fill(255,0,127)
          stroke(255,0,127)
          strokeWeight(1)
       ellipse(this.pos.x,this.pos.y,this.r*2)

}




}