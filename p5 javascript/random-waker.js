//random waker using object orinted programing
let waker=[];
let word;
// let word2;
let name="";
let moving=false

//DOM ELEMENTS
let textFeild;
let button;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(50);
    //waker object
    for(i=0;i<300;i++){ waker[i]=new Waker()}
   
   
   //dom elements
   textFeild=select("#textField")
   button=select("#button")

    //if the user puts his name and click the submit button the name gets send to the canvas
    //if submit button is clickd and the name is proper only then the random walker starts moving
    //if the walker is moving the button and the input gets disapperd
     button.mousePressed(()=>{
        //  console.log("press");
        textFeild.changed(()=>{
        console.log(textFeild.value());
        name=textFeild.value()
        moving=true
        if(textFeild.value().length<2){
        moving=false
        }
    })
     })
     
}
//draw function
function draw(){
    for(i=0;i<waker.length;i++){
      if(moving)  waker[i].show()
      if(moving)  waker[i].move()
       // console.log(i);
    }
    //if the walker is moving the button and the input gets disapperd
    if(moving){
        button.style("display","none")
        textFeild.style("display","none")
     }

    //text
    word= new Word("HI",width/2-110,200,150)
    word.show()
    // fill(255)
     word2=new Word(name,width/2,height-100,150)
    word2.show()
 
}



//class for the waker
class Waker{     
    constructor(){
         this.r = 255
         this.g=255
         this.b=255

        this.pos=createVector(width/2,height/2)
        // this.vel=createVector()
    }

     //show function for the waker
     show(){
         stroke(this.r,this.g,this.b)
         strokeWeight(3)
         point(this.pos.x,this.pos.y)
     }
     //move function for the waker
     move(){
         let r=floor(random(4))
         if(r===0){
            this.pos.x+=5
            this.r=255;
            this.b=0;
            this.g=0;
         }else{this.r=255;
        this.g=255;this.b=255}

         if(r===1){
            this.pos.x-=5
            
         }     
         if(r===2){
            this.pos.y+=5
         }     
         if(r===3){
            this.pos.y-=5
         }     
    //color
    if(this.pos.x>random(width/2,width))
    {
        // console.log("change clr")
        this.r=0
    }
    else{this.r=255;}
        }

        //hits function
        hits(){
            if(this.pos.x>=width/2-110 && this.pos.y>=200){
                return true
            }
        }

}
