// const fruits =
//     [{ name: "apple", color: "red", calories: "20", },
//     { name: "orange", color: "yellow", calories: "40" },
//     { name: "grapes", color: "purple", calories: "80" }
//     ]


// "push" add to the final
// fruits.push({name:"banan",color:"yellow",calories:"90",})
// console.log(fruits[3])

// "pop" delete the final index
// fruits.pop()
// console.log(fruits[1])

//" splice" delete from index 1 to 2
// fruits.splice(1,2)
// console.log(fruits)


// "forEach"

// fruits.forEach(fruit => {
//  console.log(fruit.color)
// })


//map create a new array with some callback that contains some logic

// const fruitsName=fruits.map(fruit=>fruit.color)
// console.log(fruitsName)  


//filter , return new array

// const yellowFruits=fruits.filter(fruit=>fruit.color==="yellow")
// const caloriesFruits=fruits.filter(fruit=>fruit.calories<=30)
// console.log(yellowFruits)
// console.log(caloriesFruits)

//reduce method  return singe value in this case is  object 

// const maxFruts = fruits.reduce((max, fruit) =>
//     fruit.calories > max.calories ?
//         fruit : max)

// console.log(maxFruts)



//sort() 

let fruits=["zizo","apple","orange","banana "]
fruits.sort();
console.log(fruits)

const people =
    [{ name: "apple", color: "red", age: 23, },
    { name: "orange", color: "yellow", age: 3 },
    { name: "grapes", color: "purple", age: 44 }
    ]


let numero=[9,25,92,3]
numero.sort((a,b)=>a-b);
console.log(numero)

people.sort((a,b)=>a.age-b.age);
console.log(people)