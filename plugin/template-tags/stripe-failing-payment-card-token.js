const Stripe = require('stripe');

const constants = require('../constants');
const utils = require('../utils');

const {
  DEFAULT_FAILING_CARD, FAILING_PAYMENT_CARDS, TEMPLATES_INPUTS_DEFINITIONS, DEFAULT_CVC,
} = constants;
const {getTestCardExpirationDate, validateStripeTestApiKey} = utils;

async function run(context, variableStripeApiKey, country) {
  const stripeApiKey = variableStripeApiKey || context.context['stripe-api-key'];
  validateStripeTestApiKey(stripeApiKey);

  const cardNumber = FAILING_PAYMENT_CARDS[country || DEFAULT_FAILING_CARD];
  const expirationDate = getTestCardExpirationDate();

  const stripe = new Stripe(stripeApiKey);
  const token = await stripe.tokens.create({
    card: {
      number: cardNumber,
      cvc: DEFAULT_CVC,
      exp_month: expirationDate.getMonth(),
      exp_year: expirationDate.getFullYear(),
    },
  });

  return token.id;
}

const STRIPE_PAYMENT_CARD_TOKEN = {
  name: 'stripe_failing_payment_card',
  displayName: 'Stripe Failing Card Token',
  description: 'Generates a Stripe payment card token that fails upon usage.',
  args: [
    TEMPLATES_INPUTS_DEFINITIONS.STRIPE_API_KEY,
    TEMPLATES_INPUTS_DEFINITIONS.STRIPE_FAILING_PAYMENT_CARDS,
  ],
  run,
};

module.exports = STRIPE_PAYMENT_CARD_TOKEN;
