/**
 * * Write a delay() that takes in a fn and a delay time in ms and executes it after given delay. 
 */


const delay = (fn, ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fn);
        }, ms);
    });
};

const foo = () => {
    console.log('done');
}

delay(foo, 3000).then((fn) => {
    fn();
});