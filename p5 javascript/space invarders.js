let score=0;


let rocet;
let bullets=[];
let enemys=[]

function setup(){
    createCanvas(650,400)
    //rocket
    rocet= new Roccet(250,height-100,50,150)
    
    //enemies
    for(i=0;i<=5;i++){
        let x=50+100*i
       enemys[i]=new Enemy(x,50,70) 
    
    }
    
    

}

function draw(){
    background(51);

    //score for the game
    fill(255);
    textSize(35)
    text(score,100,150)


    //rocket show
    rocet.show()

    //bullet show
    for(i=0;i<bullets.length;i++){
        bullets[i].show()
        bullets[i].move()
        for(j=0;j<enemys.length;j++){
            if(bullets[i].hits(enemys[j])){
             //code to be executed after hiting
               enemys[j].shrink()
            console.log("hit!");
            
            }
        }
}

//enemy show
for(i=0;i<enemys.length;i++){
    enemys[i].show()
    enemys[i].move()
    // console.log(enemys[i].r);
   

}
//splicing the enemy
for(i=enemys.length-1;i>=0;i--){
    if(enemys[i].r<20){
        console.log(10);
        enemys.splice(i,1);
          score+=50
    } }
    
}

function keyPressed(){
    //bullet
    if(keyCode===32){
        let bullet=new Bullet(rocet.x+25,height-rocet.h/2,10)
        bullets.push(bullet)
    //    console.log("space");
    }
     //rocet
    if(keyCode===RIGHT_ARROW){
    //  console.log(" right pressed");
    rocet.move(1);
    //edge detct
    if(rocet.edges()){
        rocet.move(-1)
    }
   
    }
    if(keyCode===LEFT_ARROW){
    //  console.log(" left pressed");
    rocet.move(-1)
    // console.log(rocet.x);
   //edge dectet
    if(rocet.edges()){
        rocet.move(1)
    }
    }


}
// //intersection detection
// let dis=dist(enemys.x,enemys.y,)
// if()

