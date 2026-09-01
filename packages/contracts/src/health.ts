import { z } from "zod";

export const HealthStatusSchema = z.object({
  status: z.literal("ok"),
  db: z.literal("connected"),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;
