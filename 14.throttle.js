var _ = require('lodash');

// Throttle: Ensures the function executes at most once every specified time period
// Use Case: Ideal for cases like handling scroll events where you want to avoid executing a function too frequently.

// Example function to call at a limited rate
function logScroll(args) {
  console.log(`Scroll event ${args}`);
}

// Throttled version of the function
const throttledScroll = _.throttle(logScroll, 1000);

// Calling it multiple times rapidly will execute the function at most once every 200ms

throttledScroll('example1');
throttledScroll('example2');
throttledScroll('example3');
throttledScroll('example4');
throttledScroll('example5');
throttledScroll('example6');
throttledScroll('example7');
throttledScroll('example8');
throttledScroll('example9');
throttledScroll('example10');
