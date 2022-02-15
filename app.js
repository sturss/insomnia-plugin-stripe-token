const Stripe = require('stripe');

const constants = require('./constants')
const utils = require('./utils')

const {DEFAULT_CARD, STRIPE_COUNTRY_VALID_CARD_NUMBER, TEMPLATES_INPUTS_DEFINITIONS} = constants
const {getTestCardExpirationDate, validateStripeTestApiKey} = utils

module.exports.templateTags = [{
    name: 'stripe_us_payment_card',
    displayName: 'Stripe Card Token',
    description: 'Generates a Stripe payment card token.',
    args: [
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_API_KEY,
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_TEST_PAYMENT_CARD_COUNTRIES,
    ],
    async run(context, variableStripeApiKey, country) {
        const stripeApiKey = variableStripeApiKey || context.context['stripe-api-key']
        validateStripeTestApiKey(stripeApiKey)

        const cardNumber = STRIPE_COUNTRY_VALID_CARD_NUMBER[country || DEFAULT_CARD]
        const expirationDate = getTestCardExpirationDate()
        console.log(expirationDate)
        console.log(expirationDate.getFullYear())
        console.log(expirationDate.getMonth())

        const stripe = Stripe(stripeApiKey);
        const token = await stripe.tokens.create({
            card: {
                number: cardNumber,
                exp_month: expirationDate.getMonth(),
                exp_year: expirationDate.getFullYear(),
                cvc: '314',
            },
        });

        return token.id
    }
}];