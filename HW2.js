const uniqueNumber = (arr) => {
    let set = new Set(arr)
    return Array.from(set)
}

console.log(uniqueNumber([1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6]))


const oddNumberInArray = (arr) => {
    const res = arr.reduce((collection, number) => {
        if (collection.hasOwnProperty(number)) {
            return {...collection, [number]: collection[number] + 1}
        } else {
            return {...collection, [number]: 1}
        }
    }, {})
    for (const key in res) {
        if(res[key] % 2 !== 0){
            return key
        }
    }
}

console.log(oddNumberInArray([0,1,0,1,0]))
console.log(oddNumberInArray([1,2,2,3,3,3,4,3,3,3,2,2,1]))

const sumSymbolOfNumber = (number) => {
    if (number.toString().length === 1) {
        return number
    } else {
        const newNumber = number.toString().split('').reduce((res, i) => {
            return res += Number(i)
        }, 0)
        return sumSymbolOfNumber(newNumber)
    }
}

console.log(sumSymbolOfNumber(16))
console.log(sumSymbolOfNumber(942))
console.log(sumSymbolOfNumber(493193))
console.log(sumSymbolOfNumber(1234))


Array.prototype.myCustomMap = function (callBack, thisArg) {
    if (this === null) {
        throw new Error('Cant iterate over null or undefined ')
    }
    let context = this
    let O = Object(this)
    if (arguments.length > 1) {
        context = thisArg
    }
    if (typeof callBack !== 'function') {
        throw new Error('CallBack is not a function')
    }
    let newArr = []
    let i = 0
    while (i < O.length) {
        if (i in O) {
            newArr[i] = callBack.call(context, this[i], i, O)
        }
        i++
    }
    return newArr
}


console.log([1, 2, 3].myCustomMap((i)=>i*2))

Array.prototype.myCustomFilter = function (callBack, thisArg) {
    if (this === null) {
        throw new Error('Cant iterate over null or undefined ')
    }
    let context = this
    let O = Object(this)
    if (arguments.length > 1) {
        context = thisArg
    }
    if (typeof callBack !== 'function') {
        throw new Error('CallBack is not a function')
    }
    let newArr = []
    for(let i = 0; i< O.length; i++){
        if (i in O) {
            if(callBack.call(context, this[i], i, O)){
                newArr.push(this[i])
            }
        }
    }
    return newArr
}


console.log([1, 2, 3].myCustomFilter((i)=>i !== 2))
console.log([1, 2, 3,4,1,2,3,21,1231,122,12].myCustomFilter((i)=>i > 10))

async function getPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    if(response.ok){
        let json = await response.json()
        console.log(json.results)
    }else{
        throw new Error(`some error`)
    }
}
getPokemon().catch(console.log)


async function getPokemonByName(name){
    let response = await fetch(`https://pokeapi.co/api/v2/berry/${name}/`)
    if(response.ok){
        let json = await response.json()
        console.log(json)
    }else{
        throw new Error(`Покемон, по имени ${name} не найден.`)
    }
}
getPokemonByName('dsad').catch(console.log)
getPokemonByName('cheri').catch(console.log)


let address = 'https://pokeapi.co/api/v2/pokemon'

async function getPokemonInformationArray(){
    let resultArr = []
    const response = await fetch(address)
    if(response.ok){
        let json = await response.json()
        json.results.map(async function (pokemon){
            let information = await fetch(pokemon.url)
            if(information.ok){
                await information.json().then(res=>{
                    resultArr.push(res)
                })
            }
        })
        console.log(resultArr)
    }else{
        throw new Error(`some error`)
    }
}
getPokemonInformationArray().catch(console.log)


const getValue = (data, awaitSecond) => {
    return new Promise((resolve, reject)=>{
        if(data && awaitSecond){
            setTimeout(()=>{
                return resolve(data)
            },awaitSecond)
        }else{
            return reject('check arguments')
        }
    })
}

getValue('Hello', 2000).then(data => console.log((data)))
getValue('World', 5000).then(data => console.log((data)))









