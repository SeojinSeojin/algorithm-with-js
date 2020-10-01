const numbers = document.querySelector("#numbers");
const startbtn = document.querySelector("#startbtn");
const nRange = 8000;
const nNumb = 150;

const init = () => {
    for (let i = 0; i < nNumb; i++) {
        const p = document.createElement("p");
        const n = Math.ceil(Math.random() * nRange);
        p.textContent = n;
        numbers.appendChild(p);
    }
};

const delaySec = 700;

const bubbleSort = () => {
    const p = document.querySelectorAll("p");
    for (let i = 0; i < nNumb - 1; i++) {
        (function(ii) {
            setTimeout(() => {
                for (let j = 0; j < nNumb - i - 1; j++) {
                    (function(jj) {
                        setTimeout(() => {
                            console.log(`i : ${i} j : ${j}`);
                            p[j].classList.toggle("compare");
                            p[j + 1].classList.toggle("compare");
                            setTimeout(() => {
                                if (Number(p[j].innerText) > Number(p[j + 1].innerText)) {
                                    let temp = Number(p[j].innerText);
                                    p[j].innerText = Number(p[j + 1].innerText);
                                    p[j + 1].innerText = temp;
                                    p[j].classList.toggle("selected");
                                    p[j + 1].classList.toggle("selected");
                                    setTimeout(() => {
                                        p[j].classList.toggle("selected");
                                        p[j + 1].classList.toggle("selected");
                                    }, 200);
                                }
                                p[j].classList.toggle("compare");
                                p[j + 1].classList.toggle("compare");
                                if (j === nNumb - i - 2) {
                                    p[j + 1].classList.toggle("fin");
                                    if (i === nNumb - 2) {
                                        p[j].classList.toggle("fin");
                                    }
                                }
                            }, 300);
                        }, jj * 300);
                    })(j);
                }
            }, 330 * (ii * (nNumb - 2) - (ii * (ii - 1)) / 2));
        })(i);
    }
};

init();
startbtn.addEventListener("click", () => {
    startbtn.style.display = "none";
    bubbleSort();
});