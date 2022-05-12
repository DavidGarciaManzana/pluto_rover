let x = 0
let y = 0
let roverPosition = [x, y]
let roverDirection = "N"
let F = 1
let B = -1
let L = "Left"
let R = "Right"

let N = true
let S = true
let E = true
let O = true



// console.log("before moving",roverPosition)
// let moveRover = (direction, move) => {
//     if(direction === N) {
//         if(move === F){
//             return roverPosition[1] += F
//         }
//         if(move === B){
//             return roverPosition[1] += B
//         }
//     }
//
//     return roverPosition = []
// }
// moveRover(N, F)
// console.log("after moving",roverPosition)

let rotateRover = (actualDirection = "N",rotateDirection = R) => {
    if (actualDirection === "N") {
        if (rotateDirection === R) {
            return roverDirection = "E"
        }
        if(rotateDirection === L ){
            return roverDirection = "O"
        }
    }

}

rotateRover(roverDirection,L)
console.log(roverDirection)