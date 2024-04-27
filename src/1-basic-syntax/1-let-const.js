// 1. let 不允许同名变量再次声明
let userName = 'My Name';
console.log(userName);
// let userName ='another Name'

// 作用域, 不违法语法, 但是违反开发者直觉. 但是let后调用不到
{
    let age=18;
}

// console.log(age);

// const 常量声明赋值之后不可改, 但是如果是复杂的, 里面的内容可改
const PT=3.14
// PT=3.1

// 但是如果是复杂的, 里面的内容可改
const userInfo = {
userName:'大漠',
age:18,
address:'北京市朝阳区朝阳公园'
};

userInfo.userName = 'Damoqiongqiu';
console.log(userInfo);

