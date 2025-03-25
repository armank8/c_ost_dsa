async function sleep(millis) {
    return new Promise(resolve=>setTimeout(resolve,millis))
}
let millis=2000;
// console.log(sleep(millis));
sleep(millis).then(()=>console.log("Executed after 2 seconds"));