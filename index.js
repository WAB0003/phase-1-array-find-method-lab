// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

//create a function to handle the entire array using the find method
// function superbowlWin(array){
//     const found = array.find(result);
//     if (found){
//         return found.year
//     }
// }

// //create a function to handle each object within the array
// function result(object) {
//     return object.result === "W"
        
//     } 

// console.log(superbowlWin(record))

function superbowlWin(array) {
    const found = array.find(result)
    console.log (found.year)
    return found.year
}

const result = (object) => {
    return object.result === "W"
}

console.log(superbowlWin(record))