 /*const text=document.querySelector(".title");
const btn=document.querySelector(".btn");

text.style.backgroundColor="black";
text.style.color="white ";

btn.style.color="red";

//text.classList.add("class");

btn.addEventListener("click", function(){

    text.classList.toggle("class");



})

const userList=document.querySelectorAll(".name-list")


for(user of userList){

user.addEventListener("click",function(){

    this.style.color="red"
})

}
//array

const hero=["spiderman","ironman","captain"]

console.log(hero[2]);
//last vale of an array
console.log(hero [hero.length-1]);


//assignment

function name(x){

    console.log(`greetiong for u,${x}!`)

    console.log(`hey ${x}!`)  
}

name("sakib");


///loops
 //const days=["sun","mon","Tuesday","friday","SATERDAY"]

 //console.log(days);

 //for(let index=days.length-1;length>=0;index--){
    // console.log(days[index])
 //}

const myToDos=["wake up","eat something","start coding"]

 for(i=0;i<myToDos.length;i++){
     console.log(i)
 }


function myMark(currentMark,fullMark){
 
    let myParcent=(currentMark/fullMark)*100
    
    myGread=""

    if(myParcent>=90){
      
     myGread="A"
    }else if(myParcent>=80){
        myGread="B"
    }
    else if(myParcent>=70){
        myGread="C"
    }
    else if(myParcent>=60){
        myGread="D"
    }
    else if (myParcent>=50){
        myGread="E"
    }else{myGread="F"}
    


return `YOUR PARCENTAGE IS ${myParcent} AND YOUR GREAD IS ${myGread}`
}

let yourResult=(myMark(52,100))
console.log(yourResult);

//for each loop

const day =["sat","sun","mon","tues"]

//console.log(day);

//day.forEach(function(day,index)

//console.log(`the index is ${index} and the day is ${day} of the forEachloop`)

//}

//);
//for loop
for(i=0;i<=day.length-1;i++){

//const element=day[i]


console.log(day[i])


}


///another for loop
const days=["sun","mon","thes"]

for(i=0;i<=days.length-1;i++){

    console.log(days[i])
}

//reverse loop

for(i=days.length;i>=0;i--){

console.log(days[i]);

}

//javascript objects

let myTasksToday={
    
    first:"wake up,SAKIB",
    then:"start coding",
    whatTOCode:"javascript objecs",

    itaFunction: function(num){
        this.then=this.then + num
    },

    addfunction: function(){
        return `you have to start coding at ${this.then}`
    }


}
//console.log(myTasksToday)
console.log(`Hay!! ${myTasksToday.first}.Then follow the tasks: ${myTasksToday.then}..What to code? ${myTasksToday.whatTOCode}`);

myTasksToday.itaFunction(10)
console.log(myTasksToday.addfunction ());

// new array

let myToDo = ["wake up","start coding","make a website"]
//console.log(myToDo[myToDo.indexOf("wake up")]);


const newTodo=[{
    title:"wake up",
    isDone:false
},{
    title:"start coding",
    isDone:false
},{
    title:"make a website",
    isDone:true,
}]

//const index= newTodo.findIndex(function(todo,index){
  // return todo.title==="wake up"


//})
//console.log(index);

const days=["mon","tue","wed","thr","fri","sat"];

//console.log(days[0]);

days.forEach(function(days,index){

    console.log(`the index value of ${days} is ${index+1}`);
});

//another for each loop

const months=["jan","feb","march","april","may"]

//console.log(months[0])
months.forEach(function(month,i){
    console.log(`the  value of ${month} is ${i+1}`);

})

//arrow functions

const sayHello =(name) => `hey there ${name} !`

console.log(sayHello('sakib'));*/




// console.log(this);

// const camera={
//  price:600,
//  weight:2000,
//  myDes: function(){
// return `this canon cemera is of ${this.price}`
//  }
// }
// console.log(camera.myDes());

// const givetType =typeof 5.5

// console.log(givetType);



//coverting app

const converToTk= (doller)=>{
    if(typeof doller==="number"){
        return doller*80
    }else{throw Error ("amount needs to be in number")}
}



//try and catch syntax to avoid programg error
//  try {console.log(converToTk(5));
    

//  } catch (error) {
//      console.log(error);
// }








// console.log("i will not run if the program gets an error..to run me YOU have to use the try and catch syntax");

// var jhon={

//     name: "I am jhon",
//     age:53,
//     isActive:true
// }
// var marry={

//     name: "I am marry",
//     age:23,
//     isActive:true
// }
// var sam={

//     name: "I am sam",
//     age:20,
//     isActive:true
// }
// //console.log(jhon);

// let users=new Map()
// // console.log(typeof usrs);

// users.set("jhon",jhon)
// users.set("marrt",marry)
// users.set("sam",sam)


// console.log(users);
// console.log(users.get("sam"));


console.log(document.width);
