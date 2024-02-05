const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum, num, 0)
    return sum / numbers.length
}

console.log(`Média Aritimética Simples; ${average(3, 6, 10, 9)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight), 0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weigth, 0)
    return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 9, weight: 3 }
)}`)

const median = (...numbers) => {
    const orderedNumbers
}