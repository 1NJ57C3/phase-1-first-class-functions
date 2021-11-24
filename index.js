const { spy } = require("chai")

function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Named Function returned.')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous Function returned.')
    }
}