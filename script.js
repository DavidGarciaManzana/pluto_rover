let x = 0
let y = 0
let roverPosition = [x, y]
let roverDirection = "N"
let F = 1
let B = -1
let N = true

console.log(roverPosition)
let moveRover = (direction, move) => {
    if(N) {
        if(F){
            return roverPosition[1] += F
        }
    }
    return roverPosition = []
}
moveRover(N, F)
console.log(roverPosition)