import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const charges = () => {
  return db.charge.findMany()
}

export const Charge = {
  application_fee_application_feeTocharge_application_fee_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .application_fee_application_feeTocharge_application_fee_id(),
  application: (_obj, { root }: ResolverArgs<ReturnType<typeof charge>>) =>
    db.charge.findUnique({ where: { id: root.id } }).application(),
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) => db.charge.findUnique({ where: { id: root.id } }).balance_transaction(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof charge>>) =>
    db.charge.findUnique({ where: { id: root.id } }).customer(),
  account_accountTocharge_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .account_accountTocharge_destination_id(),
  dispute_charge_dispute_idTodispute: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .dispute_charge_dispute_idTodispute(),
  invoice_charge_invoice_idToinvoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .invoice_charge_invoice_idToinvoice(),
  account_accountTocharge_on_behalf_of_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .account_accountTocharge_on_behalf_of_id(),
  order_charge_order_idToorder: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .order_charge_order_idToorder(),
  payment_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof charge>>) =>
    db.charge.findUnique({ where: { id: root.id } }).payment_intent(),
  payment_method: (_obj, { root }: ResolverArgs<ReturnType<typeof charge>>) =>
    db.charge.findUnique({ where: { id: root.id } }).payment_method(),
  review_charge_review_idToreview: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .review_charge_review_idToreview(),
  transfer_charge_source_transfer_idTotransfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .transfer_charge_source_transfer_idTotransfer(),
  account_accountTocharge_transfer_data_destination_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .account_accountTocharge_transfer_data_destination_id(),
  transfer_charge_transfer_idTotransfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .transfer_charge_transfer_idTotransfer(),
  application_fee_application_fee_charge_idTocharge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .application_fee_application_fee_charge_idTocharge(),
  application_fee_application_fee_originating_transaction_idTocharge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .application_fee_application_fee_originating_transaction_idTocharge(),
  dispute_chargeTodispute_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .dispute_chargeTodispute_charge_id(),
  invoice_chargeToinvoice_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .invoice_chargeToinvoice_charge_id(),
  issuer_fraud_record: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) => db.charge.findUnique({ where: { id: root.id } }).issuer_fraud_record(),
  order_chargeToorder_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .order_chargeToorder_charge_id(),
  radar_early_fraud_warning: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .radar_early_fraud_warning(),
  refund: (_obj, { root }: ResolverArgs<ReturnType<typeof charge>>) =>
    db.charge.findUnique({ where: { id: root.id } }).refund(),
  review_chargeToreview_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .review_chargeToreview_charge_id(),
  transfer_chargeTotransfer_destination_payment_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .transfer_chargeTotransfer_destination_payment_id(),
  transfer_chargeTotransfer_source_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof charge>>
  ) =>
    db.charge
      .findUnique({ where: { id: root.id } })
      .transfer_chargeTotransfer_source_transaction_id(),
}
