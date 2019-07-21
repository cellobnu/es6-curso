const logger = require("../logger");

// /** Array.protopype.map and filter */

const studantes = ["marcelo", "Vini", "Roberto", "Marcos"];

const findStudent = studantes
  .filter(student => student === "Vini")
  .map(student => `Aluno ${student}`);

logger.info(findStudent);
