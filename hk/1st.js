const age=9;

if (age >= 18){
    console.log("you are good to go!");
}
else if(age===10){
    console.log("hey!its not for u!!get older!and come back again!");
}

else {console.log("you are not good to go! get out of hear!!now!!!!!!!!")
}

//new if  or else statement

const dice1=6;
dice2 =2;

if(dice1===6 || dice2===6){
    console.log("you rolled 6")
}
else{console.log("you didn't")}


////// javascript arrays

const schedual=["wake up","eat and watch gopal var","read somthing","start coding"]


console.log(schedual);

 console.log(schedual[0]);
 console.log(schedual[4]);
 console.log(schedual[2]);

 schedual.push("a new thing ") ;

 console.log(schedual);

 schedual.pop();

 //javascript objects

 const user={
        name: "sakib",
        age: 16,
        marrid: false,
        bought:["bag","laptop","PHONE"],
        sayname: function() {
            console.log(this.name)
        }


 };

 


function saymyage(){

    console.log(`my age is ${this}`);
};


//loops

const names=["JASHIM","MITU","TAJAMAHAL","sakib","eti","nti"];

for (name of names){
    console.log(name);
    if(name==="sakib"){
        console.log("sakib is in my list!");
        break
    }
}


