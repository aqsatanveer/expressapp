const students = [
  {
    username: "sabahat",
    passward: "12343",
  },
];

module.exports = {
  createstudent: (req, res) => {
    try {
      const { username, password } = req.body;
      students.map((user) => {
        if (user.username == username) {
          return res.send({
            response: "student already exists",
          });
        }
      });
      students.push({ username, password });
      return res.send({
        response: {
          username,
          password,
        },
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
        response: "all users ",
        students: students,
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
        response: "delete successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getbyid: (req, res) => {
    try {
      const { username, password } = req.query;
      students.map((user) => {
        if (user.username == username) {
          return res.send({
            response: "user exist",
            users: user,
          });
        }
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
