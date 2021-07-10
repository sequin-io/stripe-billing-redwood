import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CountrySpecCreateArgs>({
  countrySpec: {
    one: {
      id: 'String',
      supported_payment_currencies: 'String',
      supported_payment_methods: 'String',
      supported_transfer_countries: 'String',
    },
    two: {
      id: 'String',
      supported_payment_currencies: 'String',
      supported_payment_methods: 'String',
      supported_transfer_countries: 'String',
    },
  },
})

export type StandardScenario = typeof standard
