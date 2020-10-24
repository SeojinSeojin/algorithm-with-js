const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id)
}

const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text")
    ev.target.appendChild(document.getElementById(data))
}

const powerup = (pok1, pok2) => {
    if (pok1.type === 'F') {
        if (pok2.type === 'G') {
            return [pok1.power * 2, pok2.power]
        }
        if ((pok2.type === 'W') || (pok2.type === 'L')) {
            return [pok1.power, pok2.power * 2]
        }
    }
    if (pok1.type === 'W') {
        if ((pok2.type === 'F') || (pok2.type === 'L')) {
            return [pok1.power * 2, pok2.power]
        }
        if ((pok2.type === 'G') || (pok2.type === 'E')) {
            return [pok1.power, pok2.power * 2]
        }
    }
    if (pok1.type === 'G') {
        if ((pok2.type === 'W') || (pok2.type === 'L')) {
            return [pok1.power * 2, pok2.power]
        }
        if (pok2.type === 'F') {
            return [pok1.power, pok2.power * 2]
        }
    }
    if (pok1.type === 'E') {
        if (pok2.type === 'W') {
            return [pok1.power * 2, pok2.power]
        }
        if (pok2.type === 'L') {
            return [pok1.power, pok2.power * 2]
        }
    }
    if (pok1.type === 'L') {
        if ((pok2.type === 'F') || (pok2.type === 'E')) {
            return [pok1.power * 2, pok2.power]
        }
        if ((pok2.type === 'W') || (pok2.type === 'G')) {
            return [pok1.power, pok2.power * 2]
        }
    }
    return [pok1.power, pok2.power]
}

const battle = (pok1, pok2) => {

    const powers = powerup(pok1, pok2)
    const pow1 = powers[0]
    const pow2 = powers[1]
    if (pow1 > pow2) {
        return pok1
    } else {
        return pok2
    }
}

const achamo = {
    type: 'F',
    power: 7,
    name: 'achamo'
}
const bcane = {
    type: 'F',
    power: 12,
    name: 'bcane'
}
const cikorita = {
    type: 'G',
    power: 8,
    name: 'cikorita'
}
const coil = {
    type: 'E',
    power: 6,
    name: 'coil'
}
const digda = {
    type: 'L',
    power: 5,
    name: 'digda'
}
const ereve = {
    type: 'E',
    power: 15,
    name: 'ereve'
}
const ggobugi = {
    type: 'W',
    power: 16,
    name: 'ggobugi'
}
const ggomadol = {
    type: 'L',
    power: 11,
    name: 'ggomadol'
}
const liako = {
    type: 'W',
    power: 13,
    name: 'liako'
}
const longstone = {
    type: 'L',
    power: 20,
    name: 'longstone'
}
const mulzzangi = {
    type: 'W',
    power: 9,
    name: 'mulzzangi'
}
const namujigi = {
    type: 'G',
    power: 14,
    name: 'namujigi'
}
const pairi = {
    type: 'F',
    power: 18,
    name: 'pairi'
}
const pikachu = {
    type: 'E',
    power: 19,
    name: 'pikachu'
}
const strangeC = {
    type: 'G',
    power: 17,
    name: 'strangeC'
}
const zziririgong = {
    type: 'E',
    power: 10,
    name: 'zziririgong'
}

const startbtn = document.getElementById("button");
startbtn.addEventListener("click", () => {
    const inputDivs = document.querySelectorAll(".onbattle");
    let pokemonList = []
    inputDivs.forEach((Element) => {
        const imgDiv = Element.firstChild
        if (imgDiv === null) {} else {
            const imgId = imgDiv.id
            pokemonList.push(eval(imgId));
        }
    })
    console.log(pokemonList)

    if (pokemonList.length != 8) {
        return;
    }

    while (pokemonList.length > 1) {
        const kings = []
        for (let i = 0; i < pokemonList.length; i += 2) {
            kings.push(battle(pokemonList[i], pokemonList[i + 1]))
        }
        pokemonList = kings
    }

    const winnerdiv = document.getElementById("winner");
    winnerdiv.style.display = 'block';
    winnerdiv.classList.toggle("animate__bounceIn");
    setTimeout(() => {
        const winnerImg = document.createElement("img");
        winnerImg.src = `./img/${pokemonList[0].name}.webp`;
        winnerdiv.appendChild(winnerImg)
    }, 500);
    console.log(pokemonList[0].name)
})