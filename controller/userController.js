const bcrypt = require("bcrypt");
const response = require("../lib/response");
const User = require("../models/User");

/**
 * * Register user
 */

const register = async (req, res) => {
  try {
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
    !user && response.notfound(res);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && response.badrequest(res, "wrong password");
    response.success(res, `${user.email} logged in`);
  } catch (err) {
    response.error(err);
  }
};

module.exports = { register, login };
