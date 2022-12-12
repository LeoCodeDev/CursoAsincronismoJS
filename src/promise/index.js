const promise = new Promise((resolve, reject) => {
  resolve("hey");
  reject("Opps");
});

const cows = 1;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject(`There is no enought cows`);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
