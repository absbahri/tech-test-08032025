import { z } from 'zod'

export const Model = z.object({
  id: z.number().int().positive(),
  vesselName: z.string(),
  mailProductState: z.enum(['Disabled', 'Live']),
  cyberProductState: z.enum(['Disabled', 'Live']),
  assetCount: z.number().int().nonnegative(),
})

export type Type = z.infer<typeof Model>
