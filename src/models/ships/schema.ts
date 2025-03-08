import { z } from 'zod'

export const Model = z.object({
  id: z.number(),
  computerName: z.string(),
  vesselId: z.number(),
})

export type Type = z.infer<typeof Model>
