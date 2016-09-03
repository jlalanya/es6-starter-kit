import {Target} from './target'

export function initAdapter(setting, value) {
  if (setting === "goToArray") {
    var f1 = new Target("Array")
    console.log(f1.getValue("12, 6"));
  } else {
    var f2 = new Target("")
    console.log(f2.getValue("1"));
  }
}
