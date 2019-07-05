const auto = require("auto-reload");
const fs = require("fs");
const data = auto("./test.json");
const path = require("path");

setTimeout(() => {
  const text = `{
    "rand": ${Math.random()},
    "list": [{
      "name": "Test"
    }]
  }`;
  fs.writeFileSync(path.join(__dirname, "./test.json"), text);
}, 0);
setInterval(() => {
  console.log(data.rand, data.name);
}, 1000);
