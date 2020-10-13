let ds = [24, 32, 11, 15, 62, 3, 9, 13, 22, 5, 10, 12, 49, 35, 1, 4]
let divided_ds = [
    [24],
    [32],
    [11],
    [15],
    [62],
    [3],
    [9],
    [13],
    [22],
    [5],
    [10],
    [12],
    [49],
    [35],
    [1],
    [4]
]
const numbers = document.querySelector("#numbers");
const startbtn = document.querySelector("#startbtn");
const init = () => {
    const d = document.createElement("div");
    d.className = "step_div"
    ds.forEach((ele) => {
        const p = document.createElement("p");
        p.textContent = ele;
        d.appendChild(p);
    })
    numbers.appendChild(d);
};

const merge_in_order = (l1, l2, tdiv) => {
    let tem_set = []
    while ((l1.length != 0) || (l2.length != 0)) {
        if (l1.length == 0) {
            tem_set.push(l2[0])
            l2.shift()
        } else if (l2.length == 0) {
            tem_set.push(l1[0])
            l1.shift()
        } else if (l1[0] >= l2[0]) {
            tem_set.push(l1[0])
            l1.shift()
        } else {
            tem_set.push(l2[0])
            l2.shift()
        }
    };
    p = document.createElement("p");
    let strtemset = String(tem_set[0]);
    for (let j = 1; j < tem_set.length; j++) {
        strtemset += `&nbsp;&nbsp;&nbsp;&nbsp;${tem_set[j]}`
    }
    strtemset = strtemset.trim()
    p.innerHTML = String(strtemset);
    p.style.width = String(45 * (tem_set.length)) + "px"
    tdiv.appendChild(p);
    return tem_set
}

const merge_sort = (ds) => {
    if (ds.length < 2) {
        return ds
    } else {
        let tds = []
        const tddiv = document.createElement("div");
        tddiv.className = "step_div";
        const prevdiv = numbers.lastChild;
        lds = ds.length

        for (let i = 0; i < lds; i += 2) {
            if (lds % 2 == 1 && i == lds - 1) {
                tds.push(ds[-1])
            } else {
                tds.push(merge_in_order(ds[i], ds[i + 1], tddiv))
            }
        }
        numbers.appendChild(tddiv)
        tddiv.classList.toggle("fin")
        setTimeout(() => { merge_sort(tds) }, 1000);
    }
}

init();
startbtn.addEventListener("click", () => {
    startbtn.style.display = "none"
    merge_sort(divided_ds)
});