/**
 * 单位为字节格式的 MB 输出
 */

const format = function(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + "MB";
};

const print = function() {
  const memoryUseage = process.memoryUsage();

  console.log(
    JSON.stringify({
      rss: format(memoryUseage.rss),
      heapTotal: format(memoryUseage.heapTotal),
      heapUsed: format(memoryUseage.heapUsed),
      external: format(memoryUseage.external)
    })
  );
  console.log(memoryUseage.heapUsed);
};

// p
setInterval(print, 300);
