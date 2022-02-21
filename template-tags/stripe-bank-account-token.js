const Stripe = require('stripe');

const constants = require('../constants')
const utils = require('../utils')

const {
    BANK_ACCOUNT_NUMBERS, DEFAULT_BANK_ACCOUNT_NUMBER, DEFAULT_BANK_ACCOUNT_HOLDER_TYPE,
    BANK_ACCOUNT_HOLDER, BANK_ACCOUNT_ROUTING_NUMBER, TEMPLATES_INPUTS_DEFINITIONS
} = constants
const {validateStripeTestApiKey} = utils


async function run(context, variableStripeApiKey, accountNumberType, holderType) {
    const stripeApiKey = variableStripeApiKey || context.context['stripe-api-key']
    validateStripeTestApiKey(stripeApiKey)

    const accountNumber = BANK_ACCOUNT_NUMBERS[accountNumberType || DEFAULT_BANK_ACCOUNT_NUMBER]

    const stripe = Stripe(stripeApiKey);
    const token = await stripe.tokens.create({
        bank_account: {
            country: 'US',
            currency: 'usd',
            account_holder_name: BANK_ACCOUNT_HOLDER,
            account_holder_type: holderType || DEFAULT_BANK_ACCOUNT_HOLDER_TYPE,
            routing_number: BANK_ACCOUNT_ROUTING_NUMBER,
            account_number: accountNumber,
        },
    });

    return token.id
}

const STRIPE_BANK_ACCOUNT_TOKEN = {
    name: 'stripe_bank_account_card',
    displayName: 'Stripe Bank Account Token',
    description: 'Generates a Stripe bank account token.',
    args: [
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_API_KEY,
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_BANK_ACCOUNT_NUMBER,
        TEMPLATES_INPUTS_DEFINITIONS.STRIPE_BANK_ACCOUNT_HOLDER_TYPE,
    ],
    run,
}

module.exports = STRIPE_BANK_ACCOUNT_TOKEN
