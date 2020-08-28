/*let ninetysBestSongs = [
    { año: "1994", name: "Blind" },
    { año: "1992", name: "Walk" },
    { año: "1994", name: "Davidian" },
    { año: "1991", name: "Killig in the Name" },
    { año: "1996", name: "Roots Bloody Roots" },
    { año: "1991", name: "Sad But True" },
    { año: "1994", name: "Closer" },
    { año: "1994", name: "Black Hole Sun" },
    { año: "1999", name: "Slipknot"},
    { año: "1991", name: "Smeels Like Teen Spirit" }
]

let onlySong = ninetysBestSongs.map(song =>{
    return song.name
})
console.log(onlySong)

let after1995 = ninetysBestSongs.filter(song => {
    return song.año > 1995
})
console.log(after1995)

let song00 = ninetysBestSongs.map(song => {
    let songTwoNum = song.año.slice(2,4)+ "-" + song.name
    return songTwoNum
    
})
console.log(song00)*/

let ninetysBestSongs = [
    "1994 Blind",
    "1992 Walk",
    "1994 Davidian",
    "1991 Killig in the Name",
    "1996 Roots Bloody Roots",
    "1991 Sad But True",
    "1994 Closer",
    "1994 Black Hole Sun",
    "1999 Slipknot",
    "1991 Smeels Like Teen Spirit"
]


let onlySongs = ninetysBestSongs.map(song => {
    let songString = song.replace(/[123456789]/ig, '')
    return songString
})
console.table(onlySongs)

let after1995 = ninetysBestSongs.filter(song =>{
    let song1995 = song.slice(0,5) 
    return song1995 > 1995 
    
    

})

console.table(after1995)



let song00 = ninetysBestSongs.map(song => {
    let songTwoNum = song.slice(2)
    return songTwoNum
})
console.table(song00)

