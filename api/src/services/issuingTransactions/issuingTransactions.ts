import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const issuingTransactions = () => {
  return db.issuingTransaction.findMany()
}

export const IssuingTransaction = {
  issuing_authorization: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction
      .findUnique({ where: { id: root.id } })
      .issuing_authorization(),
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction
      .findUnique({ where: { id: root.id } })
      .balance_transaction(),
  issuing_card: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction.findUnique({ where: { id: root.id } }).issuing_card(),
  issuing_cardholder: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction
      .findUnique({ where: { id: root.id } })
      .issuing_cardholder(),
  issuing_dispute_issuing_disputeToissuing_transaction_dispute_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction
      .findUnique({ where: { id: root.id } })
      .issuing_dispute_issuing_disputeToissuing_transaction_dispute_id(),
  issuing_dispute_issuing_dispute_transaction_idToissuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingTransaction>>
  ) =>
    db.issuingTransaction
      .findUnique({ where: { id: root.id } })
      .issuing_dispute_issuing_dispute_transaction_idToissuing_transaction(),
}
