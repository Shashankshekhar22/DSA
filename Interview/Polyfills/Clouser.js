/** Clouser with an example */

function clouser() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let count = clouser();

count();
