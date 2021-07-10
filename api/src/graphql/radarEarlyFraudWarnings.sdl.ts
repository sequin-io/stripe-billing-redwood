export const schema = gql`
  type RadarEarlyFraudWarning {
    id: String!
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    livemode: Boolean
    object: String
    payment_intent_id: String
    charge: Charge
    payment_intent: PaymentIntent
  }

  type Query {
    radarEarlyFraudWarnings: [RadarEarlyFraudWarning!]!
  }

  input CreateRadarEarlyFraudWarningInput {
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    livemode: Boolean
    object: String
    payment_intent_id: String
  }

  input UpdateRadarEarlyFraudWarningInput {
    actionable: Boolean
    charge_id: String
    created: DateTime
    fraud_type: String
    livemode: Boolean
    object: String
    payment_intent_id: String
  }
`
