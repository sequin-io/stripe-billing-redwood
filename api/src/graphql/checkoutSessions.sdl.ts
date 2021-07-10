export const schema = gql`
  type CheckoutSession {
    id: String!
    allow_promotion_codes: Boolean
    amount_subtotal: BigInt
    amount_total: BigInt
    billing_address_collection: String
    cancel_url: String
    client_reference_id: String
    currency: String
    customer_id: String
    customer_email: String
    livemode: Boolean
    locale: String
    metadata: JSON
    mode: String
    object: String
    payment_intent_id: String
    payment_method_types: [String]!
    payment_status: String
    setup_intent_id: String
    submit_type: String
    subscription_id: String
    success_url: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    total_details_amount_discount: BigInt
    total_details_amount_shipping: BigInt
    total_details_amount_tax: BigInt
    total_details_breakdown: JSON
    customer_details_email: String
    customer_details_tax_exempt: String
    customer_details_tax_ids: JSON
    shipping_address_collection_allowed_countries: [String]!
    payment_method_options_acss_debit: JSON
    customer: Customer
    payment_intent: PaymentIntent
    setup_intent: SetupIntent
    subscription: Subscription
  }

  type Query {
    checkoutSessions: [CheckoutSession!]!
  }

  input CreateCheckoutSessionInput {
    allow_promotion_codes: Boolean
    amount_subtotal: BigInt
    amount_total: BigInt
    billing_address_collection: String
    cancel_url: String
    client_reference_id: String
    currency: String
    customer_id: String
    customer_email: String
    livemode: Boolean
    locale: String
    metadata: JSON
    mode: String
    object: String
    payment_intent_id: String
    payment_method_types: [String]!
    payment_status: String
    setup_intent_id: String
    submit_type: String
    subscription_id: String
    success_url: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    total_details_amount_discount: BigInt
    total_details_amount_shipping: BigInt
    total_details_amount_tax: BigInt
    total_details_breakdown: JSON
    customer_details_email: String
    customer_details_tax_exempt: String
    customer_details_tax_ids: JSON
    shipping_address_collection_allowed_countries: [String]!
    payment_method_options_acss_debit: JSON
  }

  input UpdateCheckoutSessionInput {
    allow_promotion_codes: Boolean
    amount_subtotal: BigInt
    amount_total: BigInt
    billing_address_collection: String
    cancel_url: String
    client_reference_id: String
    currency: String
    customer_id: String
    customer_email: String
    livemode: Boolean
    locale: String
    metadata: JSON
    mode: String
    object: String
    payment_intent_id: String
    payment_method_types: [String]!
    payment_status: String
    setup_intent_id: String
    submit_type: String
    subscription_id: String
    success_url: String
    shipping_address: JSON
    shipping_carrier: String
    shipping_name: String
    shipping_phone: String
    shipping_tracking_number: String
    total_details_amount_discount: BigInt
    total_details_amount_shipping: BigInt
    total_details_amount_tax: BigInt
    total_details_breakdown: JSON
    customer_details_email: String
    customer_details_tax_exempt: String
    customer_details_tax_ids: JSON
    shipping_address_collection_allowed_countries: [String]!
    payment_method_options_acss_debit: JSON
  }
`
