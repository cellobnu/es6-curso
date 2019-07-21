const logger = require("../logger");

// /** Array.protopype.shift */

const studantes = ["marcelo", "Vini", "Roberto", "Marcos"];
const studantesRemove = studantes.shift();

logger.info(studantesRemove);
logger.info(studantes);
