console.log(window.innerHeight, window.innerWidth)

function getBoundaries() {
    return {height: window.innerHeight + 25, width: window.innerWidth+25}
}
let boundaries = getBoundaries()

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    }

function getRandomCoordinates() {
    return {x: getRandomArbitrary(-50, boundaries.width), y: getRandomArbitrary(-50, boundaries.height)}
}

for (let i= 0; i < 10; i++) {
    console.log(getRandomCoordinates())
}

var currentKermit = 1;
function generateAnswer(number=currentKermit) {
    if (number > 30) {
        return
    }
    if (currentKermit == 10) {
        alert("Ils sont mignons hein ? Vous êtes sûrs que c'est ici ?")
    }

    for (let i = 0; i < number; i++) {
        coordinates = getRandomCoordinates()
        div = document.createElement("div")
        div.classList.add("other",  "absolute")
        div.setAttribute("onclick", "generateAnswer()")
        div.style.top = `${coordinates.y}px`
        div.style.left = `${coordinates.x}px`
        document.querySelector(".container").appendChild(div)
        
    }
    currentKermit++

    if (currentKermit == 31) {
        displayBipBoup()
    }
}

function displayBipBoup() {
    div = document.createElement("div")
    div.classList.add("captcha-container")
    div.setAttribute("onclick", "robotPosition()")
    div.innerHTML = `
    <label class="cb-container">
        <input id="cb" type="checkbox" disabled>
        <span class="checkmark"></span>
    </label>
    <label for="cb">Je suis un robot</label>
    <div class="captcha-logo"><img src="assets/img/captcha.png" alt="">`
    document.querySelector(".container").appendChild(div)

}

function displayBipBoup() {
    div = document.createElement("div")
    div.classList.add("captcha-container")
    div.setAttribute("onclick", "robotPosition()")
    div.innerHTML = `
    <label class="cb-container">
        <input id="cb" type="checkbox" disabled>
        <span class="checkmark"></span>
    </label>
    <label for="cb">Je suis un robot</label>
    <div class="captcha-logo"><img src="assets/img/captcha.png" alt="">`
    document.querySelector(".container").appendChild(div)

}

var robotPositionId = 0
function robotPosition() {
    if (robotPositionId > 4) {
        return
    }
    captchaContainer = document.querySelector(".captcha-container")
    console.log(robotPositionId)
    switch (robotPositionId) {
        case 0:
            console.log(captchaContainer)
            captchaContainer.style.top = `${0 + 15}px`
            captchaContainer.style.left = `${window.innerWidth - 15 - 300}px`
            break
        case 1:
            captchaContainer.style.top = `${window.innerHeight - 15 - 80}px`
            captchaContainer.style.left = `${0 + 15}px`
            break
        case 2:
            captchaContainer.style.top = `${window.innerHeight - 15 - 80}px`
            captchaContainer.style.left = `${window.innerWidth - 15 - 300}px`
            break
        case 3:
            captchaContainer.style.position = "relative"
            captchaContainer.style.top = `initial`
            captchaContainer.style.left = `initial`
            document.getElementById("cb").disabled = false;
            document.getElementById("cb").addEventListener("change", function(){
                captchaContainer.remove()
                div = document.createElement("div")
                div.classList.add("answer-form")
                div.innerHTML = `
                <img src="assets/img/bots.jpg" alt="">
                <form action="">
                    Un robot ?? Prouve-le !
                    <input name="answer" type="text">
                    <span id="error" style="font-size:14px; color: red; opacity:0">Raté...</span>
                    <input type="submit">
                </form>`
                document.querySelector(".container").appendChild(div)
                document.querySelector("form").addEventListener("submit", function(e) {
                    e.preventDefault()
                    if (e.currentTarget["answer"].value != null) {
                        $.ajax({
                            type: "POST",
                            url: "/kermit",
                            data: { "answer": e.currentTarget["answer"].value },
                            success: function(data) {
                                if (data != "") {
                                    window.location.href = data
                                } else {
                                    document.getElementById("error").style.opacity = 1;
                                }
                            }
                        })
                    }
                })
            })
            break
    }
    document.getElementById("cb").checked = false
    robotPositionId++
}