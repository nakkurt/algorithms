// simple function timing
let iterations = 1000000;
console.time('Function #1');
for(let i = 0; i < iterations; i++ ){
    functionOne();
};
console.timeEnd('Function #1')

console.time('Function #2');
for(let i = 0; i < iterations; i++ ){
    functionTwo();
};
console.timeEnd('Function #2')
