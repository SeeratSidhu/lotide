const assertEqual = require('../assertEqual');
const tail = require('../tail');

const random = ["Hello", "You", "Are", "Awesome"];
const randomTail = tail(random);

assertEqual(randomTail.length, 3);
assertEqual(randomTail[0], "You");
assertEqual(randomTail[1], "Are");
assertEqual(randomTail[2], "Awesome");
assertEqual(random.length, 4);