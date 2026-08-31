import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
          >
            Monorepo Starter Ready
          </Badge>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Next.js + NestJS <span className="text-emerald-400">Turborepo</span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg">
          Frontend with Next.js App Router, Tailwind CSS and Shadcn UI.
        </p>

        <Card className="bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl text-left">
          <CardHeader>
            <CardTitle>Architecture Stack</CardTitle>
            <CardDescription className="text-slate-400">
              Pre-configured components with strict typing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>
              • <strong>apps/web</strong> : Next.js App Router
            </p>
            <p>
              • <strong>packages/typescript-config</strong> : Shared TS presets
            </p>
            <p>
              • <strong>packages/eslint-config</strong> : Unified ESLint Flat
              Config
            </p>
          </CardContent>
          <CardFooter className="flex justify-between gap-4 pt-4">
            <Button
              variant="outline"
              className="border-slate-700 hover:bg-slate-800"
            >
              Documentation
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold">
              Validate the setup
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
