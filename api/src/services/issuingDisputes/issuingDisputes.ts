import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const issuingDisputes = () => {
  return db.issuingDispute.findMany()
}

export const IssuingDispute = {
  issuing_transaction_issuing_dispute_transaction_idToissuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingDispute>>
  ) =>
    db.issuingDispute
      .findUnique({ where: { id: root.id } })
      .issuing_transaction_issuing_dispute_transaction_idToissuing_transaction(),
  issuing_transaction_issuing_disputeToissuing_transaction_dispute_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingDispute>>
  ) =>
    db.issuingDispute
      .findUnique({ where: { id: root.id } })
      .issuing_transaction_issuing_disputeToissuing_transaction_dispute_id(),
}
