import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CouponCreateArgs>({
  coupon: {
    one: { id: 'String', applies_to_products: 'String' },
    two: { id: 'String', applies_to_products: 'String' },
  },
})

export type StandardScenario = typeof standard
