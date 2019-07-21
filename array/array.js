const logger = require("../logger");

// /** Array.isArray */

const a = "Marcelo";
const b = ["Marcelo", "Marcelo"];

if (Array.isArray(a)) {
  logger.info(a);
} else {
  logger.info(a);
}

if (Array.isArray(b)) {
  logger.info(b);
} else {
  logger.info(b);
}
