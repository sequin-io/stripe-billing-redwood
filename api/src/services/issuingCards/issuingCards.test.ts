import { issuingCards } from './issuingCards'
import type { StandardScenario } from './issuingCards.scenarios'

describe('issuingCards', () => {
  scenario('returns all issuingCards', async (scenario: StandardScenario) => {
    const result = await issuingCards()

    expect(result.length).toEqual(Object.keys(scenario.issuingCard).length)
  })
})
