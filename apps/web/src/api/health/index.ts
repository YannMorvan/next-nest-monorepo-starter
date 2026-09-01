import { apiClient } from "../client";
import { HealthStatusSchema, type HealthStatus } from "@repo/contracts";

export async function getHealthStatus(
  init?: RequestInit,
): Promise<HealthStatus> {
  const data = await apiClient<HealthStatus>("/health", {
    cache: "no-store",
    ...init,
  });

  return HealthStatusSchema.parse(data);
}
