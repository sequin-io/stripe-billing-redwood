import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InvoiceCreateArgs>({
  invoice: {
    one: {
      id: 'String',
      account_tax_ids: 'String',
      discounts: 'String',
      payment_settings_payment_method_types: 'String',
    },
    two: {
      id: 'String',
      account_tax_ids: 'String',
      discounts: 'String',
      payment_settings_payment_method_types: 'String',
    },
  },
})

export type StandardScenario = typeof standard
