import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: { one: { id: 'String' }, two: { id: 'String' } },
})

export type StandardScenario = typeof standard
