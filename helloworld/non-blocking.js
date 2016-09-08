/** non-blocking library **/

var fs = require('fs');

// load food async

var food = fs.readFile('food.txt', 'utf8', function (err, food) {

    if (err) {
        console.log(err);
    }

    else {
        console.log(food);
    }
});


var drinks = fs.readFile('drinks.txt', 'utf8', function (err, drinks) {

    if (err) {
        console.log(err);
    }

    else {
        console.log('\nDRINKS');
        console.log(drinks);
    }
});


