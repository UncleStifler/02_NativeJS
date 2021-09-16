import {mul, splitWorlds, sum} from "./01";

test('sum should be corrected', () => {
    //date
    const a = 1
    const b = 2
    const c = 3

    //action
    const result = sum(a, b)
    const result2 = sum(a, c)

    //expect result
    expect(result).toBe(3)
    expect(result2).toBe(4)
})

test('multiply should be corrected', () => {
    const a = 55
    const b = 10
    const c = 100

    const result = mul(a, b)
    const result2 = mul(b, c)

    expect(result).toBe(550)
    expect(result2).toBe(1000)
} )

test('splitting into words should be correct', () => {
    const sentence1 = 'Hello my friends!'
    const sentence2 = 'JS - programming language'

    const result1 = splitWorlds(sentence1)
    const result2 = splitWorlds(sentence2)


    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')
    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('js')
    expect(result2[2]).toBe('programming')
    expect(result2[3]).toBe('language')
})