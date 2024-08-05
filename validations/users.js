const joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createuser = joi.object({
      username: joi.string().min(3).max(34).required(),
      password: joi.string().min(6).max(18).required(),
    });

    try {
      const validate = await createuser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
