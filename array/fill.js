const logger = require("../logger");

// /** Array.protopype.fill */

const filledArray = new Array(10);
filledArray.fill("A");
logger.info(filledArray);
