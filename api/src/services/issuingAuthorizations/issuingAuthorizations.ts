import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const issuingAuthorizations = () => {
  return db.issuingAuthorization.findMany()
}

export const IssuingAuthorization = {
  issuing_card: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingAuthorization>>
  ) =>
    db.issuingAuthorization
      .findUnique({ where: { id: root.id } })
      .issuing_card(),
  issuing_cardholder: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingAuthorization>>
  ) =>
    db.issuingAuthorization
      .findUnique({ where: { id: root.id } })
      .issuing_cardholder(),
  issuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingAuthorization>>
  ) =>
    db.issuingAuthorization
      .findUnique({ where: { id: root.id } })
      .issuing_transaction(),
}
