
const names=["sakib","mitu","tajhmahal","jashim","any"]
let i=0
//bubble arrray
const bubblArray=[40,100,160,220,280]

function setup(){
    createCanvas(650,400)
}
function draw(){
    background(0)
    fill(255)
    textSize(45)
    bubble()
    text( names[i],460,190)
    
}

function bubble(){
    for(let i=0;i<=bubblArray.length-1;i++){
        fill(255,0,55)
        circle(bubblArray[i],200,bubblArray[i])
    // console.log(i);
    }
    
}





function mousePressed(){
    i++
    if(i===names.length){
      i=0
    }
}