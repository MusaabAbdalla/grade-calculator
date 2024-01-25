import { updateResult } from "./update.js";
import { calculate } from "./calculate.js";
import { onInput } from "./onInput.js";
import study from "./homeTask.js";
import { study2 } from "./homeTask.js";

function setup() {
  const form = document.calculator;

  if (!form) throw new Error("Form not found");

  form.value.value = 80;
  form.total.value = 100;
  form.value.focus();
  form.value.select();

  updateResult(calculate(80, 100));

  form.addEventListener("input", onInput);
}

setup();

// study()
// .then(value=>{ console.log(value); return study2(100,"Python")})
// .then(value=>{console.log(value)})
// .catch(value=> console.error(value))

async function studyProgram() {
  try {
    const firstStudy = await study(100, "Python");
    console.log(firstStudy);
    const secondStudy = await study2();
    console.log(secondStudy);
  } catch (error) {
    console.error(error);
  }
}

studyProgram();
