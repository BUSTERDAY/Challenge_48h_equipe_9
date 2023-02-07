const globalContainer = document.querySelector('.container');
const textContainer = document.querySelector('.text');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const texts = ["Where am I... ", "What am I... ", "Who am I... "];

function printText () {
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        for (let j = 0; j < text.length; j++) {
            const letter = text[j];
            setTimeout(() => {
                textContainer.innerHTML += letter;
            }, 100 + (i * 2000) + (j * 100));
        }   
    }
}


const isHover = e => e.parentElement.querySelector(':hover') === e;    

document.addEventListener('mousemove', function checkHover() {
    const hint1_hovered = isHover(textContainer);
        if(hint1_hovered) {
            hint1 = document.createElement('div');
            hint1.classList.add('hint');
            hint1.innerHTML = "I'm so lost...";
            hint1.style.top = Math.random() * (windowHeight - 100) + 'px';
            hint1.style.left = Math.random() * (windowWidth - 100) + 'px';
            hint1.style.color = '#C2C1C1';
            hint1.style.fontSize = randomTextSize() + 'px';
            globalContainer.appendChild(hint1);
    }

    const hint2_hovered = isHover(hint1);
        if(hint2_hovered) {
            hint2 = document.createElement('div');
            hint2.classList.add('hint');
            hint2.innerHTML = "I'm scared...";
            hint2.style.top = Math.random() * (windowHeight - 100) + 'px';
            hint2.style.left = Math.random() * (windowWidth - 100) + 'px';
            hint2.style.color = '#979797'
            hint2.style.fontSize = randomTextSize() + 'px';
            globalContainer.appendChild(hint2);
    }

    const hint3_hovered = isHover(hint2);
    if(hint3_hovered) {
        hint3 = document.createElement('div');
        hint3.classList.add('hint');
        hint3.innerHTML = "What is happening...";
        hint3.style.top = Math.random() * (windowHeight - 100) + 'px';
        hint3.style.left = Math.random() * (windowWidth - 100) + 'px';
        hint3.style.color = '#6C6C6C'
        hint3.style.fontSize = randomTextSize() + 'px';
        globalContainer.appendChild(hint3);
    }

    const hint4_hovered = isHover(hint3);
    if(hint4_hovered) {
        hint4 = document.createElement('div');
        hint4.classList.add('hint');
        hint4.innerHTML = "Help me...";
        hint4.style.top = Math.random() * (windowHeight - 100) + 'px';
        hint4.style.left = Math.random() * (windowWidth - 100) + 'px';
        hint4.style.color = '#4D4D4D'
        hint4.style.fontSize = randomTextSize() + 'px';
        globalContainer.appendChild(hint4);
    }

    const hint5_hovered = isHover(hint4);
    if(hint5_hovered) {
        hint5 = document.createElement('div');
        hint5.classList.add('hint');
        hint5.innerHTML = "I need a cookie...";
        hint5.style.top = Math.random() * (windowHeight - 100) + 'px';
        hint5.style.left = Math.random() * (windowWidth - 100) + 'px';
        hint5.style.color = '#363636'
        hint5.style.fontSize = randomTextSize() + 'px';
        globalContainer.appendChild(hint5);
    }

    const hint6_hovered = isHover(hint5);
    if(hint6_hovered) {
        hint6 = document.createElement('div');
        hint6.classList.add('hint');
        hint6.innerHTML = "Make me eatACookie(whereIsTheCookie)";
        hint6.style.top = Math.random() * (windowHeight - 100) + 'px';
        hint6.style.left = Math.random() * (windowWidth - 100) + 'px';
        hint6.style.color = '#363636'
        hint6.style.fontSize = randomTextSize() + 'px';
        globalContainer.appendChild(hint6);
    }
});

function eatACookie(cookie="") {
    if (cookie == "") {
        return
    }
    $.ajax({
        type: "POST",
        url: "/whoAmI",
        data: {cookie: cookie},
        success: function(data) {
            returnData(data);
        }
    })
}

function returnData(data="") {
    if (data.match(/\[(.+)\]/)) {
        let link = data.match(/\[(.+)\]/)[1]
        document.querySelector("a").setAttribute("href", link)
        document.querySelector("a").setAttribute("target", "_blank")
        document.querySelector(".text").style.cursor = "pointer"
        data = data.replace(/\[(.+)\]/, "")
    }
    return console.log(data)
}

printText();

function randomTextSize () {
    return Math.floor(Math.random() * (24 - 8) + 8);
}