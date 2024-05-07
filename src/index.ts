import { Console, Effect } from 'effect'

export const program = Console.log('Hello, World!')

Effect.runSync(program)
