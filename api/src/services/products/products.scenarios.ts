import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      id: 'String',
      attributes: 'String',
      deactivate_on: 'String',
      images: 'String',
    },
    two: {
      id: 'String',
      attributes: 'String',
      deactivate_on: 'String',
      images: 'String',
    },
  },
})

export type StandardScenario = typeof standard
