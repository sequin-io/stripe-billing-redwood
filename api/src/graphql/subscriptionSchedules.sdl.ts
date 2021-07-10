export const schema = gql`
  type SubscriptionSchedule {
    id: String!
    canceled_at: DateTime
    completed_at: DateTime
    created: DateTime
    customer_id: String
    end_behavior: String
    livemode: Boolean
    metadata: JSON
    object: String
    released_at: DateTime
    released_subscription: String
    status: String
    subscription_id: String
    current_phase_end_date: DateTime
    current_phase_start_date: DateTime
    phases_add_invoice_items: JSON
    phases_application_fee_percent: Decimal
    phases_billing_cycle_anchor: String
    phases_billing_thresholds: JSON
    phases_collection_method: String
    phases_coupon_id: String
    phases_default_payment_method_id: String
    phases_default_tax_rates: JSON
    phases_end_date: DateTime
    phases_invoice_settings: JSON
    phases_items: JSON
    phases_proration_behavior: String
    phases_start_date: DateTime
    phases_transfer_data: JSON
    phases_trial_end: DateTime
    default_settings_application_fee_percent: Decimal
    default_settings_billing_cycle_anchor: String
    default_settings_billing_thresholds: JSON
    default_settings_collection_method: String
    default_settings_default_payment_method_id: String
    default_settings_invoice_settings: JSON
    default_settings_transfer_data: JSON
    customer: Customer
    payment_method_payment_methodTosubscription_schedule_default_settings_default_payment_method_id: PaymentMethod
    coupon: Coupon
    payment_method_payment_methodTosubscription_schedule_phases_default_payment_method_id: PaymentMethod
    subscription_subscriptionTosubscription_schedule_subscription_id: Subscription
    subscription_subscription_schedule_idTosubscription_schedule: [Subscription]!
  }

  type Query {
    subscriptionSchedules: [SubscriptionSchedule!]!
  }

  input CreateSubscriptionScheduleInput {
    canceled_at: DateTime
    completed_at: DateTime
    created: DateTime
    customer_id: String
    end_behavior: String
    livemode: Boolean
    metadata: JSON
    object: String
    released_at: DateTime
    released_subscription: String
    status: String
    subscription_id: String
    current_phase_end_date: DateTime
    current_phase_start_date: DateTime
    phases_add_invoice_items: JSON
    phases_application_fee_percent: Decimal
    phases_billing_cycle_anchor: String
    phases_billing_thresholds: JSON
    phases_collection_method: String
    phases_coupon_id: String
    phases_default_payment_method_id: String
    phases_default_tax_rates: JSON
    phases_end_date: DateTime
    phases_invoice_settings: JSON
    phases_items: JSON
    phases_proration_behavior: String
    phases_start_date: DateTime
    phases_transfer_data: JSON
    phases_trial_end: DateTime
    default_settings_application_fee_percent: Decimal
    default_settings_billing_cycle_anchor: String
    default_settings_billing_thresholds: JSON
    default_settings_collection_method: String
    default_settings_default_payment_method_id: String
    default_settings_invoice_settings: JSON
    default_settings_transfer_data: JSON
  }

  input UpdateSubscriptionScheduleInput {
    canceled_at: DateTime
    completed_at: DateTime
    created: DateTime
    customer_id: String
    end_behavior: String
    livemode: Boolean
    metadata: JSON
    object: String
    released_at: DateTime
    released_subscription: String
    status: String
    subscription_id: String
    current_phase_end_date: DateTime
    current_phase_start_date: DateTime
    phases_add_invoice_items: JSON
    phases_application_fee_percent: Decimal
    phases_billing_cycle_anchor: String
    phases_billing_thresholds: JSON
    phases_collection_method: String
    phases_coupon_id: String
    phases_default_payment_method_id: String
    phases_default_tax_rates: JSON
    phases_end_date: DateTime
    phases_invoice_settings: JSON
    phases_items: JSON
    phases_proration_behavior: String
    phases_start_date: DateTime
    phases_transfer_data: JSON
    phases_trial_end: DateTime
    default_settings_application_fee_percent: Decimal
    default_settings_billing_cycle_anchor: String
    default_settings_billing_thresholds: JSON
    default_settings_collection_method: String
    default_settings_default_payment_method_id: String
    default_settings_invoice_settings: JSON
    default_settings_transfer_data: JSON
  }
`
