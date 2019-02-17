const isDev = process.env.NODE_ENV === 'development';
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = require('./app');

// start a cluster
if (!isDev && !cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', worker =>
    console.log(`Worker ${worker.process.pid} died`)
  );
} else {
  app();
}
