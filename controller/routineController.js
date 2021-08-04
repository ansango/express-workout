const response = require("../lib/response");

const Routine = require("../models/Routine");

const msg = (action) => `The post has been ${action}`;

const getRoutines = async (req, res) => {
  try {
    const routines = await Routine.find({});
    if (routines.length !== 0) {
      response.success(res, routines);
    } else {
      response.notfound(res);
    }
  } catch (err) {
    response.error(err);
  }
};

const createRoutine = async (req, res) => {
  const newRoutine = new Routine(req.body);
  const routines = await Routine.find({});
  const routineCreated = routines.find(
    (routine) => routine.name === newRoutine.name
  );
  try {
    if (routineCreated) {
      response.badrequest(res, "routine already exists");
    } else {
      const savedRoutine = await newRoutine.save();
      response.success(res, savedRoutine);
    }
  } catch (err) {
    response.error(err);
  }
};

module.exports = {
  getRoutines,
  createRoutine,
};
