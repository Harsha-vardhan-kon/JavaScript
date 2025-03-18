let a=[1,2,3,4];
a.push(4);
console.log(a)

let humanNames=["hi","bye","good","bad"]
humanNames.reverse();
console.log(humanNames)


let b=[1,2,3,4];
b.pop();
console.log(b);

let c=[1,2,3,4];
c.shift();
console.log(c);

let d=[1,2,3,4];
d.unshift(0);
console.log(d)

let car=['audi','benz','pagani'];

console.log(car.length)

let cars=['audi','benz','pagani'];

console.log(car[1])

let h=[1,2,3,4]
let add=h.map(add1=>add1*2);
console.log(add)
//splice
let m=[2,2,2,4,4,6,6];
m.splice(0,1);
console.log(m)

//conacat
let players=["harsha","vardhan"]
let score=[100,103]
let combination=players.concat(score);
console.log(combination);

//join
let team=[10,20,30,"ind"];
let myTeam=team.join('');
console.log(myTeam)

//slice
let cricket=["dhoni","rohit","virat",7,45,18]
let separate=cricket.slice(0,3)
console.log(separate)
console.log(cricket)
