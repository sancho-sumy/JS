const str = 'just to check'

function capitalyzeFirsdtLetter(str) {
    return str[0].toUpperCase() + str.substring(1)
}

console.log(capitalyzeFirsdtLetter(str));