var _ = require('lodash');

// Debounce: Waits until the function has not been called for a specified time before executing it.
// Use Case: Ideal for scenarios like autocomplete, where you want to wait until the user has stopped typing before making an API call.

// Example function to call after debounce period
function search(query) {
  console.log(`Searching for ${query}`);
}

// Debounced version of the function
const debouncedSearch = _.debounce(search, 1000);

// Calling it multiple times rapidly will only result in a single call
debouncedSearch('example1');
debouncedSearch('example2');  // Will only trigger once after 300ms
debouncedSearch('example3');
debouncedSearch('example4');
debouncedSearch('example5');
debouncedSearch('example6');
debouncedSearch('example7');
debouncedSearch('example8');
debouncedSearch('example9');
debouncedSearch('example10');

