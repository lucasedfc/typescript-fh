import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";


// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2});
// printObject('hello world');


// console.log(genericFunction(213.32321).toFixed(2));
// console.log(genericFunction('hello').toUpperCase());
// console.log(genericFunction(new Date()).getDate());


// console.log(genericFunctionArrow(213.32321).toFixed(2));
// console.log(genericFunctionArrow('hello').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston',
    dangerLevel: 100
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
console.log(genericFunctionArrow<Hero>(deadpool).realName);
