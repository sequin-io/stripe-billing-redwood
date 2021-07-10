import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const plans = () => {
  return db.plan.findMany()
}

export const Plan = {
  product: (_obj, { root }: ResolverArgs<ReturnType<typeof plan>>) =>
    db.plan.findUnique({ where: { id: root.id } }).product(),
  invoice_item: (_obj, { root }: ResolverArgs<ReturnType<typeof plan>>) =>
    db.plan.findUnique({ where: { id: root.id } }).invoice_item(),
  line_item: (_obj, { root }: ResolverArgs<ReturnType<typeof plan>>) =>
    db.plan.findUnique({ where: { id: root.id } }).line_item(),
  subscription_item: (_obj, { root }: ResolverArgs<ReturnType<typeof plan>>) =>
    db.plan.findUnique({ where: { id: root.id } }).subscription_item(),
}
