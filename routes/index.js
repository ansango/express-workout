const express = require("express");
const router = express.Router();

const controller = require("../controller/index");
router.get("/", controller.init);

/**
 * * Exercise
 */

router.get("/exercises", controller.getExercises);
router.post("/exercise", controller.createExercise);

/**
 * * Routine
 */

router.get("/routines", controller.getRoutines);
router.post("/routine", controller.createRoutine);

/**
 *  * User
 */

router.post("/auth/register", controller.registerUser);
router.post("/auth/login", controller.loginUser);

module.exports = router;
