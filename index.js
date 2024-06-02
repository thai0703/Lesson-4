// // import {sum} from './math.js'
// // import {sum as mathSum} from './math.js'
// // import mathSum from './math.js'
// // arrow function

// // const sayHi = (x) => {
// //     let a = 2
// //     let b = 9
// //     return a*x + b
// // }

// // khi suy ra (=>) là một giá trị hoặc các logic trả về giá trị, thì tương đương phép return thông thường
// // const sayHi = (x) => 2*x +3;

// // Nếu là object thì phải bọc object trong ()
// // const sayHi = (x) => ({name: "mindx"})

// // template literal
// // const user = 'MindX';
// // const text = `Hello ${user}`
// // console.log(text)

// // const Result = mathSum(1, 2)
// // console.log(Result)

// // const listNum = [1, 2, 3]
// // console.log(...listNum)

// // bài 1

// // const square = (x) => {
// //     return x*x;
// // }


// const square = x => x*x

// // const square = (x) => x*x
// console.log(square(4))

// // Bài 2

// const checkInclude = (text, word) =>{
//     text = text.toLowerCase();
//     word = word.toLowerCase();
//     let find = text.includes(word)
//     // if (find == -1) {
//     //     return false
//     // }
//     // else {
//     //     return true
//     // }
//     return find
// }
// console.log(checkInclude('hello world', 'HelLo'))

// // Bài 3



// let arr = ['one', 'two', 'three'];

// const addNum = (arr, pre) => {
//     let result = []
//     for (let i = 0; i<arr.length; i++){
//         result.push(`${pre}: ` + arr[i])
//     }
//     return (result)
// }
// console.log(addNum(arr, 'number'))

// // Bài 4

// let arr1 = [1, 2, 3, 4]

// // const dbl = (arr) => {
// //     let result = []
// //     for (let i = 0; i<arr.length; i++){
// //         result.push(arr[i]*2)
// //     }
// //     return (result)
// // }
// // console.log(dbl(arr1))

// const dbl = arr1.map((item) => {
//     return item*2
// })
// console.log(dbl)
// // Bài 5

// let arr2 = [1, 2, 3, 4, 5, 6, 7]
// // const odd = (arr) => {
// //     let result = []
// //     for (let i = 0; i<arr.length; i++){
// //         if (arr[i] % 2 == 1){
// //         result.push(arr[i])
// //         }
// //     }
// //     return (result)
// // }
// // console.log(odd(arr2))

// const odd = arr2.filter((item) => {
//     return item %2 == 1
// })
// console.log(odd)

// // Bài 6

// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// // const [x, y, z] = employees;

// // const days = (arr) => {
// //     let result = 0;
// //     for (let i = 0; i<arr.length; i++){
// //         result += arr[i].workingDays
// //     }
// //     return (result)
// // }
// // console.log(days(employees))

// const result = employees.reduce((prevValue, item) =>{
//     return{ 
//         workingDays: prevValue.workingDays + item.workingDays}
// }, {
//     workingDays: 0
// })
// console.log(result)
// // console.log(days([x, y, z]))

// // Bài 7

// const employees7 = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// const highSalary = (arr) => {
//     let max = 0;
//     let info = {};
//     for (let i = 0; i<arr.length; i++){
//         max = arr[i].salary;
//         info = arr[i]
//         if (arr[i].salary > max){
//             max = arr[i].salary;
//             info = arr[i]
//         }
//     }
//     return (info)
// }
// console.log(highSalary(employees7))

// // Bài 8
// const employees8 = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// const workDays = (arr) => {
//     let max = employees8[0].workingDays - employees8[0].lateDays;
//     let info = employees8[0];
//     for (let i = 0; i<arr.length; i++){
//         max = employees8[i].workingDays - employees8[i].lateDays;
//         info = employees8[i]
//         if ((employees8[i].workingDays - employees8[i].lateDays) > max){
//             max = employees8[i].workingDays - employees8[i].lateDays;
//             info = employees8[i]
//         }
//     }
//     return (info)
// }
// console.log(workDays(employees8))

//Bài 9

// const employees9 = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const result9 = {};

// // const listName9 = employees9.map((items) => {
// //     return items.name
// // })

// employees9.forEach((item, idx) => {
//     if (!result9[item.name]){
//         result9[item.name] = []
//     }
//     result9[item.name].push(item);
// })
// console.log(result9)

//Bài 10
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// const efficiency = (workingDays, lateDays, salary) => (salary/(workingDays - lateDays))
// let info = {}
// const result = [];
// employees.forEach((item) => {
//     result.push(efficiency(item.workingDays, item.lateDays, item.salary))
// })
// result.forEach((item, idx) =>{
//     let max = result[0];
//     info = employees[0]
//     if (result[item] > max){
//         max = result[item]
//         info = employees[idx]
//     }
//     return info
// })
// console.log(info)

//Bài 11
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const days = [];
// employees.forEach((item) => {
//     days.push(item.workingDays)
// })
// console.log(days)

// const count = {}
// days.forEach((item) => {
//     if (!count[item]){
//         count[item] = 0
//     }
//     if (count[item]){
//         count[item] += 1
//     }
//     else {
//         count[item] = 1
//     }
// })

// console.log(count)

//Bài 12
const employees = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];
const workInfos = []
const newEmployees = []

employees.forEach((item) =>{
    const workInfo = {}
    workInfo.workingDays = item.workingDays
    workInfo.lateDays = item.lateDays
    workInfos.push(workInfo)
    })
employees.forEach((items, idx) => {
    const {id, name, email} = items
    newEmployees[idx] = {id, name, email}
    newEmployees[idx].workInfo = workInfos[idx]
})

console.log(newEmployees)

//Bài 13
// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A

let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

let newTask = ( ten, mota, hoanthanh) => {
    const task = {
        name: ten,
        description: mota,
        completed: hoanthanh,
    }
    tasks.push(task)
}
newTask( "đá bóng", "ghi bàn", true)
console.log(tasks)

let checkTask = (taskName) => {
    const taskIdx = tasks.findIndex(task => task.name === taskName)
    if (taskIdx !== -1){
        tasks[taskIdx].completed = true
    }
    else{
        console.log("Không tìm thấy", taskName)
    }
}
let sortByTaskName = (tasks) => {
    return tasks.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  const sortedTasks = sortByTaskName(tasks);

  const reverseTasks = []

  for (let i = sortedTasks.length - 1; i >= 0; i--) {
    reverseTasks.push(sortedTasks[i]);
  }
  console.log(sortedTasks)
  console.log(reverseTasks)