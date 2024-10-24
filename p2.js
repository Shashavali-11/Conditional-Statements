//  Create an Array and fetch the data 

var arr = ['Shasha', 'Mohan', 'Ravi', 'Giri']
var a = arr.toString()
var b = a.split(",")
console.log(b)
// for(i in arr){
//     if(i == 0){
//         console.log(` ${i} : ${b[0].toUpperCase()}`)
//     }
//     else if(i == 1){
//         console.log(` ${i} : ${b[1].toUpperCase()}`)
//     }else if(i == 2){
//         console.log(` ${i} : ${b[2].toUpperCase()}`)
//     }else if(i == 3){
//         console.log(` ${i} : ${b[3].toUpperCase()}`)
//     }
//     else{
//         console.log("Nothing to Display........?")
//     }
// }

for(i of arr){
    if(i == 'Shasha'){
        console.log(` ${i} : ${b[0].toUpperCase()}`)
    }else if(i == 'mohan'){
        console.log(` ${i} : ${b[1].toUpperCase()}`)
    }else if(i == 'Ravi'){
        console.log(` ${i} : ${b[2].toUpperCase()}`)
    }else if(i == 'Giri'){
        console.log(` ${i} : ${b[3].toUpperCase()}`)
    }else{
        console.log("Nothing to Display........?")
    }
}


