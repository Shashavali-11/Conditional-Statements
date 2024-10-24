// Create Objects and fetch the data from objects


var obj = [
    {
    id: 1,
    userId: 1,
    date: "2020-03-02T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 4 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 6 },
    ],
    _v: 0,
  },
  {
    id: 2,
    userId: 1,
    date: "2020-01-02T00:00:00.000Z",
    products: [
      { productId: 2, quantity: 4 },
      { productId: 1, quantity: 10 },
      { productId: 5, quantity: 2 },
    ],
    _v: 0,
  }
]

// To print 1st object 
var a = Object.values(obj)[0]
console.log(a)


// To print only id's of two objects
for(let item of obj){
    console.log(item.id)
}

//Another way To print only id's of two objects
obj.forEach(item => {
    console.log(item.id)
})


// To Print id-1 Products all
for(value in obj){
    if(value == 0 ){
        console.log(obj[value].products)
    }
}





// var obj = {
//     name:'Shasha',
//     age: 'Hari',
//     gender:'Male'
// }
// let a = Object.values(obj);
// console.log(a)

// let a1 = a.join(",").toUpperCase()
// console.log(a1)


