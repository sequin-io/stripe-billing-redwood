import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CustomerCreateArgs>({
  customer: {
    one: { id: 'String', preferred_locales: 'String' },
    two: { id: 'String', preferred_locales: 'String' },
  },
})

export type StandardScenario = typeof standard
