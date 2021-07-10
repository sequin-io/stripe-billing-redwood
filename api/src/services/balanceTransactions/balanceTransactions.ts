import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const balanceTransactions = () => {
  return db.balanceTransaction.findMany()
}

export const BalanceTransaction = {
  application_fee: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .application_fee(),
  charge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) => db.balanceTransaction.findUnique({ where: { id: root.id } }).charge(),
  fee_refund: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction.findUnique({ where: { id: root.id } }).fee_refund(),
  issuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .issuing_transaction(),
  payout_balance_transactionTopayout_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .payout_balance_transactionTopayout_balance_transaction_id(),
  payout_balance_transactionTopayout_failure_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .payout_balance_transactionTopayout_failure_balance_transaction_id(),
  refund_balance_transactionTorefund_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .refund_balance_transactionTorefund_balance_transaction_id(),
  refund_balance_transactionTorefund_failure_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .refund_balance_transactionTorefund_failure_balance_transaction_id(),
  topup: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) => db.balanceTransaction.findUnique({ where: { id: root.id } }).topup(),
  transfer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) => db.balanceTransaction.findUnique({ where: { id: root.id } }).transfer(),
  transfer_reversal: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof balanceTransaction>>
  ) =>
    db.balanceTransaction
      .findUnique({ where: { id: root.id } })
      .transfer_reversal(),
}
