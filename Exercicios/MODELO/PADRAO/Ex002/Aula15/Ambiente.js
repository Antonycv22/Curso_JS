let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(num)
let pos = num.indexOf(6)
console.log(`O valor está na posição ${pos}`)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
