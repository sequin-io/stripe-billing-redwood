import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const refunds = () => {
  return db.refund.findMany()
}

export const Refund = {
  balance_transaction_balance_transactionTorefund_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof refund>>
  ) =>
    db.refund
      .findUnique({ where: { id: root.id } })
      .balance_transaction_balance_transactionTorefund_balance_transaction_id(),
  charge: (_obj, { root }: ResolverArgs<ReturnType<typeof refund>>) =>
    db.refund.findUnique({ where: { id: root.id } }).charge(),
  balance_transaction_balance_transactionTorefund_failure_balance_transaction_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof refund>>) =>
      db.refund
        .findUnique({ where: { id: root.id } })
        .balance_transaction_balance_transactionTorefund_failure_balance_transaction_id(),
  payment_intent: (_obj, { root }: ResolverArgs<ReturnType<typeof refund>>) =>
    db.refund.findUnique({ where: { id: root.id } }).payment_intent(),
  transfer_reversal_refund_source_transfer_reversal_idTotransfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof refund>>
  ) =>
    db.refund
      .findUnique({ where: { id: root.id } })
      .transfer_reversal_refund_source_transfer_reversal_idTotransfer_reversal(),
  transfer_reversal_refund_transfer_reversal_idTotransfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof refund>>
  ) =>
    db.refund
      .findUnique({ where: { id: root.id } })
      .transfer_reversal_refund_transfer_reversal_idTotransfer_reversal(),
  credit_note: (_obj, { root }: ResolverArgs<ReturnType<typeof refund>>) =>
    db.refund.findUnique({ where: { id: root.id } }).credit_note(),
  order_return: (_obj, { root }: ResolverArgs<ReturnType<typeof refund>>) =>
    db.refund.findUnique({ where: { id: root.id } }).order_return(),
  transfer_reversal_refundTotransfer_reversal_destination_payment_refund_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof refund>>
  ) =>
    db.refund
      .findUnique({ where: { id: root.id } })
      .transfer_reversal_refundTotransfer_reversal_destination_payment_refund_id(),
  transfer_reversal_refundTotransfer_reversal_source_refund_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof refund>>
  ) =>
    db.refund
      .findUnique({ where: { id: root.id } })
      .transfer_reversal_refundTotransfer_reversal_source_refund_id(),
}
