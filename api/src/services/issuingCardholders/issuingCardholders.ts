import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const issuingCardholders = () => {
  return db.issuingCardholder.findMany()
}

export const IssuingCardholder = {
  issuing_authorization: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCardholder>>
  ) =>
    db.issuingCardholder
      .findUnique({ where: { id: root.id } })
      .issuing_authorization(),
  issuing_card: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCardholder>>
  ) =>
    db.issuingCardholder.findUnique({ where: { id: root.id } }).issuing_card(),
  issuing_transaction: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof issuingCardholder>>
  ) =>
    db.issuingCardholder
      .findUnique({ where: { id: root.id } })
      .issuing_transaction(),
}
