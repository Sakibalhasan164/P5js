//ball object
let player;
//paddles
let paddle=[];

function setup(){
    createCanvas(600,400)

   //player
   player=new Player()
}

function draw(){
    background(50)


    if(frameCount % 40 == 0){
        // console.log("40");
         let pad=new Paddle(255,255,255)
        paddle.push(pad)

    }
    if(random(1)<0.01){
        let pad=new Paddle(255,0,0)
        paddle.push(pad)
         
    }
    //paddle object on draw
    for(i=paddle.length-1;i>=0;i--){
       paddle[i].show()
       paddle[i].update() 
    }


    //ball object
    player.show()
    player.update()
    player.offscrin()
    for(i=0;i<=paddle.length-1;i++)
    if(player.mets(paddle[i])){
        // console.log("h");
        // player.pos=createVector(paddle[i].pos.x,paddle[i].pos.y)
    player.gravity=createVector(0,-2) 
    player.vel=createVector(0,0)
    player.vel.limit(100)
    // player.gravity.add(paddle.vel)
    }else{
        // player.gravity.x=5
    }
    
    
}


//keypressed function to control the ball
 function keyPressed(){
     if(keyCode===39){
            console.log("key");
            let controll=createVector(7,0)
            player.keycontrol(controll)
     }
     if(keyCode===37){
         let controll2=createVector(-9,0)
         player.keycontrol(controll2)
     }
 }