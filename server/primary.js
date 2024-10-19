const cluster = require("node:cluster");
const {cpus} = require("node:os");

const cpuCount = cpus().length;
if(cluster.isPrimary){
    for (let i = 0; i < cpuCount; i++){
        cluster.fork();
    }
}
else {
    require('./server');
}

cluster.on("exit", (worker, code, signal) => {
    console.log("starting another worker");
    cluster.fork();
})