let box= [];
let ball=[]
//setup function
function setup(){
    createCanvas(650,450)
    for(i=0;i<1;i++){box[i]=new Box(185,height-133,290,50)
    console.log(box.length);}
    
    console.log(box.x,box.y)
    //array of balls
    for(i=0;i<3;i++){
        let x=225+100*i
    ball[i]=new Ball(x,height-40,80)}
}


///draw function
function draw(){
    background(211, 202, 202)

    for(i=0;i<1;i++){box[i].show()
                                          }


    //show of ball array
    for(i=0;i<ball.length;i++){

    ball[i].show()
    }
    
}

//mousepressed event to remove the ball from the canvas
function mousePressed(){
    // for(i=0;i<ball.length;i++){
    //     if(ball[i].cilcked(mouseX,mouseY)){
    //         console.log("click on the ball");
    //         ball.splice(i,1)
    //     }
           for(i=0;i<box.length;i++){
             if(box[i].anotherClick()){
              console.log("click on the box");
            //   box.splice(i,1)
          }
        } 
       
    }
         
}

// function mousePressed(){
    
//     }