import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const paymentIntents = () => {
  return db.paymentIntent.findMany()
}

export const PaymentIntent = {
  application: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) => db.paymentIntent.findUnique({ where: { id: root.id } }).application(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
    db.paymentIntent.findUnique({ where: { id: root.id } }).customer(),
  invoice_invoiceTopayment_intent_invoice_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .invoice_invoiceTopayment_intent_invoice_id(),
  payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) => db.paymentIntent.findUnique({ where: { id: root.id } }).payment_intent(),
  payment_method_payment_intent_last_payment_error_payment_method_idTopayment_method:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
      db.paymentIntent
        .findUnique({ where: { id: root.id } })
        .payment_method_payment_intent_last_payment_error_payment_method_idTopayment_method(),
  setup_intent_payment_intent_last_payment_error_setup_intent_idTosetup_intent:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
      db.paymentIntent
        .findUnique({ where: { id: root.id } })
        .setup_intent_payment_intent_last_payment_error_setup_intent_idTosetup_intent(),
  account_accountTopayment_intent_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .account_accountTopayment_intent_on_behalf_of_id(),
  payment_method_payment_intent_payment_method_idTopayment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .payment_method_payment_intent_payment_method_idTopayment_method(),
  review_payment_intent_review_idToreview: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .review_payment_intent_review_idToreview(),
  account_accountTopayment_intent_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .account_accountTopayment_intent_transfer_data_destination_id(),
  charge: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
    db.paymentIntent.findUnique({ where: { id: root.id } }).charge(),
  checkout_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent.findUnique({ where: { id: root.id } }).checkout_session(),
  dispute: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
    db.paymentIntent.findUnique({ where: { id: root.id } }).dispute(),
  invoice_invoice_last_finalization_error_payment_intent_idTopayment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .invoice_invoice_last_finalization_error_payment_intent_idTopayment_intent(),
  invoice_invoice_payment_intent_idTopayment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .invoice_invoice_payment_intent_idTopayment_intent(),
  other_payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .other_payment_intent(),
  radar_early_fraud_warning: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .radar_early_fraud_warning(),
  refund: (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
    db.paymentIntent.findUnique({ where: { id: root.id } }).refund(),
  review_payment_intentToreview_payment_intent_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) =>
    db.paymentIntent
      .findUnique({ where: { id: root.id } })
      .review_payment_intentToreview_payment_intent_id(),
  setup_attempt: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof paymentIntent>>
  ) => db.paymentIntent.findUnique({ where: { id: root.id } }).setup_attempt(),
  setup_intent_payment_intentTosetup_intent_last_setup_error_payment_intent_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof paymentIntent>>) =>
      db.paymentIntent
        .findUnique({ where: { id: root.id } })
        .setup_intent_payment_intentTosetup_intent_last_setup_error_payment_intent_id(),
}
