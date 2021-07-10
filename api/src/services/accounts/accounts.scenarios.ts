import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AccountCreateArgs>({
  account: {
    one: {
      id: 'String',
      requirements_currently_due: 'String',
      requirements_eventually_due: 'String',
      requirements_past_due: 'String',
      requirements_pending_verification: 'String',
    },
    two: {
      id: 'String',
      requirements_currently_due: 'String',
      requirements_eventually_due: 'String',
      requirements_past_due: 'String',
      requirements_pending_verification: 'String',
    },
  },
})

export type StandardScenario = typeof standard
