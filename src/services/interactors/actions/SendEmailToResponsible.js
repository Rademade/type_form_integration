import Mailer from '../../mailer'

export default () => {
  return ['deal', (result, callback) => {
    let deal = result.deal[0];
    Mailer.send({
      from: deal.cc_email,
      to: process.env.DEFAULT_ASSIGNE,
      subject: 'NEW TYPED_FORM REQUEST',
      deal: deal}, callback)
  }]
}
