const https = require("https");
const URL = "https://jsonplaceholder.typicode.com";

function getData(path, cb) {
  const url = `${URL}${path}`;
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      cb(data);
    });
  });
}

module.exports = getData;