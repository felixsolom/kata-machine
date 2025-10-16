export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmmout = Math.floor(Math.sqrt(breaks.length))
    let i = jmpAmmout
    for (; i < breaks.length; i += jmpAmmout) {
        if (breaks[i]) {
            break
        }
    }
    let j = i - jmpAmmout
    for (; j < i; j++) {
        if (breaks[j]) {
            return j
        }
    }
    return -1
}