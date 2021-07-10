import type { Prisma } from '@prisma/client'
import type { ResolverArgs, BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const radarValueLists = () => {
  return db.radarValueList.findMany()
}

export const RadarValueList = {
  radar_value_list_item: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof radarValueList>>
  ) =>
    db.radarValueList
      .findUnique({ where: { id: root.id } })
      .radar_value_list_item(),
}
