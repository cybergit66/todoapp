//function add(a, b){
//    return a + b;
//}
//
//console.log(add(3,1));
//
//var toAdd = [9, 5];
//console.log(add(...toAdd));

//var groupA = ['terence','buddy'];
//var groupB = ['highsmith'];
//var final = [3, ...groupA, ...groupB];
//
//console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew you are 25

function hello(a, b){
    console.log('Hello', a, 'you are', b);
}
hello(...person);

var name = ['mike', 'ben'];
var final = ['terence', ...name];
//Hi mike

final.forEach(function(name){
    console.log('Hi', name);
})