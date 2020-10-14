const numbers = document.querySelector("#numbers");
const startbtn = document.querySelector("#startbtn");
const data_set = [24, 32, 11, 15, 62, 3, 9, 13, 22, 5, 10, 36, 60, 54]

const init = () => {
    data_set.forEach((ele) => {
        const p = document.createElement("p");
        p.textContent = ele;
        numbers.appendChild(p);
    })
};

let cnt = 1

const quickSort = (start, end) => {
    console.log(cnt)
    if (start >= end) {
        if (start == end) {
            let p = document.querySelectorAll("p");
            const pivotP = p[start];
            pivotP.classList.toggle("pivot");
            setTimeout(() => pivotP.classList.toggle("pivot"), 980)
        }
    } else if (data_set.length == start) {} else {
        let p = document.querySelectorAll("p");
        let i = start + 1;
        let j = end;
        const pivotP = p[start];
        pivotP.classList.toggle("pivot");
        const pivotN = Number(p[start].textContent)
        for (let a = start + 1; a <= end; a++) {
            p[a].classList.toggle("selected")
        }
        while (i < j) {
            if (Number(p[i].textContent) < pivotN || Number(p[j].textContent) > pivotN) {
                if (Number(p[i].textContent) < pivotN) {
                    i += 1
                }
                if (Number(p[j].textContent) > pivotN) {
                    j -= 1
                }
            } else {
                let temp = p[i].textContent;
                p[i].textContent = p[j].textContent
                p[j].textContent = temp
                p = document.querySelectorAll("p");
            }
        }
        if (i == start + 1 && pivotN < Number(p[j].textContent)) {
            setTimeout(() => {
                p[start].classList.remove("pivot");
                for (let a = start + 1; a <= end; a++) {
                    p[a].classList.toggle("selected")
                }
            }, 980)
        } else {
            setTimeout(() => {
                p[i].classList.add("swap")
                p[start].classList.add("swap")
                p[i].classList.add("pivot")
                p[start].classList.remove("pivot")
                p[start].classList.add("selected")
                let temp = p[i].textContent;
                p[i].textContent = p[start].textContent
                p[start].textContent = temp
            }, 450)
            setTimeout(() => {
                p[i].classList.remove("swap");
                p[start].classList.remove("swap");
                p[i].classList.remove("pivot")
                for (let a = start; a <= end; a++) {
                    p[a].classList.remove("selected")
                }
            }, 980)
        }
        cnt += 1
        setTimeout(() => {
            quickSort(start, i - 1)
                //cnt += 1
            setTimeout(() => quickSort(i, end), 1000)
        }, cnt * 1000)
    }
};

init();
startbtn.addEventListener("click", () => {
    startbtn.style.display = "none";
    quickSort(0, data_set.length - 1);
});