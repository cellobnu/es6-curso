function info(value) {
  console.log("---------::RESULTADO::---------");
  console.log(value);
  console.log("-------------------------------");
}

const logger = {
  info: info
};

module.exports = logger;
