let nCount = 100000;

// 0으로 초기화된 배열 선언
let fivoArr = Array.from({ length: nCount }, () => -1);
fivoArr[0] = 0;
fivoArr[1] = 1;

function fivo(n) {
    if (fivoArr[n] !== -1) {
        return fivoArr[n]
    } else {
        fivoArr[n] = fivo(n - 1) + fivo(n - 1);
        return fivoArr[n];
    }
}

console.log(fivo(10000));