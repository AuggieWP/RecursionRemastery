/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

let r2d2Speaks = (code) => {
    if (!code.length) return;

    let firstElement = code.shift();

    if (firstElement === 0) {
        console.log("beep");
        setTimeout(r2d2Speaks, 400, code);
    } else {
        console.log("boop");
        setTimeout(r2d2Speaks, 800, code);
    }
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
