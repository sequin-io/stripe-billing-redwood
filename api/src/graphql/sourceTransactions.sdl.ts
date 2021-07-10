export const schema = gql`
  type SourceTransaction {
    id: String!
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    source_id: String
    status: String
    type: String
    gbp_credit_transfer_fingerprint: String
    gbp_credit_transfer_funding_method: String
    gbp_credit_transfer_last4: String
    gbp_credit_transfer_reference: String
    gbp_credit_transfer_sender_account_number: String
    gbp_credit_transfer_sender_name: String
    gbp_credit_transfer_sender_sort_code: String
    sepa_credit_transfer_reference: String
    sepa_credit_transfer_sender_iban: String
    sepa_credit_transfer_sender_name: String
    paper_check_available_at: String
    paper_check_invoices: String
    ach_credit_transfer_customer_data: String
    ach_credit_transfer_fingerprint: String
    ach_credit_transfer_last4: String
    ach_credit_transfer_routing_number: String
    chf_credit_transfer_reference: String
    chf_credit_transfer_sender_address_country: String
    chf_credit_transfer_sender_address_line1: String
    chf_credit_transfer_sender_iban: String
    chf_credit_transfer_sender_name: String
    source: Source
    platform_tax_fee: [PlatformTaxFee]!
  }

  type Query {
    sourceTransactions: [SourceTransaction!]!
  }

  input CreateSourceTransactionInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    source_id: String
    status: String
    type: String
    gbp_credit_transfer_fingerprint: String
    gbp_credit_transfer_funding_method: String
    gbp_credit_transfer_last4: String
    gbp_credit_transfer_reference: String
    gbp_credit_transfer_sender_account_number: String
    gbp_credit_transfer_sender_name: String
    gbp_credit_transfer_sender_sort_code: String
    sepa_credit_transfer_reference: String
    sepa_credit_transfer_sender_iban: String
    sepa_credit_transfer_sender_name: String
    paper_check_available_at: String
    paper_check_invoices: String
    ach_credit_transfer_customer_data: String
    ach_credit_transfer_fingerprint: String
    ach_credit_transfer_last4: String
    ach_credit_transfer_routing_number: String
    chf_credit_transfer_reference: String
    chf_credit_transfer_sender_address_country: String
    chf_credit_transfer_sender_address_line1: String
    chf_credit_transfer_sender_iban: String
    chf_credit_transfer_sender_name: String
  }

  input UpdateSourceTransactionInput {
    amount: BigInt
    created: DateTime
    currency: String
    livemode: Boolean
    object: String
    source_id: String
    status: String
    type: String
    gbp_credit_transfer_fingerprint: String
    gbp_credit_transfer_funding_method: String
    gbp_credit_transfer_last4: String
    gbp_credit_transfer_reference: String
    gbp_credit_transfer_sender_account_number: String
    gbp_credit_transfer_sender_name: String
    gbp_credit_transfer_sender_sort_code: String
    sepa_credit_transfer_reference: String
    sepa_credit_transfer_sender_iban: String
    sepa_credit_transfer_sender_name: String
    paper_check_available_at: String
    paper_check_invoices: String
    ach_credit_transfer_customer_data: String
    ach_credit_transfer_fingerprint: String
    ach_credit_transfer_last4: String
    ach_credit_transfer_routing_number: String
    chf_credit_transfer_reference: String
    chf_credit_transfer_sender_address_country: String
    chf_credit_transfer_sender_address_line1: String
    chf_credit_transfer_sender_iban: String
    chf_credit_transfer_sender_name: String
  }
`
