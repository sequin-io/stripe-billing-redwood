import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const transferReversals = () => {
  return db.transferReversal.findMany()
}

export const TransferReversal = {
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) =>
    db.transferReversal
      .findUnique({ where: { id: root.id } })
      .balance_transaction(),
  refund_refundTotransfer_reversal_destination_payment_refund_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) =>
    db.transferReversal
      .findUnique({ where: { id: root.id } })
      .refund_refundTotransfer_reversal_destination_payment_refund_id(),
  refund_refundTotransfer_reversal_source_refund_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) =>
    db.transferReversal
      .findUnique({ where: { id: root.id } })
      .refund_refundTotransfer_reversal_source_refund_id(),
  transfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) => db.transferReversal.findUnique({ where: { id: root.id } }).transfer(),
  refund_refund_source_transfer_reversal_idTotransfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) =>
    db.transferReversal
      .findUnique({ where: { id: root.id } })
      .refund_refund_source_transfer_reversal_idTotransfer_reversal(),
  refund_refund_transfer_reversal_idTotransfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof transferReversal>>
  ) =>
    db.transferReversal
      .findUnique({ where: { id: root.id } })
      .refund_refund_transfer_reversal_idTotransfer_reversal(),
}
