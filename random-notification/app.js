const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

const msg = [
    "Good morning",
    "Hello World",
    "Good evening",
    "Good night",
    "Have a good day",
    "Meng Moua"
]

btn.addEventListener('click', () => createNotification());

function createNotification() {
    const notificationEl = document.createElement("div");
    notificationEl.classList.add("notification");
    notificationEl.innerText = randomMsg();
    container.appendChild(notificationEl);
    setTimeout(() => {
        notificationEl.remove();
    }, 3000)
}

function randomMsg() {
    return msg[Math.floor(Math.random()*msg.length)];
}

// console.log(randomMsg());