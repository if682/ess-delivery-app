export function isInputNull(input) {
    if (input === null || input.trim().length === 0) {
        return true
    }

    return false
}