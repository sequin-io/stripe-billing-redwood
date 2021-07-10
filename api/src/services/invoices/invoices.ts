import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const invoices = () => {
  return db.invoice.findMany()
}

export const Invoice = {
  charge_chargeToinvoice_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .charge_chargeToinvoice_charge_id(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).customer(),
  payment_method_invoice_default_payment_method_idTopayment_method: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .payment_method_invoice_default_payment_method_idTopayment_method(),
  discount_discountToinvoice_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .discount_discountToinvoice_discount_id(),
  payment_intent_invoice_last_finalization_error_payment_intent_idTopayment_intent:
    (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
      db.invoice
        .findUnique({ where: { id: root.id } })
        .payment_intent_invoice_last_finalization_error_payment_intent_idTopayment_intent(),
  payment_method_invoice_last_finalization_error_payment_method_idTopayment_method:
    (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
      db.invoice
        .findUnique({ where: { id: root.id } })
        .payment_method_invoice_last_finalization_error_payment_method_idTopayment_method(),
  setup_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).setup_intent(),
  account_accountToinvoice_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .account_accountToinvoice_on_behalf_of_id(),
  payment_intent_invoice_payment_intent_idTopayment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .payment_intent_invoice_payment_intent_idTopayment_intent(),
  subscription_invoice_subscription_idTosubscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .subscription_invoice_subscription_idTosubscription(),
  discount_discountToinvoice_total_discount_amounts_discount_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .discount_discountToinvoice_total_discount_amounts_discount_id(),
  tax_rate: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).tax_rate(),
  account_accountToinvoice_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .account_accountToinvoice_transfer_data_destination_id(),
  charge_charge_invoice_idToinvoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .charge_charge_invoice_idToinvoice(),
  credit_note: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).credit_note(),
  customer_balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .customer_balance_transaction(),
  discount_discount_invoice_idToinvoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .discount_discount_invoice_idToinvoice(),
  invoice_item: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).invoice_item(),
  payment_intent_invoiceTopayment_intent_invoice_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .payment_intent_invoiceTopayment_intent_invoice_id(),
  subscription_invoiceTosubscription_latest_invoice_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) =>
    db.invoice
      .findUnique({ where: { id: root.id } })
      .subscription_invoiceTosubscription_latest_invoice_id(),
  usage_record_summary: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof invoice>>
  ) => db.invoice.findUnique({ where: { id: root.id } }).usage_record_summary(),
}
