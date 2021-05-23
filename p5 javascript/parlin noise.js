let x=0;


function setup(){
    createCanvas(600,400)
}

function draw(){
    background(51)



    //circle
    let pos = map(noise(x),0,1,0,width);
     x+=0.01
    //  console.log(pos);
    circle(pos,height/2,50)
}
