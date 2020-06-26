const path = require("path");
const {log} = require("util");

const v8 = require("v8");

log(v8.getHeapStatistics());


