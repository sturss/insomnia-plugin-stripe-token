const Stripe = require('stripe');

const constants = require('../constants')
const utils = require('../utils')

const {DEFAULT_CARD, CARD_SPECIFIC_CVC, DEFAULT_CVC, STRIPE_COUNTRY_VALID_CARD_NUMBER, TEMPLATES_INPUTS_DEFINITIONS} = constants
const {getTestCardExpirationDate, validateStripeTestApiKey} = utils

async function run(context, variableStripeApiKey, country) {
    const stripeApiKey = variableStripeApiKey || context.context['stripe-api-key']
    validateStripeTestApiKey(stripeApiKey)

    const cardNumber = STRIPE_COUNTRY_VALID_CARD_NUMBER[country || DEFAULT_CARD]
    const cardCVC = CARD_SPECIFIC_CVC[country] || DEFAULT_CVC
    const expirationDate = getTestCardExpirationDate()

    const stripe = Stripe(stripeApiKey);
    const token = await stripe.tokens.create({
        card: {
            number: cardNumber,
            cvc: cardCVC,
            exp_month: expirationDate.getMonth(),
            exp_year: expirationDate.getFullYear(),
        },
    });

    return token.id
}

const STRIPE_PAYMENT_CARD_TOKEN = {
    name: 'stripe_us_payment_card',
    displayName: 'Stripe Card Token',
    description: 'Generates a Stripe payment card token.',
    args: [
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_API_KEY,
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_TEST_PAYMENT_CARD_COUNTRIES,
    ],
    run
}

module.exports = STRIPE_PAYMENT_CARD_TOKEN
