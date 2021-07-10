import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const topups = () => {
  return db.topup.findMany()
}

export const Topup = {
  balance_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof topup>>
  ) => db.topup.findUnique({ where: { id: root.id } }).balance_transaction(),
  source: (_obj, { root }: ResolverArgs<ReturnType<typeof topup>>) =>
    db.topup.findUnique({ where: { id: root.id } }).source(),
}
