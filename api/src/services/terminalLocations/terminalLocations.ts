import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const terminalLocations = () => {
  return db.terminalLocation.findMany()
}

export const TerminalLocation = {
  terminal_reader: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof terminalLocation>>
  ) =>
    db.terminalLocation
      .findUnique({ where: { id: root.id } })
      .terminal_reader(),
}
