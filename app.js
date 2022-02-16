const stripePaymentCardToken = require('./template-tags/stripe-payment-card-token')
const stripeBankAccountToken = require('./template-tags/stripe-bank-account-token')


module.exports.templateTags = [
    stripePaymentCardToken,
    stripeBankAccountToken,
];