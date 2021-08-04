const response = require("../lib/response");

const init = (req, res) => {
  const msg = "express-workout v 1.0";
  try {
    response.success(res, msg);
  } catch (error) {
    response.error(res);
  }
};
module.exports = init;
