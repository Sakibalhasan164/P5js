// //making own functions
// function setup(){
//     createCanvas(700,400);
// }


// function draw(){
// background(0);
// //calling the lolipop function with arguments
// lolipop(45,60,80),
// //another lolipop with diffarent argument
// lolipop(150,80,90)

// }



// function lolipop(X,Y,DIA){
// //circle
// fill(255, 0, 102)
// noStroke()
// circle(X,Y,DIA)


// //rect of the lolipop
// fill(0)
// stroke(255)
// strokeWeight(3)
// rect(X-10,Y+50,20,150)


// }


//object orianted programing in javascript with classes

// let bubble={
//     X:100,
//     Y:200,
// }

// function setup(){
//     createCanvas(650,440)
// }

// function draw(){
//     background(0)
//     display()
//     move()
// }

// //thid display function will give me the bubble
// function display(){

//     noFill()
//     stroke(255)
//     strokeWeight(4)
//     circle(bubble.X,bubble.Y,50)
// }

// //now i need a function to move the bubble
// function move(){
//     bubble.X=bubble.X + random(-5,5)
//     bubble.Y=bubble.Y + random(-5,5)
// }

// let bubble1;
// let bubble2;
// let bubble3;

// function setup(){
//     createCanvas(650,400)
//     bubble1=new Bubble()
//     bubble2=new Bubble()
//     bubble3=new Bubble()
// }
// function draw(){
//     background(0);
//     bubble1.move();
//     bubble1.show();
//     bubble2.move();
//     bubble2.show();
//     bubble3.move();
//     bubble3.show();
// }

// class Bubble{
//    constructor(){
//        this.X=200;
//        this.Y=150;
//    }
//    move(){
//     this.X=this.X +random(-5,5)
//     this.Y=this.Y +random(-5,5)
// }

// show(){
//     stroke(255)
//     circle(this.X,this.Y,50)
// }
// }

let boxs=[];
// let box2;
// let box3;

function setup(){
    createCanvas(650,400)
    // 
    // box2=new Box(200,100,250,150)
    // box3=new Box(300,100,250,150)
    for(let i=0;i<=10;i++){
        let x=random(width)
        let y=random(height)
        let w=random(35,40)
        let h=random(100,40)
        boxs[i]=new Box(x,y,w,h)
        
    }
    
}


function draw(){
    background(0)
    
    for(let i=0;i<boxs.length;i++){
        boxs[i].move()
        boxs[i].show()
        boxs[i].bounce()

    }
}
function mouseDragged(){
    // console.log("click");
    let w=random(10,40)
    let h=random(150,160)

    let box=new Box(mouseX,mouseY,w,h)
    boxs.push(box)
    // console.log(boxs.length);
}





//constructor function
class Box{
    constructor(X,Y,W,H){
        this.X=X;
        this.Y=Y; 
        this.W=W;
        this.H=H;
    }

    show(){
        fill(200)
       stroke(0)
    
        rect(this.X,this.Y,this.W,this.H)
    }
    move(){
          this.X=this.X+random(-4,4)
          this.Y=this.Y+random(-4,4)

    }
    bounce(){
        if(this.X<0){
             this.X++
            console.log("oi")
        }
    }
    
    
}