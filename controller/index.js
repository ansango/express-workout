const init = require("./initController");
const exerciseController = require("./exerciseController");
const routineController = require("./routineController");

const getExercises = exerciseController.getExercises;
const createExercise = exerciseController.createExercise;

const getRoutines = routineController.getRoutines;
const createRoutine = routineController.createRoutine;

module.exports = {
  init,
  getExercises,
  getRoutines,
  createExercise,
  createRoutine,
};
