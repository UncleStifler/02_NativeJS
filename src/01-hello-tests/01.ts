export function sum(a: number, b: number) {
    return a + b
}

export function mul(a: number, b: number) {
    return a * b
}


export function splitWorlds(sentence: string) {
    const words = sentence.toLowerCase().split(' ')
    return words.filter(w => w !== "")
        .map(w => w.replace("!", ""))
}