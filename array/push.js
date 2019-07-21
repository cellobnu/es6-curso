const logger = require("../logger");

// /** Array.protopype.push */
const studantesWithouRobert = ["marcelo", "Vini", "Marcos"];
logger.info(studantesWithouRobert);
studantesWithouRobert.push("Roberto");

logger.info(studantesWithouRobert);
