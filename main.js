let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Wyczyść";
    btn.style.fontSize = "10px";
    btnReset.style.fontSize = "10px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element numer ${orderElement++}`;
        li.style.fontSize = `${size}px`
        document.querySelector('ul').appendChild(li);
        size++;
    }
}

const cleanList = function () {
    document.querySelector("ul").textContent = "";
    size = 10;
    orderElement = 1;
}

init()