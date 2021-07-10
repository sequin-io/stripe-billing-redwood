import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const sources = () => {
  return db.source.findMany()
}

export const Source = {
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof source>>) =>
    db.source.findUnique({ where: { id: root.id } }).customer(),
  source_mandate_notification: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof source>>
  ) =>
    db.source
      .findUnique({ where: { id: root.id } })
      .source_mandate_notification(),
  source_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof source>>
  ) => db.source.findUnique({ where: { id: root.id } }).source_transaction(),
  topup: (_obj, { root }: ResolverArgs<ReturnType<typeof source>>) =>
    db.source.findUnique({ where: { id: root.id } }).topup(),
}
