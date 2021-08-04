const init = require("./initController");
const exerciseController = require("./exerciseController");
const routineController = require("./routineController");
const userController = require("./userController");

const getExercises = exerciseController.getExercises;
const createExercise = exerciseController.createExercise;

const getRoutines = routineController.getRoutines;
const createRoutine = routineController.createRoutine;

const registerUser = userController.register;
const loginUser = userController.login;

module.exports = {
  init,
  loginUser,
  registerUser,
  getExercises,
  getRoutines,
  createExercise,
  createRoutine,
};
