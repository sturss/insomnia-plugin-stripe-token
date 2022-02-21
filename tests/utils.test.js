const assert = require('assert');
const {validateStripeTestApiKey, getTestCardExpirationDate} = require('../utils');

describe('validateStripeTestApiKey', function () {
    it('should throw error as stripe key is not provided', function () {
        assert.throws(() => {
                validateStripeTestApiKey(null)
            },
            /Provide Stripe API Token/,
        )
    })

    it('should throw error as stripe key is not correct', function () {
        assert.throws(() => {
                validateStripeTestApiKey('sk_prod_123455')
            },
            /Only test keys starting with `sk_test_` are acceptable/,
        )
    })

    it('should do nothing as validation was successful', function () {
        assert.doesNotThrow(() => {
            validateStripeTestApiKey('sk_test_123455')
        })
    })
});


describe('getTestCardExpirationDate', function () {
    it('The date 10 years from now in the future', function () {
        const expirationDate = getTestCardExpirationDate()
        const expectedDate = (new Date()).getFullYear() + 10
        assert.equal(expirationDate.getFullYear(), expectedDate)
    })
});