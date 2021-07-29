import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const customers = () => {
  return db.customer.findMany()
}

export const customer = ({ id }) => {
  return db.customer.findUnique({ where: { id } })
}

export const Customer = {
  discount_customer_discount_idTodiscount: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer
      .findUnique({ where: { id: root.id } })
      .discount_customer_discount_idTodiscount(),
  default_payment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer.findUnique({ where: { id: root.id } }).default_payment_method(),
  alipay_account: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).alipay_account(),
  bank_account: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).bank_account(),
  billing_portal_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer.findUnique({ where: { id: root.id } }).billing_portal_session(),
  bitcoin_receiver: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) => db.customer.findUnique({ where: { id: root.id } }).bitcoin_receiver(),
  card: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).card(),
  charge: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).charge(),
  checkout_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) => db.customer.findUnique({ where: { id: root.id } }).checkout_session(),
  credit_note: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).credit_note(),
  customer_balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer
      .findUnique({ where: { id: root.id } })
      .customer_balance_transaction(),
  discount_customerTodiscount_customer_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer
      .findUnique({ where: { id: root.id } })
      .discount_customerTodiscount_customer_id(),
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).invoice(),
  invoice_item: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).invoice_item(),
  order: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).order(),
  payment_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).payment_intent(),
  payment_method_customerTopayment_method_customer_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer
      .findUnique({ where: { id: root.id } })
      .payment_method_customerTopayment_method_customer_id(),
  promotion_code: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).promotion_code(),
  setup_attempt: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).setup_attempt(),
  setup_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).setup_intent(),
  source: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).source(),
  subscription: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).subscription(),
  subscription_schedule: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof customer>>
  ) =>
    db.customer.findUnique({ where: { id: root.id } }).subscription_schedule(),
  tax_id: (_obj, { root }: ResolverArgs<ReturnType<typeof customer>>) =>
    db.customer.findUnique({ where: { id: root.id } }).tax_id(),
}
