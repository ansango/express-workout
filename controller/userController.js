const bcrypt = require("bcrypt");
const response = require("../lib/response");
const User = require("../models/User");

/**
 * * Register user
 */

const register = async (req, res) => {
  try {
    const userCreated = await User.findOne({ email: req.body.email });
    if (!userCreated) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        isAdmin: req.body.isAdmin,
      });

      const user = await newUser.save();
      response.success(res, user);
    } else {
      response.badrequest(res, "user already exists");
    }
  } catch (err) {
    response.error(err);
  }
};

/**
 * * Login user
 */

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      response.notfound(res);
    } else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        response.success(res, `${user.email} logged in`);
      } else {
        response.badrequest(res, "wrong password");
      }
    }
  } catch (err) {
    response.error(err);
  }
};

/**
 * * Create myRoutine
 */

module.exports = { register, login };
