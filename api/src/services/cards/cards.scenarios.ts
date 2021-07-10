import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CardCreateArgs>({
  card: {
    one: { id: 'String', available_payout_methods: 'String' },
    two: { id: 'String', available_payout_methods: 'String' },
  },
})

export type StandardScenario = typeof standard
