module.exports = {
  login: (req, res) => {
    try {
      return res.send({
        response: "user login Api",
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
        response: "user logout api",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
