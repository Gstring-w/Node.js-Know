//加密

function cipher(str) {
  try {
    const crypto = require("crypto");
    const cipher = crypto.createCipher("rc4-hmac-md5", "123456");
    // 与其他语言加密采用const cipher = crypto.createCipher("des-ecb","123456","")

    let encrypted = cipher.update(str, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  } catch (e) {
    console.log("加密失败！" + e);
  }
}
console.log(cipher("hello world!"));

function decipher(str) {
  try {
    const crypto = require("crypto");
    const decipher = crypto.createDecipher("rc4-hmac-md5", "123456");

    let decrypted = decipher.update(str, "hex", "utf8");
    decrypted += decipher.final("utf-8");

    return decrypted;
  } catch (e) {
    console.log(e);
  }
}
console.log(decipher("fc3ff98e8c6a0d3087d515c0473f8677"));

// MD5加密方式
const crypto = require("crypto");

const md5 = str =>
  crypto
    .createHash("md5")
    .update(str, "utf8")
    .digest("hex");

console.log(md5("hello world!"));
