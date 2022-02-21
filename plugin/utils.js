function validateStripeTestApiKey(key) {
  if (!key) {
    throw Error('Provide Stripe API Token');
  } else if (!key.startsWith('sk_test_')) {
    throw Error('Only test keys starting with `sk_test_` are acceptable');
  }
}


function getTestCardExpirationDate() {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 10);
  return expirationDate;
}

module.exports = {
  getTestCardExpirationDate,
  validateStripeTestApiKey,
};
