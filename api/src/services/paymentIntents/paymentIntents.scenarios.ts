import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PaymentIntentCreateArgs>({
  paymentIntent: {
    one: { id: 'String', payment_method_types: 'String' },
    two: { id: 'String', payment_method_types: 'String' },
  },
})

export type StandardScenario = typeof standard
