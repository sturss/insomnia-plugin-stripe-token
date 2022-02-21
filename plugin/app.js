const stripePaymentCardToken = require('./template-tags/stripe-payment-card-token');
const stripeBankAccountToken = require('./template-tags/stripe-bank-account-token');
const stripeFailingCardToken = require('./template-tags/stripe-failing-payment-card-token.js');


module.exports.templateTags = [
  stripePaymentCardToken,
  stripeBankAccountToken,
  stripeFailingCardToken,
];
