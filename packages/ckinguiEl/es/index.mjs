import * as o from "./src/index.mjs";
import { Button as s } from "./src/button/index.mjs";
const n = {
  install: (t) => {
    console.log(o);
    for (let e in o)
      t.use(o[e]);
  }
};
export {
  s as Button,
  n as default
};
