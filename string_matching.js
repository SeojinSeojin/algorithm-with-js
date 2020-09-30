const index_cnt = document.querySelector("#index_cnt");
const little_prince_div = document.querySelector("#little_prince");
const process = document.querySelector("#process");
let little_prince_text = little_prince_div.innerHTML;

const match_text = "어린 왕자";

const string_matching = () => {
    let textlen = little_prince_text.length;
    const wordlen = match_text.length;
    let matchCnt = 0;
    let prev = true;
    const delaySec = 20;
    for (let i = 0; i < textlen - wordlen; i++) {
        (function(ii) {
            setTimeout(() => {
                if (match_text === little_prince_text.substring(i, i + wordlen)) {
                    if (prev) {
                        index_cnt.style.backgroundColor = "#fbb6ce";
                        matchCnt += 1;
                        index_cnt.innerText = matchCnt;
                        let newHTML =
                            little_prince_text.substring(0, i) +
                            "<span>" +
                            little_prince_text.substring(i, i + wordlen) +
                            "</span>" +
                            little_prince_text.substring(i + wordlen, textlen);
                        little_prince_div.innerHTML = newHTML;
                        little_prince_text = little_prince_div.innerHTML;
                        textlen = little_prince_text.length;
                        prev = false;
                        const spans = document.querySelectorAll("span");
                        const lastspan = spans[spans.length - 1];
                        const Rect = lastspan.getBoundingClientRect();
                        console.log(Rect);
                        const relTop = Rect.top;
                        const scrolledTopLen = window.pageYOffset;
                        const y = scrolledTopLen + relTop;
                        window.scrollTo({ top: y - 40, left: 0, behavior: "smooth" });
                    } else {
                        prev = true;
                        index_cnt.style.backgroundColor = "#d53f8c";
                    }
                }
            }, i * delaySec);
        })(i);
    }
};

index_cnt.addEventListener("click", () => {
    index_cnt.style.cursor = "default";
    index_cnt.innerText = "0";
    string_matching();
});