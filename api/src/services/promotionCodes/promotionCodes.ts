import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const promotionCodes = () => {
  return db.promotionCode.findMany()
}

export const PromotionCode = {
  coupon: (_obj, { root }: ResolverArgs<ReturnType<typeof promotionCode>>) =>
    db.promotionCode.findUnique({ where: { id: root.id } }).coupon(),
  customer: (_obj, { root }: ResolverArgs<ReturnType<typeof promotionCode>>) =>
    db.promotionCode.findUnique({ where: { id: root.id } }).customer(),
  discount: (_obj, { root }: ResolverArgs<ReturnType<typeof promotionCode>>) =>
    db.promotionCode.findUnique({ where: { id: root.id } }).discount(),
}
