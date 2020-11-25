const sentenceArray = [`Since a politician never believes what he says, he is surprised when others believe him. - Charles de Gaulle`,
    `Democracy is the recurrent suspicion that more than half of the people are right more than half of the time.`,
    `A sudden, bold, and unexpected question doth many times surprise a man and lay him open. - Francis Bacon`,
    `There are two ways of spreading light: to be the candle or the mirror that reflects it. Understanding is joyous.`,
    `My own art is a negation of society, an affirmation of the individual, outside all rules and demands of society.`,
    `We hold these truths to be self-evident, that all men and women are created equal. - Elizabeth Cady Stanton`,
    `No human being can really understand another, and no one can arrange another's happiness. - Graham Greene`,
    `One man who has a mind and knows it can always beat ten men who haven't and don't. - George Bernard Shaw`,
    `We have no more right to consume happiness without producing it than to consume wealth without producing it.`,
    `He knows nothing; he thinks he knows everything - that clearly points to a political career. - George Bernard Shaw`,
    `Children and dogs are as necessary to the welfare of this country as Wall Street and the railroads. - Harry S. Truman`,
    `If you knew how cowardly your enemy is, you would slap him. Bravery is knowledge of the cowardice in the enemy.`,
    `You will kill 10 of our men, and we will kill one of yours, and in the end it will be you who tires of it. - Ho Chi Minh`,
    `It is not the employer who pays wages - he only handles the money. It is the product that pays wages. - Henry Ford`,
    `Like all great travellers, I have seen more than I remember, and remember more than I have seen. - Benjamin Disraeli`,
    `America is a large, friendly dog in a very small room. Every time it wags its tail it knocks over a chair. - Arnold Toynbee`,
    `Truly it is an evil to be full of faults but it is a still greater evil to be full of them, and to be unwilling to recognize them.`,
    `Love does not consist in gazing at each other, but in looking together in the same direction. - Antoine de Saint-Exupery`,
    `Man is born to live, not to prepare for life. Life itself, the phenomenon of life, the gift of life,is so breathtakingly serious!`,
    `When she finally stopped conforming to the conventional picture of femininity she finally began to enjoy being a woman.`,
    `The computer is only a fast idiot; it has no imagination; it cannot originate action. It is, and will remain, only a tool of man.`,
    `Hear that lonesome whippoorwill? He sounds too blue to fly. The midnight train is whining low, I'm so lonesome I could cry.`,
    `New opinions are always suspected, and usually opposed, without any other reason but because they are not already common.`,
    `If a man will begin with certainties, he shall end in doubt; but if he will be content to begin with doubts he shall end in certainties.`,
    `Education has produced a vast population able to read but unable to distinguish what is worth reading. - George Macauley Trevelyan`,
    `To be capable of steady friendship or lasting love, are the two greatest proofs, not only of goodness of heart, but of strength of mind.`,
    `The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes.`,
    `A great writer is, so to speak, a second government in his country. And for that reason no regime has ever loved great writers, only minor ones.`,
    `I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish.`,
    `Betty bought some butter, but the butter was bitter, so Betty bought some better butter to make the bitter butter better.`,
    `He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.`,
    `“Surely Sylvia swims!” shrieked Sammy surprised. “Someone should show Sylvia some strokes so she shall not sink.”`,
    `If you must cross a course cross cow across a crowded cow crossing, cross the cross coarse cow across the crowded cow crossing carefully.`,
    `Send toast to ten tense stout saints’ ten tall tents. Rory the warrior and Roger the worrier were reared wrongly in a rural brewery.`,
    `Chiquitita, tell me what's wrong. You're enchained by your own sorrow. In your eyes there is no hope for tomorrow.`,
    `I have a dream, a song to sing. To help me cope with anything. If you see the wonder of a fairy tale. You can take the future even if you fail.`,
    `I'll have you want me more and more. And finally it seems my lonely days are through. I've been waiting for you.`,
    `Super trouper beams are gonna blind me. But I won't feel blue like I always do. 'Cause somewhere in the crowd there's you.`,
    `I was born to love you with every single beat of my heart. Yes, I was born to take care of you every single day of my life.`,
    `I don't know what this is, but you got me good. Just like you knew you would. I don't know what you do, but you do it well.`,
    `Stars, in your multitudes. Scarce to be counted filling the darkness with order and light. You are the sentinels, silent and sure. `,
    `If you want to know all about Andy Warhol, just look at the surface of my paintings and films and me, and there I am.`,
    `The fact that a believer is happier than a skeptic is no more to the point than the fact that a drunken man is happier than a sober one.`,
    `If, for example, you come at four o'clock in the afternoon, then at three o'clock I shall begin to be happy. - Le Petit Prince`,
    `The only way to really know it's mistake is to make the mistake and look back and say "Yep, that was a mistake." `,
    `Sometimes, even when you know something is a mistake, you gotta make it anyway. Even really dumb mistakes. - HIMYM`,
    `So many things go wrong in life, but this is the one thing that never will. It will always, always be pure, unadulterated awesome.`,
    `The great moments of your life won't necessarily be the things you do. They'll also be the things that happen to you.`,
    `You see, everyone's got some baggage, it's part of life. But like anything else, it's easier when someone gives you a hand with it.`,
    `Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Albus Dumbledore`,
    `If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals. - Sirius Black`,
    `We've all got both light and darkness inside us. What matters is the part we choose to act on. That's who we really are.`,
    `You can never replace anyone because everyone is made up of such beautiful specific details. - Celine, Before Sunset.`,
    `I could die right now, I'm just happy. I've never felt that before. I'm just exactly what I've wanted to be. - Eternal Sunshine`,
    `We are all travelling through time together, everyday of our lives. All we can do is our best to relish this remarkable ride.`,
    `You have to use it for things that you really think will make your life the way you want it to be. - About Time`,
    `The hearts wants what it wants. There's no logic to those things. You meet someone and you fall in love and that's that.`,
    `The scariest thing about distance is that you don't know whether they'll miss you or forget you. - The Notebook`,
    `I may have come close but I never had what you two had. Something always held me back or stood in the way.`,
    `Even though death took away yout sweet breath. It could not take away your beauty. - Romeo and Juliet, Shakespeare`,
    `All grown-ups were once children... but only few of them remember it. - Antoine de Saint-Exupéry, The Little Prince`,
    `There ain’t no way you can hold on to something that wants to go, you understand? You can only love what you got while you got it.`,
    `I think the preacher thinks about my mama all the time, too. He’s still in love with her... But he doesn’t tell me that.`,
    `Thank you most of all for friends. We appreciate the complicated and wonderful gifts you give us in each other.`,
    `Mama was crying, and the rain made it seem as if the whole world was crying. - Lois Lowry, Number the Stars`,
    `The whole world had changed. Only the fairy tales remained the same. And they lived happily ever after.`,
    `Mommy was happy before Kevin came along. Now she wakes up every morning and wishes she was in France!`,
    `You must be filled with expectancy. You must be awash in hope. You must wonder who will love you, whom you will love next.`,
    `Open your heart. Someone will come. Someone will come for you. But first you must open your heart.`,
    `I have been loved, Edward told the stars. So? said the stars. What difference does that make when you are all alone now?`,
    `It is a horrible, terrible thing, the worst thing, to watch somebody you love die right in front of you and not be able to do nothing about it.`,
    `You are down there alone, the stars seemed to say to him. And we are up here, in our constellations, together.`,
    `It was a singular sensation to be held so gently and yet so fiercely, to be stared down at with so much love.`,
    `We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.`,
    `Becoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.`,
    `You think my first instinct is to protect you. Because you're small, or a girl, or a Stiff. But you're wrong.`,
    `Then I realize what it is. It's him. Something about him makes me feel like I am about to fall. Or turn to liquid. Or burst into flames.`,
    `Sometimes it is nothing more than gritting your teeth through pain, and the work of every day, the slow walk toward a better life.`,
    `I feel like someone breathed new air into my lungs. I am not Abnegation. I am not Dauntless.`,
    `It reminds me why I chose Dauntless in the first place: not because they are perfect, but because they are alive. Because they are free.`,
    `No matter how long you train someone to be brave, you never know if they are or not until something real happens.`,
    `People say they love you. But what they mean is they love how loving you makes them feel about themselves.`,
    `There is no point. Or, at least, big picture, we don't get to know what it is. Why we live... , why Megan lost the baby...`,
    `I can't reassure you. This idea you have, that there's a way to be safe, it's childish and cowardly.`,
    `It stops you from experiencing anything, including anything good. You know how. Stop waiting for life to be easy.`,
    `As we stood there, I realized that all these years we'd never really talked. But that day we started.`,
    `Flat, glossy, iridescent? What the hell does that mean? Juli Baker has always seem plain to me. Until now.`
]
let results = []
const answerInput = document.querySelector("#answerInput");
const clockDiv = document.querySelector("#clock")
const resultDiv = document.querySelector("#resultDiv")
const refreshResults = () => {
    results.sort((a, b) => b[0] - a[0]);
    let inner = ""
    for (let u = 0; u < results.length; u++) {
        inner += `<div class="result-div">${u+1}위| ${results[u][1]} : ${results[u][0]}점</div>`
    }
    resultDiv.innerHTML = inner
}

window.addEventListener("DOMContentLoaded", () => {
    const answerDiv = document.querySelector("#answer");
    answerDiv.innerText = sentenceArray[Math.floor(Math.random() * sentenceArray.length)]
    answerInput.value = ""
})

const startClock = () => {
    console.log("clock started")
    const StartTime = new Date().getTime()
    const TimerProcess = setInterval(() => {
        const PresentTime = new Date().getTime();
        const RunTime = new Date(PresentTime - StartTime);
        const RunSecond = RunTime.getMinutes() * 60 + RunTime.getSeconds();
        const LeftSecond = 16 - RunSecond;
        clockDiv.innerText = LeftSecond;
        if (LeftSecond < 1) {
            clearInterval(TimerProcess);
            const answerValue = answerInput.value;
            const answerDiv = document.querySelector("#answer");
            const realAnswerValue = answerDiv.innerText;
            const score = lcs(realAnswerValue, answerValue);
            const scoreDiv = document.querySelector("#score");
            results.push([score, nameInput.value]);
            refreshResults();
            scoreDiv.innerText = score;
            setTimeout(() => {
                answerInput.value = ""
                clockDiv.innerText = ""
                scoreDiv.innerText = ""
                answerDiv.innerText = sentenceArray[Math.floor(Math.random() * sentenceArray.length)]
            }, 4000)
        }
    }, 10)
}

answerInput.addEventListener("keydown", (e) => {
    if (clockDiv.innerText !== "") {
        console.log("Game is already running")
    } else {
        console.log("keydown event");
        startClock();
    }
})

function lcs(x, y) {
    x = "0" + x;
    y = "1" + y;
    const m = x.length,
        n = y.length;
    console.log(x, y)
    let c = new Array(m);
    for (let i = 0; i < m; i++) {
        c[i] = new Array(n);
    }
    console.log(c)
    console.log(c[10])
    for (let j = 0; j < m; j++) {
        c[j][0] = 0;
    }
    for (let w = 0; w < n; w++) {
        c[0][w] = 0;
    }
    for (let k = 1; k < m; k++) {
        for (let l = 1; l < n; l++) {
            if (x[k] === y[l]) {
                c[k][l] = c[k - 1][l - 1] + 1
            } else {
                c[k][l] = Math.max(c[k - 1][l], c[k][l - 1])
            }
        }
    }
    return ((c[m - 1][n - 1] / (m - 1)) * 100).toFixed(1)
}

const s1 = "Since a politician never believes what he says, he is surprised when others believe him. - Charles de Gaulle"
const s2 = "Sincae apolitician never believs what he says, he is surpirised when others beilece him.- Charles de Grula"

console.log(lcs(s1, s2))