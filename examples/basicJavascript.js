
var Presenter = require("../lib/presenter.js");

function myFunction(inValue) {
    console.log("You gave me '" + inValue + "'");
}

var cmds = [
    "for(var i = 1; i <= 12; i++) { \n" +
    "    console.log(i); \n" +
    "}",
    "console.log('test');"
];

var context = {
    myFunction : myFunction
};

Presenter(cmds, context, null);