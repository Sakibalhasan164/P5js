// let bubbles=[];
// //setup
// function setup(){
//     createCanvas(650,400)
//     ///for loop
//     for(i=0;i<5;i++){
//         let x=100+90*i
//     bubbles[i]=new Bubble(x,160,90)
// }

// }
// //draw
// function draw(){
//     background(0);
//     for(i=0;i<bubbles.length;i++){
//     bubbles[i].move()
//     bubbles[i].show()
//     textSize(50)
//     fill(255)
//     stroke(255,0,0)
//     strokeWeight(3)
    
//     text(bubbles.length,50,80,)
   
    
// }

    
// }
 
// //mousePressed function for adding bubble in the array
// // function mousePressed(){
// //     // let x=new Bubble(mouseX,mouseY,90)
// //     // bubbles.push(x)
// //     for(i=0;i<bubbles.length;i++){
// //       bubbles[i].clicked(mouseX,mouseY);
// //     // if(bubbles.clicked()){
// //     //     bubbles[i].splice(i,1)
// //     // }
// //     if(bubbles.clicked(mouseX,mouseY)){
// //         bubbles[i].splice(i,1)
// //     }

// // }
    
        
      
// // }
// function mousePressed(){
//     for(i=0;i<bubbles.length;i++){
//         bubbles[i].clicked(mouseX,mouseY)
//         if(bubbles[i].clicked(mouseX,mouseY)){
//             console.log("splice can happen");
//             bubbles.splice(i,1)
//         }
//     }
// }


// // function mousePressed(){
    
// //  }

// //constructor function
// class Bubble{
    // consreructor
//     constructor(x,y,r){
//         this.x=x;
//         this.y=y;
//         this.r=r;
//         this.color=0
       
//     }
//     //the show or the bubble
//     show(){
//         fill(this.color)
//         stroke(255)
//         strokeWeight(2)
//         circle(this.x,this.y,this.r)
//     }

//     //move function
//     move(){
//         this.x=this.x+random(-3,3)
//         this.y=this.y+random(-3,3)
//     }

// //clicked functon on the class

//    clicked(x,y){
//        let distance=dist(x,y,this.x,this.y)
//        if(distance<this.r/2){console.log("click on the bubble");
       
//        let clr=random(25,254)
//        this.color=clr;
//         return true
//     }
//     else{return false}
       
//    }
// }

//setup
let ball=[];

function setup(){
    createCanvas(650,400)


    for(i=0;i<=1;i++){
        let x=50+100*i
        ball[i]=new Ball(x,250,120)
    }
 
 
 
 

}
//DRAW
function draw(){

    background(100)
  for(i=0;i<ball.length;i++){
      ball[i].show()
      ball[i].move()

      if(ball[0].intercection(ball[1])){
         console.log("intersection");
         background(255,100)
     }
     
  }
    
   
   


}

//objects
class Ball{
    constructor(x,y,d){
     this.x=x;
     this.y=y;
     this.d=d;
    }

    //show for the circle
    show(){
        fill(0)
        stroke(255)
        circle(this.x,this.y,this.d)
    }

    //movement for the circle
    move(){
        this.x=this.x+random(-3,3)
        this.y=this.y+random(-3,3)
    }
    intercection(other){
        let dis=dist(this.x,this.y,other.x,other.y)
        if(dis<this.d/2+other.d/2){
            return true
        }
    }



}

function mousePressed(){console.log(mouseX,mouseY);}

