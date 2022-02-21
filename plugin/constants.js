const DEFAULT_CARD = 'us_visa';
const DEFAULT_CVC = '333';
const DEFAULT_BANK_ACCOUNT_NUMBER = 'success';
const DEFAULT_FAILING_CARD = 'insufficient_funds';

const STRIPE_COUNTRY_VALID_CARD_NUMBER = {
  us_visa: '4242424242424242',
  us_visa_debit: '4000056655665556',
  us_mastercard: '5555555555554444',
  us_mastercard_debit: '5200828282828210',
  us_mastercard_prepaid: '5105105105105100',
  us_american_express: '378282246310005',
  us_discover: '6011111111111117',
  us_diners_club: '3056930009020004',
  us_jcb: '3566002020360505',
  us_union_pay: '6200000000000005',
  br_visa: '4000000760000002',
  mx_visa: '4000004840008001',
  ca_visa: '4000001240000000',
  ae_visa: '5200007840000022',
  at_visa: '4000000400000008',
  be_visa: '4000000560000004',
  bg_visa: '4000001000000000',
  cy_visa: '4000001960000008',
  cz_visa: '4000002030000002',
  dk_visa: '4000002080000001',
  ee_visa: '4000002330000009',
  fi_visa: '4000002460000001',
  fr_visa: '4000002500000003',
  de_visa: '4000002760000016',
  gr_visa: '4000003000000030',
  hu_visa: '4000003480000005',
  ie_visa: '4000003720000005',
  it_visa: '4000003800000008',
  lv_visa: '4000004280000005',
  lt_visa: '4000004400000000',
  lu_visa: '4000004420000006',
  mt_visa: '4000004700000007',
  nl_visa: '4000005280000002',
  no_visa: '4000005780000007',
  pl_visa: '4000006160000005',
  pt_visa: '4000006200000007',
  ro_visa: '4000006420000001',
  ru_visa: '4000006430000009',
  si_visa: '4000007050000006',
  sk_visa: '4000007030000001',
  es_visa: '4000007240000007',
  se_visa: '4000007520000008',
  ch_visa: '4000007560000009',
  gb_visa: '4000008260000000',
  gb_visa_debit: '4000058260000005',
  gb_mastercard: '5555558265554449',
  au_visa: '4000000360000006',
  cn_visa: '4000001560000002',
  hk_visa: '4000003440000004',
  in_visa: '4000003560000008',
  jp_visa: '4000003920000003',
  jp_jcb: '3530111333300000',
  my_visa: '4000004580000002',
  nz_visa: '4000005540000008',
  sg_visa: '4000007020000003',
  th_visa: '4000007640000003',
  th_visa_debit: '4000057640000008',
};

const FAILING_PAYMENT_CARDS = {
  address_and_zip_verification_fails: '4000000000000010',
  address_verification_fails: '4000000000000028',
  zip_verification_fails: '4000000000000036',
  address_and_zip_verification_unavailable: '4000000000000044',
  refund_fails: '4000000000005126',
  refund_pending: '4000000000007726',
  cvc_fails: '4000000000000101',
  highest_risk_level: '4000000000004954',
  fraudulent_risk_level: '4100000000000019',
  card_declined: '4000000000000002',
  insufficient_funds: '4000000000009995',
  lost_card: '4000000000009987',
  expired_card: '4000000000000069',
  incorrect_cvc: '4000000000000127',
  processing_error: '4000000000000119',
  incorrect_number: '4242424242424241',
};

const CARD_SPECIFIC_CVC = {
  us_american_express: '4444',
};

const BANK_ACCOUNT_ROUTING_NUMBER = '110000000';
const BANK_ACCOUNT_HOLDER = 'Jenny Rosen';
const DEFAULT_BANK_ACCOUNT_HOLDER_TYPE = 'individual';

const BANK_ACCOUNT_NUMBERS = {
  success: '000123456789',
  fail_on_use: '000111111116',
  closed: '000111111113',
  insufficient_funds: '000222222227',
  debit_not_authorized: '000333333335',
  invalid_currency: '000444444440',
};

const TEMPLATES_INPUTS_DEFINITIONS = {
  STRIPE_API_KEY: {
    displayName: 'Stripe API Key',
    description: 'Stripe test key used to create a test payment card token',
    type: 'string',
    defaultValue: null,
    placeholder: 'sk_test_',
  },
  STRIPE_TEST_PAYMENT_CARD_COUNTRIES: {
    displayName: 'Country',
    type: 'enum',
    defaultValue: 'us_visa',
    options: [
      {
        displayName: 'United States (Visa)',
        value: 'us_visa',
      },
      {
        displayName: 'United States (Visa Debit)',
        value: 'us_visa_debit',
      },
      {
        displayName: 'United States (Mastercard)',
        value: 'us_mastercard',
      },
      {
        displayName: 'United States (Mastercard Debit)',
        value: 'us_mastercard_debit',
      },
      {
        displayName: 'United States (Mastercard Prepaid)',
        value: 'us_mastercard_prepaid',
      },
      {
        displayName: 'United States (American Express)',
        value: 'us_american_express',
      },
      {
        displayName: 'United States (Discover)',
        value: 'us_discover',
      },
      {
        displayName: 'United States (Diners Club)',
        value: 'us_diners_club',
      },
      {
        displayName: 'United States (JCB)',
        value: 'us_jcb',
      },
      {
        displayName: 'United States (Union Pay)',
        value: 'us_union_pay',
      },
      {
        displayName: 'Brazil (BR)',
        value: 'br_visa',
      },
      {
        displayName: 'Canada (CA)',
        value: 'ca_visa',
      },
      {
        displayName: 'Mexico (MX)',
        value: 'mx_visa',
      },
      {
        displayName: 'United Arab Emirates (Visa)',
        value: 'ae_visa',
      },
      {
        displayName: 'United Arab Emirates (Visa)',
        value: 'ae_visa',
      },
      {
        displayName: 'Austria (Visa)',
        value: 'at_visa',
      },
      {
        displayName: 'Belgium (Visa)',
        value: 'be_visa',
      },
      {
        displayName: 'Bulgaria (Visa)',
        value: 'bg_visa',
      },
      {
        displayName: 'Cyprus (Visa)',
        value: 'cy_visa',
      },
      {
        displayName: 'Czech Republic (Visa)',
        value: 'cz_visa',
      },
      {
        displayName: 'Denmark (Visa)',
        value: 'dk_visa',
      },
      {
        displayName: 'Estonia (Visa)',
        value: 'ee_visa',
      },
      {
        displayName: 'Finland (Visa)',
        value: 'fi_visa',
      },
      {
        displayName: 'France (Visa)',
        value: 'fr_visa',
      },
      {
        displayName: 'Germany (Visa)',
        value: 'de_visa',
      },
      {
        displayName: 'Greece (Visa)',
        value: 'gr_visa',
      },
      {
        displayName: 'Hungary (Visa)',
        value: 'hu_visa',
      },
      {
        displayName: 'Ireland (Visa)',
        value: 'ie_visa',
      },
      {
        displayName: 'Italy (Visa)',
        value: 'it_visa',
      },
      {
        displayName: 'Latvia (Visa)',
        value: 'lv_visa',
      },
      {
        displayName: 'Lithuania (Visa)',
        value: 'lt_visa',
      },
      {
        displayName: 'Luxembourg (Visa)',
        value: 'lu_visa',
      },
      {
        displayName: 'Malta (Visa)',
        value: 'mt_visa',
      },
      {
        displayName: 'Netherlands (Visa)',
        value: 'nl_visa',
      },
      {
        displayName: 'Norway (Visa)',
        value: 'no_visa',
      },
      {
        displayName: 'Poland (Visa)',
        value: 'pl_visa',
      },
      {
        displayName: 'Portugal (Visa)',
        value: 'pt_visa',
      },
      {
        displayName: 'Romania (Visa)',
        value: 'ro_visa',
      },
      {
        displayName: 'Russian Federation (Visa)',
        value: 'ru_visa',
      },
      {
        displayName: 'Slovenia (Visa)',
        value: 'si_visa',
      },
      {
        displayName: 'Slovakia (Visa)',
        value: 'sk_visa',
      },
      {
        displayName: 'Spain (Visa)',
        value: 'es_visa',
      },
      {
        displayName: 'Sweden (Visa)',
        value: 'se_visa',
      },
      {
        displayName: 'Switzerland (Visa)',
        value: 'ch_visa',
      },
      {
        displayName: 'United Kingdom (Visa)',
        value: 'gb_visa',
      },
      {
        displayName: 'United Kingdom (Visa (debit))',
        value: 'gb_visa_debit',
      },
      {
        displayName: 'United Kingdom (Mastercard)',
        value: 'gb_mastercard',
      },
      {
        displayName: 'Australia (Visa)',
        value: 'au_visa',
      },
      {
        displayName: 'China (Visa)',
        value: 'cn_visa',
      },
      {
        displayName: 'Hong Kong (Visa)',
        value: 'hk_visa',
      },
      {
        displayName: 'India (Visa)',
        value: 'in_visa',
      },
      {
        displayName: 'Japan (Visa)',
        value: 'jp_visa',
      },
      {
        displayName: 'Japan (JCB)',
        value: 'jp_jcb',
      },
      {
        displayName: 'Malaysia (Visa)',
        value: 'my_visa',
      },
      {
        displayName: 'New Zealand (Visa)',
        value: 'nz_visa',
      },
      {
        displayName: 'Singapore (Visa)',
        value: 'sg_visa',
      },
      {
        displayName: 'Thailand (Visa (credit))',
        value: 'th_visa_credit',
      },
      {
        displayName: 'Thailand (Visa (debit))',
        value: 'th_visa_debit',
      },
    ],
  },
  STRIPE_BANK_ACCOUNT_NUMBER: {
    displayName: 'Bank Account',
    type: 'enum',
    defaultValue: 'success',
    options: [
      {
        value: 'success',
        displayName: 'Success',
      },
      {
        value: 'fail_on_use',
        displayName: 'Failure Upon Use',
      },
      {
        value: 'closed',
        displayName: 'Closed',
      },
      {
        value: 'insufficient_funds',
        displayName: 'Insufficient Funds',
      },
      {
        value: 'debit_not_authorized',
        displayName: 'Debit not Authorized',
      },
      {
        value: 'invalid_currency',
        displayName: 'Invalid Currency',
      },
    ],
  },
  STRIPE_FAILING_PAYMENT_CARDS: {
    displayName: 'Type',
    type: 'enum',
    defaultValue: 'us_visa',
    options: [
      {
        displayName: 'The address_line1_check and address_zip_check verifications fail',
        value: 'address_and_zip_verification_fails',
      },
      {
        displayName: 'Charge succeeds but the address_line1_check verification fails',
        value: 'address_verification_fails',
      },
      {
        displayName: 'The address_zip_check verification fails',
        value: 'zip_verification_fails',
      },
      {
        displayName: 'Charge succeeds but the address_zip_check and address_line1_check ' +
                    'verifications are unavailable',
        value: 'address_and_zip_verification_unavailable',
      },
      {
        displayName: 'Charge succeeds but refunding a captured charge fails asynchronously ' +
                    'with a failure_reason of expired_or_canceled_card',
        value: 'refund_fails',
      },
      {
        displayName: 'Charge succeeds but refunds are initially held in the pending state',
        value: 'refund_pending',
      },
      {
        displayName: 'If a CVC number is provided, the cvc_check fails',
        value: 'cvc_fails',
      },
      {
        displayName: 'Results in a charge with a risk_level of highest',
        value: 'highest_risk_level',
      },
      {
        displayName: 'The charge is blocked as it’s considered fraudulent',
        value: 'fraudulent_risk_level',
      },
      {
        displayName: 'Charge is declined with a card_declined code',
        value: 'card_declined',
      },
      {
        displayName: 'The decline_code attribute is insufficient_funds',
        value: 'insufficient_funds',
      },
      {
        displayName: 'The decline_code attribute is lost_card',
        value: 'lost_card',
      },
      {
        displayName: 'The decline_code attribute is expired_card',
        value: 'expired_card',
      },
      {
        displayName: 'Charge is declined with an incorrect_cvc code',
        value: 'incorrect_cvc',
      },
      {
        displayName: 'Charge is declined with a processing_error code',
        value: 'processing_error',
      },
      {
        displayName: 'Charge is declined with an incorrect_number code',
        value: 'incorrect_number',
      },
    ],
  },
  STRIPE_BANK_ACCOUNT_HOLDER_TYPE: {
    displayName: 'Holder Type',
    type: 'enum',
    defaultValue: 'individual',
    options: [
      {
        displayName: 'Individual',
        value: 'individual',
      },
      {
        displayName: 'Company',
        value: 'company',
      },
    ],
  },
};

module.exports = {
  DEFAULT_CARD,
  DEFAULT_CVC,
  DEFAULT_BANK_ACCOUNT_NUMBER,
  DEFAULT_BANK_ACCOUNT_HOLDER_TYPE,
  CARD_SPECIFIC_CVC,
  TEMPLATES_INPUTS_DEFINITIONS,
  STRIPE_COUNTRY_VALID_CARD_NUMBER,
  BANK_ACCOUNT_NUMBERS,
  BANK_ACCOUNT_ROUTING_NUMBER,
  BANK_ACCOUNT_HOLDER,
  DEFAULT_FAILING_CARD,
  FAILING_PAYMENT_CARDS,
};
