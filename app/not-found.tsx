import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-red-600">404</p>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">We couldn't find that page</h1>
      <p className="mt-3 max-w-md text-gray-400">
        The link might be broken, or the item may have been removed.
      </p>
      <Button asChild className="mt-8 bg-[#E50914] text-white hover:bg-[#B81D24]">
        <Link href="/home">Back to Home</Link>
      </Button>
    </main>
  )
}
