import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LineItemCreateArgs>({
  lineItem: {
    one: { id: 'String', discounts: 'String' },
    two: { id: 'String', discounts: 'String' },
  },
})

export type StandardScenario = typeof standard
