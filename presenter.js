var repl = require("repl"),
    clc = require("cli-color");

/**
 * A node-cli presenter based on REPL
 * simply pass an array of commands, the context for the eval
 * and the your custom repl config
 *
 * pressing RETURN shows the next command
 * pressing RETURN agains, runs the command
 * pressing RETURN shows the next command
 * ... and so on....
 *
 * @param commands
 * @param context
 * @param replConfig
 * @return {*}
 * @constructor
 */
function Presenter(commands, context, replConfig) {

    replConfig = replConfig || {
        prompt: "",
        input: process.stdin,
        output: process.stdout
    };

    var printed = false,
        cmdCnt = 0,
        cmdMax = commands.length;

    //copy all elements of context in this-scope
    for(var elem in context) {
        if(context.hasOwnProperty(elem)) {
            this[elem] = context[elem];
        }
    }

    function next(){

        if(cmdCnt === cmdMax + 1) {
            console.log("done.");
            process.exit(0);
        }

        //print next command
        if(printed === false) {
            printed = true;
            console.log(clc.green(commands[cmdCnt++]));
            return;
        }

        printed = false;
        return function(){ (eval.apply(this, arguments)); }(commands[cmdCnt-1]);
    }

    function presenterEval(cmd, context, filename, callback) {

        callback(next());
    }

    //overwrite repl config
    replConfig.ignoreUndefined = true;
    replConfig.eval = presenterEval;

    return repl.start(replConfig);
}

module.exports = Presenter;