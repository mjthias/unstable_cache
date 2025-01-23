import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-prose p-10 grid gap-4">
      <h1 className="text-2xl font-bold">Unstable Cache Demo</h1>
      <p>This is a demo of the unstable cache in Next.js.</p>
      <p>
        Each subpage (/[slug: number]) will fetch a random dog image as well as a random name from 2 different APIs.{" "}
        <br />
        The dog image is cached for "slug" seconds <br />
        The name is cached for "slug" / 2 seconds.
      </p>

      <p>To test reusability of cache, each cached dog also exist on /sub/[slug] </p>

      <p>To test forever cache, there is a page at /forever</p>

      <h2 className="text-xl font-bold mt-10">Examples using Link and prefetch</h2>

      <ul>
        <li className="list-disc">
          <Link href="/10" className="underline">
            10 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/sub/10" className="underline">
            Sub page 10 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/30" className="underline">
            30 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/sub/30" className="underline">
            Sub page 30 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/60" className="underline">
            60 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/sub/60" className="underline">
            Sub page 60 s cache
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/forever" className="underline">
            Forever cache
          </Link>
        </li>
      </ul>
    </main>
  );
}
