// class Kata{
//     constructor(x,y){
//         this.pos= createVector(200,200)
//         let taja=createVector(mouseX,mouseY)
//         this.v=p5.Vector.sub(taja,this.pos)
//         // this.v.setMag(50)
//         console.log(this.v.mag());
//         console.log(this.v.x);
//         console.log(this.v.y);
//     }

//     show(){
//         stroke(255,100)
//     strokeWeight(5)
//     line(0,0,this.v.x,this.v.y)
    
//     }
// }


class Mover{
    constructor(x,y){
        this.pos=createVector(x,y)
        this.vel=p5.Vector.random2D()
        this.vel.mult(random(3))
        
    }
     update(){


        let mouse=createVector(mouseX,mouseY)
        this.acc=p5.Vector.sub(mouse,this.pos)
        this.acc.setMag(.1)
         
        // this.acc=p5.Vector.random2D()
        this.vel.add(this.acc)
        //  this.vel.limit(2)
        this.pos.add(this.vel)
         
        // console.log(this.vel);
        }

    show(){
        fill(255)
        noStroke()
        circle(this.pos.x,this.pos.y,50)
    }
}