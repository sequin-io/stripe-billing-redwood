export const schema = gql`
  type Customer {
    id: String!
    balance: BigInt
    created: DateTime
    currency: String
    delinquent: Boolean
    description: String
    discount_id: String
    email: String
    invoice_prefix: String
    livemode: Boolean
    metadata: JSON
    name: String
    next_invoice_sequence: BigInt
    object: String
    phone: String
    preferred_locales: [String]!
    tax_exempt: String
    deleted: Boolean
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    invoice_settings_custom_fields: JSON
    invoice_settings_default_payment_method_id: String
    invoice_settings_footer: String
    discount_customer_discount_idTodiscount: Discount
    payment_method_customer_invoice_settings_default_payment_method_idTopayment_method: PaymentMethod
    alipay_account: [AlipayAccount]!
    bank_account: [BankAccount]!
    billing_portal_session: [BillingPortalSession]!
    bitcoin_receiver: [BitcoinReceiver]!
    card: [Card]!
    charge: [Charge]!
    checkout_session: [CheckoutSession]!
    credit_note: [CreditNote]!
    customer_balance_transaction: [CustomerBalanceTransaction]!
    discount_customerTodiscount_customer_id: [Discount]!
    invoice: [Invoice]!
    invoice_item: [InvoiceItem]!
    order: [Order]!
    payment_intent: [PaymentIntent]!
    payment_method_customerTopayment_method_customer_id: [PaymentMethod]!
    promotion_code: [PromotionCode]!
    setup_attempt: [SetupAttempt]!
    setup_intent: [SetupIntent]!
    source: [Source]!
    subscription: [Subscription]!
    subscription_schedule: [SubscriptionSchedule]!
    tax_id: [TaxId]!
  }

  type Query {
    customers: [Customer!]!
    customer(id: String): Customer
  }

  input CreateCustomerInput {
    balance: BigInt
    created: DateTime
    currency: String
    delinquent: Boolean
    description: String
    discount_id: String
    email: String
    invoice_prefix: String
    livemode: Boolean
    metadata: JSON
    name: String
    next_invoice_sequence: BigInt
    object: String
    phone: String
    preferred_locales: [String]!
    tax_exempt: String
    deleted: Boolean
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    invoice_settings_custom_fields: JSON
    invoice_settings_default_payment_method_id: String
    invoice_settings_footer: String
  }

  input UpdateCustomerInput {
    balance: BigInt
    created: DateTime
    currency: String
    delinquent: Boolean
    description: String
    discount_id: String
    email: String
    invoice_prefix: String
    livemode: Boolean
    metadata: JSON
    name: String
    next_invoice_sequence: BigInt
    object: String
    phone: String
    preferred_locales: [String]!
    tax_exempt: String
    deleted: Boolean
    address_city: String
    address_country: String
    address_line1: String
    address_line2: String
    address_postal_code: String
    address_state: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    invoice_settings_custom_fields: JSON
    invoice_settings_default_payment_method_id: String
    invoice_settings_footer: String
  }
`
