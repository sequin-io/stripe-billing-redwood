import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ReserveTransactionCreateArgs>({
  reserveTransaction: { one: { id: 'String' }, two: { id: 'String' } },
})

export type StandardScenario = typeof standard
