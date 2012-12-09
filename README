# CLI-Presenter

A node-cli presenter based on REPL.
Simply pass an array of commands, the context for the eval and your custom repl config.

## API

```javascript
function Presenter(commands, context, replConfig)
```

## Usage

Simply hit __RETURN__.

- Pressing RETURN shows the next command
- Pressing RETURN again, runs the command
- Pressing RETURN shows the next command


 _… and so on…._


## Example

```javascript

var Presenter = require("cli-presenter");

function myFunction() {
     console.log("myFunction called");
}

var context = {
    myFunction : myFunction
};

var commands = [
    "console.log('my cli presentation');",
    "myFunction();"
];

var presenterRepl = Presenter(commands, context);

```