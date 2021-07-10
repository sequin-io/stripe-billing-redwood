import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CheckoutSessionCreateArgs>({
  checkoutSession: {
    one: {
      id: 'String',
      payment_method_types: 'String',
      shipping_address_collection_allowed_countries: 'String',
    },
    two: {
      id: 'String',
      payment_method_types: 'String',
      shipping_address_collection_allowed_countries: 'String',
    },
  },
})

export type StandardScenario = typeof standard
