
let count = document.querySelectorAll(".counter")

let increment = 0

let updateCounter = () => {

    increment += 1

    if (increment <= 1200) {
        count[0].innerHTML = increment
    }
    if (increment <= 500) {
        count[1].innerHTML = increment
    }
    if (increment <= 800) {
        count[2].innerHTML = increment
    }
}

let interval = () => {
    for (let index = 0; index < 1; index++) {
        setInterval(() => updateCounter(), 1);
    }
}

interval()

