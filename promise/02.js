console.log(1);
setTimeout(() => {
  console.log(2);
},2000)
console.log(3);
const waitForTwoSeconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('After 2 seconds!');
    }, 2000);
  });
};


const waitForThreeSeconds = message => {
  console.log(message);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Three seconds have passed');
    }, 3000);
  });
};

const showResult = message => {
  console.log('Promise has been resolved and returned:', message);
};

waitForTwoSeconds().then(waitForThreeSeconds).then(showResult);