let adjectives = [
    'little',
    'rat',
    'cat',
    'dog',
];

let nouns = [
    'dog',
    'bat',
    'wrench',
    'apple',
    'pear',
    'ghost',
    'cat',
    'wolf',
    'squid',
    'goat',
    'snail',
    'hat',
    'sock',
    'plum',
    'bear',
    'snake',
    'turtle',
    'horse',
    'spoon',
    'fork',
    'spider',
    'tree',
    'chair',
    'table',
    'couch',
    'towel',
    'panda',
    'bread',
    'grape',
    'cake',
    'brick',
    'rat',
    'mouse',
    'bird',
    'oven',
    'phone',
    'photo',
    'frog',
    'bear',
    'camel',
    'sheep',
    'shark',
    'tiger',
    'zebra',
    'duck',
    'eagle',
    'fish',
    'kitten',
    'lobster',
    'monkey',
    'owl',
    'puppy',
    'pig',
    'rabbit',
    'fox',
    'whale',
    'beaver',
    'gorilla',
    'lizard',
    'parrot',
    'sloth',
    'swan',
];

function getRandomNumber(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let noun = nouns[Math.floor(Math.random() * nouns.length)];
let num = getRandomNumber(5);
noun = noun.charAt(0).toUpperCase() + noun.substring(1);
adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
document.getElementById('roomName').value = '';

// Typing Effect

let i = 0;
let txt = num + adjective + noun;
let speed = 100;

typeWriter();

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('roomName').value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
