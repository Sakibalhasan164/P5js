//the input
// let angleMode=(DEGREES)
let textField;
let sakib;
let photoh1;
let addBtn;
//paragraph
let paragraph;
let btn;
let canvas;
let list1;
let nameArray=["sakib","harry","dev ed","danniel shifman","Hitesh"]
let rmvBtn;
let birdImg=[];

let dropZone;
let slide;
let slide2;
// let x=0
let angle=0;
let angle2=0
let kon=0
let kon2=0

function setup(){

//drag and drop an image
dropZone=select("#DropZone")
dropZone.dragOver(()=>{
  dropZone.style("background-color","green")
})
dropZone.dragLeave(()=>{
  dropZone.style("background-color","tomato")
})
dropZone.drop((file)=>{
  const img = createImg(file.data)
  img.size(100,100)
})






  rmvBtn=select("#rmv")
  // for(i=0;i<birdImg.length;i++){
    rmvBtn.mousePressed(()=>{
      console.log(2);
     birdImg.pop()
    })
  // }


 sakib=select("#sakibHASAN")
 sakib.mousePressed(
   ()=>{
    //  console.log(this);
    sakib.addClass("sakib")
   }
   )




  canvas=createCanvas(windowWidth-100,windowHeight-100)
  canvas.parent("HEADER")
  canvas.addClass("canvas")
  //  list1.addClass("tolist")
   //button
  btn= createButton("click")
    btn.parent("Landing-wraper")
  btn.addClass("myclass")
  btn.mousePressed(()=>{
   console.log("click");
  }
  )
//seclect the paragraph
 paragraph=select("#paragraph1")
  paragraph.mouseOver(()=>{
    paragraph.html("the mouse is over me")
  })


  textField=select("#text-field")
  textField.input(()=>{
   paragraph.html(textField.value())
  })


  textField.changed(()=>{
   paragraph.html(textField.value());
  })


  //a list of happy things
  btn.mousePressed(()=>{
    console.log("clicks");
    list1="li"

    let r=floor(random(0,nameArray.length))
    // let list="li"
    // nameArray.push()
    let happyList=createElement(list1,nameArray[r])
    happyList.parent("Paren")
    happyList.addClass("tolist")
    
  })
  //  list1.parent("Paren") 

  ///images
  photoh1=select("#IMAGES")
   photoh1.parent("#imageWraper")

   addBtn=select("#addBtn")
   addBtn.parent("#imageWraper")
   addBtn.mousePressed(()=>{
    console.log("click");
      let Img=createImg("games/images/bird.png")
        birdImg.push(Img)
         Img.size(100,100)
        Img.parent("#imageWraper")    }
   )


   //dancing slider   
slide=createSlider(0,100,50)

//slider no 2
slide2=createSlider(0,200,50)

}


function draw(){
  let x=map(sin(angle),1,-1,0,100)
  
  slide.value(x)
  
  angle+=.02

  background(150)

let m=map(sin(angle2),-1,1,50,150)
slide2.value(m)
angle2+=.0002
//variable
let posx=map(sin(kon),-1,1,50,width)
// let posy=map(sin(kon),-1,1,50,300)

posy=height/2
//draw things
kon+=random(0,.2)
circle(posx,posy,50)
line(width/2,height/2,posx,posy)


// console.log(sin(kon)); 


let posx2=width/2
let posy2=map(sin(kon2),-1,1,0,300)
line(width/2,height/2,posx2,posy2)
circle(posx2,posy2,50)
 kon2+=.05
}

