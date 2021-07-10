import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const billingPortalConfigurations = () => {
  return db.billingPortalConfiguration.findMany()
}

export const BillingPortalConfiguration = {
  application: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof billingPortalConfiguration>>
  ) =>
    db.billingPortalConfiguration
      .findUnique({ where: { id: root.id } })
      .application(),
  billing_portal_session: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof billingPortalConfiguration>>
  ) =>
    db.billingPortalConfiguration
      .findUnique({ where: { id: root.id } })
      .billing_portal_session(),
}
