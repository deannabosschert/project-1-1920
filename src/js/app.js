import {
  API
} from "../../node_modules/oba-wrapper/js/index.js";

async function init() {
  const oba = new API({
    key: "1e19898c87464e239192c8bfe422f280"
  });
  const stream = await oba.createStream("search/banaan");
  stream.pipe(toJSON);
}

function toJSON(stream) {
  console.log(stream);
}
init();