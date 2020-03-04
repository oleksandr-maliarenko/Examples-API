import * as BaseJoi from '@hapi/joi';
import * as JoiDate from '@hapi/joi-date';
const Joi = BaseJoi.extend(JoiDate);

export const postTypesResponse = Joi.object({
  id: Joi.number().required(),
  userId: Joi.number().required(),
  title: Joi.string()
    .min(1)
    .required(),
  body: Joi.string()
    .min(1)
    .max(200)
    .required(),
}).required();
