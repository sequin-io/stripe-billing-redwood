import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const tokens = () => {
  return db.token.findMany()
}

export const Token = {
  bank_account: (_obj, { root }: ResolverArgs<ReturnType<typeof token>>) =>
    db.token.findUnique({ where: { id: root.id } }).bank_account(),
  card: (_obj, { root }: ResolverArgs<ReturnType<typeof token>>) =>
    db.token.findUnique({ where: { id: root.id } }).card(),
}
