let home = document.getElementById("homeScore").textContent
let guest = document.getElementById("guestScore").textContent
home = parseInt(home)
guest = parseInt(guest)

function homePlusOne() {
    home += 1
    document.getElementById("homeScore").textContent = home
}

function homePlusTwo() {
    home += 2
    document.getElementById("homeScore").textContent = home
}

function homePlusThree() {
    home += 3
    document.getElementById("homeScore").textContent = home
}

function guestPlusOne() {
    guest += 1
    document.getElementById("guestScore").textContent = guest
}

function guestPlusTwo() {
    guest += 2
    document.getElementById("guestScore").textContent = guest
}

function guestPlusThree() {
    guest += 3
    document.getElementById("guestScore").textContent = guest
}


