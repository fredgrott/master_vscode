// all 'args' parameters are based on
// 'EventScriptFunctionArguments' interface
// 
// s. https://mkloubert.github.io/vscode-kanban/interfaces/_workspaces_.eventscriptfunctionarguments.html

// use any Node.js 7 API, s. https://nodejs.org/
const fs = require('fs');
// use VSCode API, s. https://code.visualstudio.com/docs/extensionAPI/vscode-api
const vscode = require('vscode');

// [OPTIONAL]
// 
// Is raised after a CARD has been CREATED.
exports.onCardCreated = async (args) => {
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.cardcreatedeventdata.html

    // access a module of that extension
    // s. https://github.com/mkloubert/vscode-kanban/blob/master/package.json
    const FSExtra = args.require('fs-extra');

    // write own data to
    // 'tag' property of a card (args.tag)
    // 
    // also works in:
    // - onCardMoved()
    // - onCardUpdated()
    await args.setTag( 'Any JSON serializable data.' );    
};

// [OPTIONAL]
// 
// Is raised after a CARD has been DELETED.
exports.onCardDeleted = async (args) => {
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.carddeletedeventdata.html
};

// [OPTIONAL]
// 
// Is raised after a CARD has been MOVED.
exports.onCardMoved = async (args) => {
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.cardmovedeventdata.html
};

// [OPTIONAL]
// 
// Is raised after a CARD has been UPDATED.
exports.onCardUpdated = async (args) => {
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.cardupdatedeventdata.html
};

// [OPTIONAL]
// 
// Is raised after a column has been cleared.
exports.onColumnCleared = async (args) => {
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.columnclearedeventdata.html
};

// [OPTIONAL]
// 
// Is raised when an user clicks on a card's 'Execute' button.
// This requires global extension / workspace setting 'canExecute' to be set to (true).
exports.onExecute = async (args) => {
    // args => https://mkloubert.github.io/vscode-kanban/interfaces/_workspaces_.eventscriptfunctionarguments.html
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.executecardeventarguments.html
};

// [OPTIONAL]
// 
// Is raised when an user clicks on a card's 'Track Time' button.
// This requires global extension / workspace setting 'canTrackTime' to be set to (true).
exports.onTrackTime = async (args) => {
    // args => https://mkloubert.github.io/vscode-kanban/interfaces/_workspaces_.eventscriptfunctionarguments.html
    // args.data => s. https://mkloubert.github.io/vscode-kanban/interfaces/_boards_.tracktimeeventarguments.html
};


// [OPTIONAL]
// 
// Generic fallback function, if a function is not defined for an event.
exports.onEvent = async (args) => {
    // args.name => name of the event
    // args.data => object with event data  
};