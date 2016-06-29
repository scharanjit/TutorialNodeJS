var params={
  firstName: "Charanjit",
  lastName:"Singh",
  age:"25"

};
console.log(params);

function addNumbers(a,b){
  return a+b;
}

console.log(addNumbers(7,3));

function worthLess(){

}
console.log(worthLess());


var printBacon= function(){

  console.log("Bacon is healthy ... !!")
};

printBacon();



setTimeout(printBacon,5000); //call this code in 5 seconds



function placeAnOrder(orderNo){
  console.log("Customer Order :",orderNo);
  cookAndDeliverFood(function (){
    console.log("Delievered Food :",orderNo);

  })
}

//simulate in 5 s operation
function cookAndDeliverFood(callBack){
  setTimeout(callBack,5000)
}


//Simulate user web request

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);


//In NOdeJS everything is reference

var bucky={
  favFood:"becon",
  favMovie:"Chappit"
};

var person=bucky;   //creating reference to bucky NOT creating the copy
person.favFood="salad";
console.log(bucky.favFood);



//difference betweem two equal signs & three equal signs

console.log(19=="19"); //only compares the value
console.log(19==="19"); //compare value and types


var lucky={
  printFirstName: function(){
    console.log("My Name is lucky");
    console.log(this===lucky);
  }
};


lucky.printFirstName(); //refernece to watevr object it is calling


//the default calling context is global
function doSomethingWorthless(){
  console.log("I am worthless");
  console.log(this===global);
}


doSomethingWorthless();


function User(){
  this.name="",
      this.life=100,
      this.giveLife= function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name+" gave one life to "+targetPlayer.name)

      }
}



var buck= new User();
var wendy= new User();

buck.name="buck";
wendy.name="wendy";


buck.giveLife(wendy);


console.log("buck "+buck.life);
console.log("wendy "+wendy.life);

//With Prototyping ,can add functions to all objects
User.prototype.uppercut= function uppercut(targetPlayer){
  targetPlayer.life -=3;
  console.log(this.name+" just uppercutted "+targetPlayer.name)
}


wendy.uppercut(buck);
console.log("buck "+buck.life);
console.log("wendy "+wendy.life);


//With Prototyping ,can add properities to all objects

User.prototype.magic=60;

console.log(buck.magic);
console.log(wendy.magic);


var movies=require("./movie");   // "./" means look in same directory. Also,do not include .js extension


movies.avatar();

movies.chappie();

//modules exporting different way

var movies1= require("./movies");

movies1.printAvatar();

console.log(movies1.favMovie);



//shared state of module

require("./emily");
require("./bukcy"); //refererring to same reference ...ex:- chatroom ppl refer to same chat so instead of making copy for each...all refer to same object


//object factories
//
require("./emily1");
require("./bucky1");

//core  modules :Already buil in modules in Node JS

var fs = require('fs') //file system module

fs.writeFileSync("corn.txt","Corn is good, corn is life");

console.log(fs.readFileSync("corn.txt").toString());

var path=require('path');

var websiteHome ="/home//charanjits//imaginea/index.html";
var websiteAbout="/home/charanjits/imaginea/about.html";

console.log(path.normalize(websiteHome));  // it has normalized the double slash as per OS

console.log(path.dirname(websiteAbout));

console.log(path.basename(websiteAbout));

console.log(path.extname(websiteAbout));



//difference between setTimeout & setInterval

setTimeout(function () {
  console.log("==Once==")
},2000);


setInterval(function () {   //runs after every 2 seconds
  console.log("==Repeat==")
},2000);


//current filename dirname
console.log(__dirname);
console.log(__filename);















