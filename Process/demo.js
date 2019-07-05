/**
 * 开启一个服务进程
 */

// const http = require("http");

// http.createServer().listen(3000, () => {
//   console.log("服务进程开启");
// });

/**
 * 单线程
 */
// const http = require("http");
// const [url, port] = ["127.0.0.1", 3000];

// const computation = () => {
//   let sum = 0;
//   console.info("计算开始");
//   console.time("计算耗时");

//   for (let i = 0; i < 1e10; i++) {
//     sum += i;
//   }

//   console.info("计算结束");
//   console.timeEnd("计算耗时");
//   return sum;
// };

// const server = http.createServer((req, res) => {
//   if (req.url == "/compute") {
//     const sum = computation();

//     res.end(`Sum is ${sum}`);
//   }

//   res.end(`ok`);
// });

// server.listen(port, url, () => {
//   console.log(`server started at http://${url}:${port}`);
// });
