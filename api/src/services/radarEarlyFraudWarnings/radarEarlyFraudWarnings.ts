import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const radarEarlyFraudWarnings = () => {
  return db.radarEarlyFraudWarning.findMany()
}

export const RadarEarlyFraudWarning = {
  charge: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof radarEarlyFraudWarning>>
  ) =>
    db.radarEarlyFraudWarning.findUnique({ where: { id: root.id } }).charge(),
  payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof radarEarlyFraudWarning>>
  ) =>
    db.radarEarlyFraudWarning
      .findUnique({ where: { id: root.id } })
      .payment_intent(),
}
