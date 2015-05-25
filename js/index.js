var ffi = require('ffi');

var lib = ffi.Library('../target/release/libembed', {
    'process': ['void', []]
});

lib.process();

console.log('NodeJS process is done too!');
