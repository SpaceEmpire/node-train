const fork = require("child_process").fork;

const cups = require('os').cpus();

for (let i = 0; i < cups.length; i++) {
  fork('./worker.js');
}