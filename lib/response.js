const success = (res, msg) => {
  res.status(200).json(msg);
};

const error = (res) => {
  res.status(500).json({ error: "Internal Server Error" });
};

const badrequest = (res, msg) => {
  res.status(400).json({ error: "Bad request", msg: `${msg}` });
};

const notfound = (res) => {
  res.status(404).json({ error: "Not Found" });
};

const forbidden = (res) => {
  res.status(403).json({ msg: "Permission Denied" });
};

module.exports = {
  success,
  error,
  notfound,
  forbidden,
  badrequest,
};
