//newtons second law
let mover=[];

function  setup() {
    createCanvas(600,400)

    //mover Array
    for(i=0;i<=1;i++){
        let x=200+i*100
        let mass=3+3*i
        console.log(mass);
        mover[i]=new Mover(x,200,mass)
    }
    
    // frameRate(90)

}


function draw(){
    background(50)
    for(i=0;i<=mover.length-1;i++){
         mover[i].show()
         mover[i].update()
         //wind force

    if (mouseIsPressed){
        let wind=createVector(1,0)
        mover[i].applyForce(wind)
} 


let gravety=createVector(0,1)
   
    mover[i].applyForce(gravety)
   
    mover[i].edge()
    }
    
}

//key function to add a new ball
function keyPressed(){
// console.log("press");
if(keyCode===78){
    // console.log("n");
    let x=random(width)
    let keyMover=new Mover(x,200)
    mover.push(keyMover)

      }
      if(mover.length>=5){
        //   console.log(5);
        mover.pop()
      }
}