import { Effect, pipe } from 'effect'

export async function getDataPromise() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await response.json()

  return json
}

export function getDataEffectVerbose(): Effect.Effect<unknown, Error, never> {
  return pipe(
    Effect.tryPromise(
      {
        try: () => fetch('https://jsonplaceholder.typicode.com/todos/1'),
        catch: error => new Error(`Failed to fetch: ${error}`),
      },
    ),
    Effect.flatMap(response => Effect.tryPromise(
      {
        try: () => response.json(),
        catch: error => new Error(`Failed to parse JSON: ${error}`),
      },
    )),
  )
}

export const getDataEffectPromise = Effect.gen(function* (_) {
  const response = yield * _(Effect.tryPromise(
    {
      try: () => fetch('https://jsonplaceholder.typicode.com/todos/1'),
      catch: error => new Error(`Failed to fetch: ${error}`),
    },
  ))
  const json = yield * _(Effect.tryPromise(
    {
      try: () => response.json(),
      catch: error => new Error(`Failed to parse JSON: ${error}`),
    },
  ))

  return json
})
