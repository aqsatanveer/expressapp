const user = [];

module.exports = {
  create: (req, res) => {
    try {
      const { username, password } = req.body;
      const isuserexists = users.map((user) => {});
      user.push({ username, password });
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: (req, res) => {
    try {
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  del: (req, res) => {
    try {
      return res.send({
        response: "teacher delete successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
