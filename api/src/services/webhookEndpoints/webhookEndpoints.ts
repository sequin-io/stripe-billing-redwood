import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const webhookEndpoints = () => {
  return db.webhookEndpoint.findMany()
}

export const WebhookEndpoint = {
  application: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof webhookEndpoint>>
  ) => db.webhookEndpoint.findUnique({ where: { id: root.id } }).application(),
}
