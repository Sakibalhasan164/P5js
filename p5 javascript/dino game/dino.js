let player;


function setup(){
    createCanvas(600,400)
    player=new Player()
}


function draw(){
    background(50)

    ///palyer
    player.show()
    player.update()
}


function keyPressed(){
    if(keyCode===32){
         console.log("press");
     let force=createVector(0,-500)
     player.jump(force)
    }
}