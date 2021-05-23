class Player{
    constructor(){
        
        //postion vector for the ball
        this.pos=createVector(300,100)
     

        //vel
        this.vel=createVector(0,0)
        //gravity vector for the ball
        this.gravity=createVector(0,5)
        this.r=30

    }

    keycontrol(applied){
        this.vel.add(applied)
        // this.vel=createVector(0,0)
        this.vel.limit(8)
    }


    ///show function for the ball
    show(){
        fill(237,34,94)
        circle(this.pos.x,this.pos.y,this.r)
    }


    ///update
    update(){
        if(this.pos.y>width){
            this.pos.y=0
        }
        this.pos.add(this.gravity)
        this.pos.add(this.vel)
        // this.vel.add(this.gravity)
        
    }
    
    mets(paddle){
        if (this.pos.y < paddle.pos.y &&
            this.pos.y >= paddle.pos.y - this.r/2 &&
            this.pos.x >= paddle.pos.x  - this.r/2 &&
            this.pos.x <= paddle.pos.x + 100 + this.r/2+5) {
          this.vel=createVector(0,0)
          return true
        } else {
          return false;
        }
       }
    
     offscrin(){
         if(this.pos.x>width){
            //  console.log("edge");
            this.pos.x=0
         }
         if(this.pos.x<0){
             this.pos.x=width
         }

      }

}