import { Effect } from 'effect'
import { describe, expect, it } from 'vitest'

import { getDataEffectVerbose, getDataPromise } from './getData'

describe('ts-reset/filter', () => {
  it(`
  Given: null
  When: getDataPromise()
  Then: Array<number>`, async () => {
    const received = await getDataPromise()
    const expected = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }

    expect(received).toEqual(expected)
  })

  it(`
  Given: null
  When: getDataEffectVerbose()
  Then: Array<number>`, async () => {
    const received = await Effect.runPromise(getDataEffectVerbose())
    const expected = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }

    expect(received).toEqual(expected)
  })
})
