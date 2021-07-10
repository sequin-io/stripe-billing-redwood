import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const people = () => {
  return db.person.findMany()
}

export const Person = {
  account_accountToperson_account_id: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof person>>
  ) =>
    db.person
      .findUnique({ where: { id: root.id } })
      .account_accountToperson_account_id(),
  account_account_individual_idToperson: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof person>>
  ) =>
    db.person
      .findUnique({ where: { id: root.id } })
      .account_account_individual_idToperson(),
}
