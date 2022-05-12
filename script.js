let x = 0
let y = 0
let roverPosition = [x, y]
let roverDirection = "N"
let F = 1
let B = -1
let N = true

console.log("before moving",roverPosition)
let moveRover = (direction, move) => {
    if(direction === N) {
        if(move === F){
            return roverPosition[1] += F
        }
        if(move === B){
            return roverPosition[1] += B
        }
    }
    return roverPosition = []
}
moveRover(N, B)
console.log("after moving",roverPosition)