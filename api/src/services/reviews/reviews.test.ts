import { reviews } from './reviews'
import type { StandardScenario } from './reviews.scenarios'

describe('reviews', () => {
  scenario('returns all reviews', async (scenario: StandardScenario) => {
    const result = await reviews()

    expect(result.length).toEqual(Object.keys(scenario.review).length)
  })
})
