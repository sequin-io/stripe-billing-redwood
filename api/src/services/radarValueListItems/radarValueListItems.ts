import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const radarValueListItems = () => {
  return db.radarValueListItem.findMany()
}

export const RadarValueListItem = {
  radar_value_list: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof radarValueListItem>>
  ) =>
    db.radarValueListItem
      .findUnique({ where: { id: root.id } })
      .radar_value_list(),
}
