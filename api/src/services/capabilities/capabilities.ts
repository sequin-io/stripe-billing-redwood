import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const capabilities = () => {
  return db.capability.findMany()
}

export const Capability = {
  account: (_obj, { root }: ResolverArgs<ReturnType<typeof capability>>) =>
    db.capability.findUnique({ where: { id: root.id } }).account(),
}
