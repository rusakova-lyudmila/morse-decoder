const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decimalsArray = [];
    for (let i = 0; i < expr.length; i += 10) {
        decimalsArray.push(expr.substring(i, i + 10));
    }
    
    const decimalsMorseTable = {};
    for (const key in MORSE_TABLE) {
        const newKey = key.split('').map(elem => (elem === '.') ? '10' : '11').join('').padStart(10, '0');
        decimalsMorseTable[newKey] = MORSE_TABLE[key];
    }
    decimalsMorseTable['**********'] = ' ';
    
    return decimalsArray.map(elem => decimalsMorseTable[elem]).join('');
}

module.exports = {
    decode
}