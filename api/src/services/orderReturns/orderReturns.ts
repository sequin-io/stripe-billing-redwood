import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const orderReturns = () => {
  return db.orderReturn.findMany()
}

export const OrderReturn = {
  sku: (_obj, { root }: ResolverArgs<ReturnType<typeof orderReturn>>) =>
    db.orderReturn.findUnique({ where: { id: root.id } }).sku(),
  order: (_obj, { root }: ResolverArgs<ReturnType<typeof orderReturn>>) =>
    db.orderReturn.findUnique({ where: { id: root.id } }).order(),
  refund: (_obj, { root }: ResolverArgs<ReturnType<typeof orderReturn>>) =>
    db.orderReturn.findUnique({ where: { id: root.id } }).refund(),
}
