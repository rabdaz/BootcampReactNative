console.log('Starting!');
setTimeout(() =>{console.log('Timer Completed!')}, 10);

console.log('Finished!');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('Timer Completed!');
    }, 1000);
}) .then((text) => {throw new Error('Failed!')  })
.catch(err => console.log(err))
.then(()=> console.log('Does That execute?'));