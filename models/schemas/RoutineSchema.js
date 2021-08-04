const RoutineSchema = {
  name: { type: String, required: true },
  description: { type: String },
  exercises: { type: Array, default: [] },
};
module.exports = RoutineSchema;
