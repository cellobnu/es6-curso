const logger = require("../logger");

// /** Array.protopype.splice */

const students = ["Marcos", "Vini", "Marcelo", "Roberto"];

// INserir o Marcel entre o Vine e Marcelo
students.splice(2, 0, "Marcel");
logger.info(students);

// // Remover o Marcelo do array
students.splice(3, 1);
logger.info(students);

// Remover a partir do Marcelo todo o resto do array
students.splice(2);
logger.info(students);
