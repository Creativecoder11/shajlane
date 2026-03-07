export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="h-6 w-24 rounded-full bg-secondary animate-pulse" />
          <div className="hidden lg:flex gap-6">
            <div className="h-4 w-14 rounded bg-secondary animate-pulse" />
            <div className="h-4 w-16 rounded bg-secondary animate-pulse" />
            <div className="h-4 w-16 rounded bg-secondary animate-pulse" />
            <div className="h-4 w-20 rounded bg-secondary animate-pulse" />
          </div>
          <div className="h-10 w-32 rounded-full bg-secondary animate-pulse" />
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-5">
            <div className="h-6 w-48 rounded-full bg-secondary animate-pulse" />
            <div className="h-12 w-full max-w-[560px] rounded-2xl bg-secondary animate-pulse" />
            <div className="h-12 w-full max-w-[520px] rounded-2xl bg-secondary animate-pulse" />
            <div className="h-5 w-full max-w-[620px] rounded bg-secondary animate-pulse" />
            <div className="h-5 w-full max-w-[580px] rounded bg-secondary animate-pulse" />
            <div className="flex gap-3 pt-2">
              <div className="h-11 w-40 rounded-full bg-secondary animate-pulse" />
              <div className="h-11 w-40 rounded-full bg-secondary animate-pulse" />
            </div>
          </div>
          <div className="mx-auto aspect-[4/5] w-full max-w-[520px] rounded-[28px] bg-secondary animate-pulse" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-2xl bg-secondary animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

