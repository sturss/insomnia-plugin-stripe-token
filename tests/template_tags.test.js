const assert = require('assert');
const stripePaymentCardTemplate = require('../template-tags/stripe-payment-card-token');
const stripeBankAccountTemplate = require('../template-tags/stripe-bank-account-token');
const {DEFAULT_CARD} = require('../constants');

const context = {
    context: {}
}

jest.mock('stripe', () => (
        jest.fn(() => (
                {tokens: {create: jest.fn(() => ({id: '123'}))}}
            )
        )
    )
)

describe('stripePaymentCardToken', function () {
    it('should create token', async function () {
        const func = stripePaymentCardTemplate['run']
        const token = await func(context, 'sk_test_11111', DEFAULT_CARD)
        assert.equal(token, '123')
    })
});


describe('stripeBankAccountToken', function () {
    it('should create token', async function () {
        const func = stripeBankAccountTemplate['run']
        const token = await func(context, 'sk_test_11111', DEFAULT_CARD)
        assert.equal(token, '123')
    })
});


