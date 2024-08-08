module.exports = {
  login: (req, res) => {
    try {
      return res.send({
        response: "user login out",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  logout: (req, res) => {
    try {
      return res.send({
        response: "user logout",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
