import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const payouts = () => {
  return db.payout.findMany()
}

export const Payout = {
  balance_transaction_balance_transactionTopayout_balance_transaction_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof payout>>
  ) =>
    db.payout
      .findUnique({ where: { id: root.id } })
      .balance_transaction_balance_transactionTopayout_balance_transaction_id(),
  balance_transaction_balance_transactionTopayout_failure_balance_transaction_id:
    (_obj, { root }: ResolverArgs<ReturnType<typeof payout>>) =>
      db.payout
        .findUnique({ where: { id: root.id } })
        .balance_transaction_balance_transactionTopayout_failure_balance_transaction_id(),
  payout_payoutTopayout_original_payout_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof payout>>
  ) =>
    db.payout
      .findUnique({ where: { id: root.id } })
      .payout_payoutTopayout_original_payout_id(),
  payout_payoutTopayout_reversed_by_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof payout>>
  ) =>
    db.payout
      .findUnique({ where: { id: root.id } })
      .payout_payoutTopayout_reversed_by_id(),
  other_payout_payoutTopayout_original_payout_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof payout>>
  ) =>
    db.payout
      .findUnique({ where: { id: root.id } })
      .other_payout_payoutTopayout_original_payout_id(),
  other_payout_payoutTopayout_reversed_by_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof payout>>
  ) =>
    db.payout
      .findUnique({ where: { id: root.id } })
      .other_payout_payoutTopayout_reversed_by_id(),
}
