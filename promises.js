/**
 * * Write a delay() that takes in a fn and a delay time in ms and executes it after given delay. 
 */


const delay = (fn, ms) => {
    return new Promise((resolve, reject) => {
        if (ms < 300) {
            reject('increase delay');
        } else {
            setTimeout(() => {
                resolve(fn);
            }, ms);
        }
    });
};

const foo = () => {
    console.log('done');
}

delay(foo, 2000).then((fn) => {
    fn.call();
}).catch((error) => {
    console.log(error);
});

// * Alt error catch
delay(foo, 100).then((fn) => {
    fn.call();
}, (error) => {
    console.log(error);
});