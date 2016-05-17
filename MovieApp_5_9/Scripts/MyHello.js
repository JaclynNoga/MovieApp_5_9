//countUp();

//one way to define functions
function countUp() {
    for (var x = 1; x <= 10; x++)
    { console.log(x); }
}

//another way to define functions. this way you need to consider the order
var countDown = function () {
    for (var x = 10; x > 0; x--) {
        console.log(x)
    }
};

//countDown();

function evensToOneHundred() {
    for (var x = 2; x <= 100; x+2)
    { console.log(x);}
}

//evensToOneHundred();

var greeting = "Hello!";
var farewell = 'Goodbye!';

var stroy = 'The man said, "Hello!"';
var contraction = "aint't aint' a word";

var longerStory = "The main, \"I ain't gonna do that\"";

var paragraph = "See spot. Spot runs fast. Run spot run.";

var sentences = paragraph.split(".");

console.log(sentences)