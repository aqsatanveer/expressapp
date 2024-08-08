module.exports = {
  create: (req, res) => {
    try {
      return res.send({
        response: "admin alreay exists",
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
        response: "admin already exist",
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
        response: "admin delete successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
