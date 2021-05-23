let addP;
let colors=["purple","red","green","blue","black"]

let canvas;
let paragraph;
let slider1;
let inputbar;
let nameP;
let inputValue;

let nameofTHeinput;

///submit button
let submitBtn;
//canva
let canvasText=''

//the circle to controll with the slider
let dia=50

function setup(){
   canvas=createCanvas(400,400)
    // createElement("button","click")
    addP=createButton("click")
    
    ///arrow function
    addP.mousePressed(()=>{
        let r=floor(random(colors.length))
        paragraph= createP(`MY fev color is ${colors[r]}!!`)
       paragraph.position(random(window.innerWidth-100),random(window.innerHeight-100))
    })

    nameP=createP("para")
    nameP.position(500,100)
    nameP.mouseOver(()=>{
       nameP.html("aro beshi para!")
    })
    nameP.mouseOut(()=>{
       nameP.html("para SES!!")
    })
    nameP.style("background-color","gray")
    nameP.style("color","white")
    ///html
    canvas.position(360,200)


   slider1=createSlider(10,200,50)

   //inbput
   inputbar=createInput("")
   inputbar.style("color","red")
   inputbar.style("width","140px")
   inputbar.style("height","30px")

//    nameP.html(input.value())
//arrow function
   
  
   // function nameofTHeinput(){
   //            inputValue=text(input.value(),100,100)

   // }
   // submitBtn.mousePressed(nameofTHeinput)
   
   submitBtn=createButton("submit")
   submitBtn.mousePressed(()=>{
      console.log("click");
       inputbar.changed(()=>{
       canvasText=inputbar.value()
    })
   })
   
  
    
}

function draw(){
    background(50)
     fill(345,80,81)
    // rect(100,100,100,100)
    circle(width/2,height/2,slider1.value())
   
     textSize(slider1.value())

    //  inputValue(s)
   //  nameofTHeinput()
   text(canvasText,100,100)


}
