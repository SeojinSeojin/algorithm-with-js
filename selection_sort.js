const numbers = document.querySelector("#numbers");
const startbtn = document.querySelector("#startbtn");
const nRange = 8000;
const nNumb = 200;

const init = () => {
    for (let i = 0; i < nNumb; i++) {
        const p = document.createElement("p");
        const n = Math.ceil(Math.random() * nRange);
        p.textContent = n;
        numbers.appendChild(p);
    }
};

const delaySec = 1600;

const selectionSort = () => {
    const p = document.querySelectorAll("p");
    for (let i = 0; i < nNumb; i++) {
        (function(ii) {
            setTimeout(() => {
                let min = nRange + 1;
                let minIndex = -1;
                for (let j = i; j < nNumb; j++) {
                    if (Number(p[j].innerText) < min) {
                        min = Number(p[j].innerText);
                        minIndex = j;
                    }
                }
                p[i].style.backgroundColor = "#f6ad55";
                p[minIndex].style.backgroundColor = "#f6ad55";
                setTimeout(() => {
                    let temp = Number(p[i].innerText);
                    p[i].innerText = Number(p[minIndex].innerText);
                    p[minIndex].innerText = temp;
                    setTimeout(() => {
                        p[i].style.backgroundColor = "white";
                        p[minIndex].style.backgroundColor = "white";
                    }, 700);
                }, 700);
            }, ii * delaySec);
        })(i);
    }
};

init();
startbtn.addEventListener("click", () => {
    startbtn.style.display = "none";
    selectionSort();
});