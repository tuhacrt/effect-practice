import { Effect, pipe } from 'effect'
import { describe, expect, it } from 'vitest'

import { program } from './index'

describe('ts-reset/filter', () => {
  it(`
  Given: program
  When: Effect.runSync
  Then: void`, () => {
    const received = pipe(
      program,
      Effect.runSync,
    )
    const expected = void 0

    expect(received).toEqual(expected)
  })
})
