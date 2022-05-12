let roverPosition = [0, 0]
let roverDirection = "N"

let F = 1
let B = 1
let L = "Left"
let R = "Right"

let N = "N"
let S = "S"
let E = "E"
let W = "W"



//---------------------------------------PLUTO IS A SPHERE

let plutoIsASphere = (position) => {
    if (position[0] === -1) {
        roverPosition[0] = 100
    }
    if (position[1] === -1) {
        roverPosition[1] = 100
    }
    if (position[0] === 101) {
        roverPosition[0] = 0
    }
    if (position[1] === 101) {
        roverPosition[1] = 0
    }
}

//-----------------------------------------DETECTING OBSTACLES

let IsThereAnAlienHere = (alien) => {
    if (alien) {
        console.log("%cHelp!, there is an Alien here and its trying to eat me!","font-size:30px;color:red")
        throw roverPosition;
    }
}

//-----------------------------------------MOVE ROVER


let moveRover = (direction, move, alien = false) => {
    if (direction === "N") {
        if (move === "F") {
            IsThereAnAlienHere(alien)
            roverPosition[1] += F
            plutoIsASphere(roverPosition)
            return roverPosition
        }
        if (move === "B") {
            IsThereAnAlienHere(alien)
            roverPosition[1] -= B
            plutoIsASphere(roverPosition)
            return roverPosition
        }
    }
    if (direction === "S") {
        if (move === "F") {
            IsThereAnAlienHere(alien)
            roverPosition[1] -= F
            plutoIsASphere(roverPosition)
            return roverPosition
        }
        if (move === "B") {
            IsThereAnAlienHere(alien)
            roverPosition[1] += B
            plutoIsASphere(roverPosition)
            return roverPosition
        }
    }
    if (direction === "E") {
        if (move === "F") {
            IsThereAnAlienHere(alien)
            roverPosition[0] += F
            plutoIsASphere(roverPosition)
            return roverPosition
        }
        if (move === "B") {
            IsThereAnAlienHere(alien)
            roverPosition[0] -= B
            plutoIsASphere(roverPosition)
            return roverPosition
        }
    }
    if (direction === "W") {
        if (move === "F") {
            IsThereAnAlienHere(alien)
            roverPosition[0] -= F
            plutoIsASphere(roverPosition)
            return roverPosition
        }
        if (move === "B") {
            IsThereAnAlienHere(alien)
            roverPosition[0] += B
            plutoIsASphere(roverPosition)
            return roverPosition
        }
    }
}


// -------------------------------------------ROTATE ROVER

let rotateRover = (actualDirection = "N", rotateDirection = R) => {
    if (actualDirection === "N") {
        if (rotateDirection === R) {
            return roverDirection = "E"
        }
        if (rotateDirection === L) {
            return roverDirection = "W"
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

//------------------------------------------------TESTING

rotateRover(roverDirection, R)
rotateRover(roverDirection, R)
console.log("dir", roverDirection)
console.log("pos", roverPosition)
moveRover(roverDirection.toString(), "F")
moveRover(roverDirection.toString(), "F")
rotateRover(roverDirection, L)
rotateRover(roverDirection, L)
moveRover(roverDirection.toString(), "F")
rotateRover(roverDirection, R)
moveRover(roverDirection.toString(), "F", true)
// moveRover(roverDirection.toString(), "B")
console.log("dir", roverDirection)
console.log("pos", roverPosition)