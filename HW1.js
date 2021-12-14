const sliceFoo = (string, number) => {
    return `${string.slice(0,number)}...`
}
console.log(sliceFoo('hello', 3))


const repeatFoo = (arr) => {
    const mySet = new Map()
    arr.reduce((collection, number)=>{
        if(collection.has(number)){
            collection.set(number, collection.get(number) + 1)
        }else{
            collection.set(number,1)
        }
        return collection
    }, mySet)
    let max = null;
    let result;
    mySet.forEach((value,key)=>{
        if(value > max){
            max = value
            result = key
        }
    })

    return result
}

// const repeatFoo = (arr) => {
//     const res = arr.reduce((collection, number)=>{
//         if(collection.hasOwnProperty(number)){
//             return {...collection, [number] : collection[number] + 1}
//         }else{
//             return {...collection, [number] : 1}
//         }
//     }, {})
//     console.log(res)
//
//     let max = null;
//     let result;
//
//     for (const key in res) {
//         if(res[key] > max){
//             max = res[key]
//             result = key
//         }
//     }
//     return result
// }

console.log(repeatFoo([1,3,2,2,2,4]))


const maleOrFemale = (arr) => {
    const result = arr.reduce((collection, el) => {
        debugger
        if (el.gender === 'male') {
            delete el.first_name
            delete el.last_name
            return {
                ...collection, men: [
                    ...collection.men,
                    {...el, fullName: `${el.last_name} ${el.first_name}`}
                ]
            }
        } else if (el.gender === 'female') {
            delete el.first_name
            delete el.last_name
            return {
                ...collection, women: [
                    ...collection.women,
                    {...el, fullName: `${el.first_name} ${el.last_name}`}
                ]
            }
        }
    }, {men: [], women: []})
    console.log(result)
    return result
}

maleOrFemale([
        {
            id: 1,
            first_name: 'Jeanette',
            last_name: 'Penddreth',
            email: 'jpenddreth0@census.gov',
            gender: 'female',
            ip_address: '26.58.193.2',
        },
        {
            id: 2,
            first_name: 'Petr',
            last_name: 'Jackson',
            email: 'gfrediani1@senate.gov',
            gender: 'male',
            ip_address: '229.179.4.212',
        },
        {
            id: 3,
            first_name: 'Inga',
            last_name: 'Petruchenko',
            email: 'Petruchenko@senate.gov',
            gender: 'female',
            ip_address: '229.129.4.212',
        },
        {
            id: 3,
            first_name: 'Vania',
            last_name: 'Lopotyk',
            email: 'Lopotyk@senate.gov',
            gender: 'male',
            ip_address: '222.179.4.212',
        },
    ]
)


const boxarts = [
    {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    },
    {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    },
    {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    },
    {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
]

const maxSquare = (arr) => {
    const result = arr.reduce((result,box)=>{
        return [...result, box.width * box.height]
    },[])
    return arr[result.indexOf(Math.max(...result))].url
}

console.log(maxSquare(boxarts))


const newReleases = [{
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
}, {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
}, {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
}, {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
}];


const ratingMoreOf = (arr, rating) => {
    return arr.reduce((result, releases)=>{
        if(releases.rating[0] >= rating){
            result.push(releases.id)
            return result
        }
        return result
    },[])
}

console.log(ratingMoreOf(newReleases,5.0))

const videos = [{
    id: 65432445,
    title: "The Chamber"
}, {
    id: 675465,
    title: "Fracture"
}, {
    id: 70111470,
    title: "Die Hard"
}, {
    id: 654356453,
    title: "Bad Boys"
}];

const createObj = (arr) =>{
    return arr.reduce((result, el)=>{
        return {
            ...result,
            [el.id]:el.title
        }
    },{})
}

console.log(createObj(videos))