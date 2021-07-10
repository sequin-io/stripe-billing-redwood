import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const coupons = () => {
  return db.coupon.findMany()
}

export const Coupon = {
  discount: (_obj, { root }: ResolverArgs<ReturnType<typeof coupon>>) =>
    db.coupon.findUnique({ where: { id: root.id } }).discount(),
  promotion_code: (_obj, { root }: ResolverArgs<ReturnType<typeof coupon>>) =>
    db.coupon.findUnique({ where: { id: root.id } }).promotion_code(),
  subscription_schedule: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof coupon>>
  ) => db.coupon.findUnique({ where: { id: root.id } }).subscription_schedule(),
}
