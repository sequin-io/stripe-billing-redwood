import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const usageRecordSummaries = () => {
  return db.usageRecordSummary.findMany()
}

export const UsageRecordSummary = {
  invoice: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof usageRecordSummary>>
  ) => db.usageRecordSummary.findUnique({ where: { id: root.id } }).invoice(),
  subscription_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof usageRecordSummary>>
  ) =>
    db.usageRecordSummary
      .findUnique({ where: { id: root.id } })
      .subscription_item(),
}
