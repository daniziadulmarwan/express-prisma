import Joi from "joi";

const profileSchema = Joi.object({
  nisn: Joi.number().required(),
  user_id: Joi.number().required(),
});

export { profileSchema };
