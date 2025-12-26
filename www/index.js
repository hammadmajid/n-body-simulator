import init, { add } from "../pkg/nbs.js";

async function main() {
  await init();
  console.log(add(1, 2));
}

main();

