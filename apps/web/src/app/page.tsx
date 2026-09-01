import { getHealthStatus } from "@/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

async function fetchHealth() {
  try {
    return await getHealthStatus();
  } catch {
    return { status: "error", db: "disconnected" } as const;
  }
}

export default async function HomePage() {
  const health = await fetchHealth();
  const isApiOk = health.status === "ok";
  const isDbOk = health.db === "connected";

  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>

      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
            Turborepo Starter v1.0
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Next.js + NestJS + Prisma
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Monorepo starter template with Next.js, NestJS, Prisma, and
            PostgreSQL. This template is designed to help you quickly set up a
            full-stack application with a modern tech stack.
          </p>
        </div>

        {/* Services Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Services Status</CardTitle>
            <CardDescription>
              Check the health of the frontend, backend, and database services
              in this monorepo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Frontend (Web)</p>
                <p className="text-xs text-muted-foreground">
                  Next.js App Router
                </p>
              </div>
              <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white">
                Operational
              </Badge>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">API (Backend)</p>
                <p className="text-xs text-muted-foreground">NestJS REST</p>
              </div>
              <Badge
                variant={isApiOk ? "default" : "destructive"}
                className={
                  isApiOk
                    ? "bg-emerald-600 hover:bg-emerald-600 text-white"
                    : ""
                }
              >
                {isApiOk ? "Connected" : "Offline"}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Database</p>
                <p className="text-xs text-muted-foreground">
                  PostgreSQL (Prisma)
                </p>
              </div>
              <Badge
                variant={isDbOk ? "default" : "destructive"}
                className={
                  isDbOk ? "bg-emerald-600 hover:bg-emerald-600 text-white" : ""
                }
              >
                {isDbOk ? "Connected" : "Disconnected"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex justify-center gap-4">
          <Button variant="default">
            <a
              href="http://localhost:4000/api/health"
              target="_blank"
              rel="noreferrer"
            >
              API Healthcheck
            </a>
          </Button>
          <Button variant="outline">
            <a
              href="https://turbo.build/repo/docs"
              target="_blank"
              rel="noreferrer"
            >
              Turbo Docs
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
