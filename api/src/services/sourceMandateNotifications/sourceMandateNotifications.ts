import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const sourceMandateNotifications = () => {
  return db.sourceMandateNotification.findMany()
}

export const SourceMandateNotification = {
  source: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof sourceMandateNotification>>
  ) =>
    db.sourceMandateNotification
      .findUnique({ where: { id: root.id } })
      .source(),
}
