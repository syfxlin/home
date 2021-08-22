import preval from "next-plugin-preval";

async function getData() {
  return { buildTime: Date.now() };
}

export default preval(getData());
