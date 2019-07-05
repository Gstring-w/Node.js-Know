const auto = require("auto-reload");
const fs = require("fs");
const data = require("./test.json");
const path = require("path");
setInterval(() => {
  console.log(data.rand, data.name);
}, 1000);

setTimeout(() => {
  const text = `{
    "rand": ${Math.random()},
    "list": [{
      "name": "Test"
    }]
  }`;
  fs.writeFileSync(path.join(__dirname, "./data/json.json"), text);
}, 0);
