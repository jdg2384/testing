// import './src/enzyme';

// const testsContext = require.context('.', true, /_test$/);

// testsContext.keys().forEach(testsContext);

var context = require.context('./src', true, /-test\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);