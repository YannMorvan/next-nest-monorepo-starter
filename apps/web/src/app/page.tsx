import { getHealthStatus } from "@/api";

export default async function HomePage() {
  const health = await getHealthStatus();

  return (
    <div>
      <p>Status : {health.status}</p>
      <p>Uptime : {health.uptime.toFixed(2)}s</p>
    </div>
  );
}
