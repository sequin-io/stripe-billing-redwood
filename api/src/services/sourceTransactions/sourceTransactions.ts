import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const sourceTransactions = () => {
  return db.sourceTransaction.findMany()
}

export const SourceTransaction = {
  source: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof sourceTransaction>>
  ) => db.sourceTransaction.findUnique({ where: { id: root.id } }).source(),
  platform_tax_fee: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof sourceTransaction>>
  ) =>
    db.sourceTransaction
      .findUnique({ where: { id: root.id } })
      .platform_tax_fee(),
}
