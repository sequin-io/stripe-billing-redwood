import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IssuingCardholderCreateArgs>({
  issuingCardholder: {
    one: {
      id: 'String',
      requirements_past_due: 'String',
      spending_controls_allowed_categories: 'String',
      spending_controls_blocked_categories: 'String',
    },
    two: {
      id: 'String',
      requirements_past_due: 'String',
      spending_controls_allowed_categories: 'String',
      spending_controls_blocked_categories: 'String',
    },
  },
})

export type StandardScenario = typeof standard
