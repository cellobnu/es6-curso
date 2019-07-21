const logger = require("../logger");

// /** Array.protopype.pop */

const students = ["Marcelo", "Marcos", "Roberto", "Vini"];
students.pop();

logger.info(students);
// [ 'Marcelo', 'Marcos', 'Roberto' ]