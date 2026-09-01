import { z } from "zod";

export const HealthStatusSchema = z.object({
  status: z.enum(["ok", "error"]),
  uptime: z.number(),
  timestamp: z.string().datetime(),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;
