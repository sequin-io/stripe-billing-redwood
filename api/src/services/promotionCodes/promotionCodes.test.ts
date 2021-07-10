import { promotionCodes } from './promotionCodes'
import type { StandardScenario } from './promotionCodes.scenarios'

describe('promotionCodes', () => {
  scenario('returns all promotionCodes', async (scenario: StandardScenario) => {
    const result = await promotionCodes()

    expect(result.length).toEqual(Object.keys(scenario.promotionCode).length)
  })
})
