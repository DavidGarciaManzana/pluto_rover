let x = 0
let y = 0
let roverPosition = [x, y]
let roverDirection = "N"
let F = 1
let B = 1
let L = "Left"
let R = "Right"

let N = true
let S = true
let E = true
let W = true

//-----------------------------------------MOVE ROVER

// console.log("before moving",roverPosition)
let moveRover = (direction, move) => {
    if (direction === "N") {
        if (move === "F") {
            return roverPosition[1] += F
        }
        if (move === "B") {
            return roverPosition[1] -= B
        }
    }
    if (direction === "S") {
        if (move === "F") {
            return roverPosition[1] -= F
        }
        if (move === "B") {
            return roverPosition[1] += B
        }
    }
    if (direction === "E") {
        if (move === "F") {
            return roverPosition[0] += F
        }
        if (move === "B") {
            return roverPosition[0] -= B
        }
    }
    if (direction === "W") {
        if (move === "F") {
            return roverPosition[0] -= F
        }
        if (move === "B") {
            return roverPosition[0] += B
        }
    }

    return roverPosition = []
}
// moveRover(N, F)
// console.log("after moving",roverPosition)

// -------------------------------------------ROTATE ROVER

let rotateRover = (actualDirection = "N", rotateDirection = R) => {
    if (actualDirection === "N") {
        if (rotateDirection === R) {
            return roverDirection = "E"
        }
        if (rotateDirection === L) {
            return roverDirection = "O"
        }
    }
    if (actualDirection === "E") {
        if (rotateDirection === R) {
            return roverDirection = "S"
        }
        if (rotateDirection === L) {
            return roverDirection = "N"
        }
    }
    if (actualDirection === "S") {
        if (rotateDirection === R) {
            return roverDirection = "W"
        }
        if (rotateDirection === L) {
            return roverDirection = "E"
        }
    }
    if (actualDirection === "W") {
        if (rotateDirection === R) {
            return roverDirection = "N"
        }
        if (rotateDirection === L) {
            return roverDirection = "S"
        }
    }

}

// rotateRover(roverDirection, R)
// console.log(roverDirection)

rotateRover(roverDirection, R)
console.log("dir", roverDirection)
console.log("pos", roverPosition)
moveRover("E", "F")
console.log("dir", roverDirection)
console.log("pos", roverPosition)