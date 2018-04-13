import callback_body              from './callback_body'
import TypeFormRequestTransaction from '../../services/interactors/TypeFormRequestTransaction'
// import Mailer from '../../services/mailer'

export const create = ({ body }, res, next) => {
  TypeFormRequestTransaction.call(callback_body,
    (err, result) => {
      console.log(err, result)
    }
  );
  res.status(201).json(body)
};

