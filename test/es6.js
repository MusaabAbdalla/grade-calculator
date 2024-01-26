// export function wait(ms = 1000, resolveWith = "Hello World") {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(resolveWith), ms);
//   });
// }

export function wait(ms = 1000, resolveWith = "Hello world") {
  return new Promise((resolve, reject) => {
    const done = true;
    if (done) {
      setTimeout(() => {
        resolve(resolveWith);
      }, ms);
    } else {
      reject("The promise is rejected");
    }
  });
}
