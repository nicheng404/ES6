
// 数组解构赋值
let [a,b,c] = [1,2,3];
console.log(a);


// 多余的抛弃 
let [d,e]=[4,5,6]
console.log(e)

// 对应结构位置赋值, 且数组内结构不同
let[f,g] = [1,[2,3]]
console.log(g)

// 解构赋值过程中的默认值用法，这种写法在日常业务开发过程中很常见
let [userName, age, address='Canberra'] = ['a','19','Australia']
console.log(userName);
console.log(age);
console.log(address);

// Change the value of a,b
let [x, y] =[1, 2];
[y,x]=[x,y];
console.log(x,y);

// The return value of function()
function getData(){
    return [1,2]
}

let [x1,y1]=getData()
console.log(x1,y1)

// Object destructure envalue
let {adrs, ages, user} ={
    user:'dm',
    ages: 20,
    adrs: 'Gungahlin'
}
console.log({user, ages, adrs})

// alas of Object Key
let {job:myJob, year:workYear}={
    job:'Programmer',
    year:'3'
}
console.log(myJob)

// String destructure envalue
let [char1,char2] = "hello world"
console.log(char1, char2)

