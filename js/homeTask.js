// i want to write two Promises and then try to call these two with .then and async function

export default function study(time = 1000, subject = "Data Structure") {
  return new Promise((resolve, reject) => {
    if (subject !== "Python") {
      setTimeout(() => {
        resolve(`You have studied ${subject} for ${time / 1000} second`);
      }, time);
    } else {
      reject("We don't study Python anymore");
    }
  });
}

export function study2(time = 2000, subject = "JavaScript") {
  return new Promise((resolve, reject) => {
    if (subject !== "Python") {
      setTimeout(() => {
        resolve(`You have studied ${subject} for ${time / 1000} second`);
      }, time);
    } else {
      reject("We don't study Python anymore");
    }
  });
}
