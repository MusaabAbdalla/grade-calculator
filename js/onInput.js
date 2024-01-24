import { calculate } from "./calculate";
import { updateResult } from "./update";
export function onInput(event) {
  const form = event.target.form;
  const value = Number(form.value.value);
  const total = Number(form.total.value);
  const grade = calculate(value, total);
  updateResult(grade);
}
