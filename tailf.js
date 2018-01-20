'use strict';

const fs = require('fs');

/**
 * tailf
 *
 * @param {String} filename 文件名
 * @param {Number} delay 读取不到内容时等待的时间，ms
 */
function tailf(filename, delay) {

  // 每次读取文件块大小，16K
  const CHUNK_SIZE = 16 * 1024;
  // 打开文件，获取文件句柄
  const fd = fs.openSync(filename, 'r');
  // 文件开始位置
  let position = 0;
  // 循环读取
  const loop = () => {

    const buf = new Buffer(CHUNK_SIZE);
    const bytesRead = fs.readSync(fd, buf, 0, CHUNK_SIZE, position);
    // 实际读取的内容长度以 bytesRead 为准，并且更新 position 位置
    position += bytesRead;
    process.stdout.write(buf.slice(0, bytesRead));

    if (bytesRead < CHUNK_SIZE) {
      // 如果当前已到达文件末尾，则先等待一段时间再继续
      setTimeout(loop, delay);
    } else {
      loop();
    }
  };
  loop();
}

const filename = process.argv[2];
console.log(process.argv);
if (filename) {
  tailf(filename, 100);
} else {
  console.log('使用方法： node tailf <文件名>');
}