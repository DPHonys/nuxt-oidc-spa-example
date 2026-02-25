import { z } from 'zod'

export const DecodedIdTokenSchema = z.object({
  preferred_username: z.string(),
  name: z.string(),
})

export type DecodedIdToken = z.infer<typeof DecodedIdTokenSchema>
