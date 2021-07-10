import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const applications = () => {
  return db.application.findMany()
}

export const Application = {
  application_fee: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) => db.application.findUnique({ where: { id: root.id } }).application_fee(),
  billing_portal_configuration: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) =>
    db.application
      .findUnique({ where: { id: root.id } })
      .billing_portal_configuration(),
  charge: (_obj, { root }: ResolverArgs<ReturnType<typeof application>>) =>
    db.application.findUnique({ where: { id: root.id } }).charge(),
  order: (_obj, { root }: ResolverArgs<ReturnType<typeof application>>) =>
    db.application.findUnique({ where: { id: root.id } }).order(),
  payment_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) => db.application.findUnique({ where: { id: root.id } }).payment_intent(),
  setup_attempt: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) => db.application.findUnique({ where: { id: root.id } }).setup_attempt(),
  setup_intent: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) => db.application.findUnique({ where: { id: root.id } }).setup_intent(),
  webhook_endpoint: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof application>>
  ) => db.application.findUnique({ where: { id: root.id } }).webhook_endpoint(),
}
