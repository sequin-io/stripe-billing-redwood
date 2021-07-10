import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const reviews = () => {
  return db.review.findMany()
}

export const Review = {
  charge_chargeToreview_charge_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof review>>
  ) =>
    db.review
      .findUnique({ where: { id: root.id } })
      .charge_chargeToreview_charge_id(),
  payment_intent_payment_intentToreview_payment_intent_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof review>>
  ) =>
    db.review
      .findUnique({ where: { id: root.id } })
      .payment_intent_payment_intentToreview_payment_intent_id(),
  charge_charge_review_idToreview: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof review>>
  ) =>
    db.review
      .findUnique({ where: { id: root.id } })
      .charge_charge_review_idToreview(),
  payment_intent_payment_intent_review_idToreview: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof review>>
  ) =>
    db.review
      .findUnique({ where: { id: root.id } })
      .payment_intent_payment_intent_review_idToreview(),
}
