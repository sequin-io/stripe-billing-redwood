import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const checkoutSessions = () => {
  return db.checkoutSession.findMany()
}

export const CheckoutSession = {
  customer: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof checkoutSession>>
  ) => db.checkoutSession.findUnique({ where: { id: root.id } }).customer(),
  payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof checkoutSession>>
  ) =>
    db.checkoutSession.findUnique({ where: { id: root.id } }).payment_intent(),
  setup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof checkoutSession>>
  ) => db.checkoutSession.findUnique({ where: { id: root.id } }).setup_intent(),
  subscription: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof checkoutSession>>
  ) => db.checkoutSession.findUnique({ where: { id: root.id } }).subscription(),
}
