let bigeye;
let samlleye;
let mousev;


function setup(){
    createCanvas(600,600)
    bigeye=new Eye(200,200,100,0)
    samlleye=new Eye(200,200,2,2)
}

function draw(){
    background(0)
    bigeye.show()
    samlleye.show()

    let m=p5.Vector.
    mousev=createVector()
}


class Eye{
    constructor(x,y,s,c){
        this.pos=createVector(x,y)
        this.size=s
        this.c=c
    }

    show(){
        fill(this.c)
        stroke(255)
        strokeWeight(5)
        circle(this.pos.x,this.pos.y,this.size)
    }
}