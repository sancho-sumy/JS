class ShiftCipher {
    constructor(shift) {
        this._shift = shift
    }

    encrypt(text) {
        let modified = [];
        for (let i = 0; i < text.length; i++) {
        let initial = [];
        let charCode = text.charCodeAt(i);
        let shiftedCharCode = text.charCodeAt(i) + this._shift;
        initial.push(text.charCodeAt(i))
        if (65 <= charCode && charCode <= 90 || 97 <= charCode && charCode <= 122) {
            if (65 <= shiftedCharCode && shiftedCharCode <= 90 || 97 <= shiftedCharCode && shiftedCharCode <= 122) {
                modified.push(String.fromCharCode(shiftedCharCode));
            } else if (shiftedCharCode > 90 && shiftedCharCode < 97) {
                modified.push(String.fromCharCode(97 + (shiftedCharCode - 91)));
            } else if (shiftedCharCode > 122) {
                modified.push(String.fromCharCode(65 + (shiftedCharCode - 123)));
            }
        } else {
            modified.push(String.fromCharCode(charCode));
        }
        }
        return modified.join("").toLocaleUpperCase()
    }

    decrypt(text) {
        let modified = [];
        for (let i = 0; i < text.length; i++) {
        let initial = [];
        let charCode = text.charCodeAt(i);
        let shiftedCharCode = text.charCodeAt(i) - this._shift;
        initial.push(text.charCodeAt(i))
        if (65 <= charCode && charCode <= 90 || 97 <= charCode && charCode <= 122) {
            if (65 <= shiftedCharCode && shiftedCharCode <= 90 || 97 <= shiftedCharCode && shiftedCharCode <= 122) {
                modified.push(String.fromCharCode(shiftedCharCode));
            } else if (shiftedCharCode > 90 && shiftedCharCode < 97) {
                modified.push(String.fromCharCode(90 - (96 - shiftedCharCode)));
            } else if (shiftedCharCode < 65) {
                modified.push(String.fromCharCode(122 - (64 - shiftedCharCode)));
            }
        } else {
            modified.push(String.fromCharCode(charCode));
        }
        }
        return modified.join("").toLocaleLowerCase()
    }
}

/*
const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

*/
const cipher = new ShiftCipher(1);
cipher.encrypt('I love to code! xyzXYZ'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'
console.log(cipher.encrypt('Z'));
console.log(cipher.decrypt('A'));

