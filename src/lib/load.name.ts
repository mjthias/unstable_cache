import "server-only";
import { unstable_cache } from "next/cache";

export type Name = {
  name: string;
  cachedAt: number;
};

export async function loadName(cacheTime: number | "forever"): Promise<Name> {
  const forever = cacheTime === "forever";
  const revalidate = forever ? false : cacheTime / 2;

  const cache = unstable_cache(
    async () => {
      const response = await fetch("https://randomuser.me/api/");
      const { results } = (await response.json()) as { results: { name: { first: string } }[] };
      return {
        name: results[0].name.first,
        cachedAt: new Date().getTime() / 1000,
      } satisfies Name;
    },
    [`dog-${cacheTime}`],
    {
      revalidate,
      tags: [`name-${forever ? "forever" : cacheTime}`],
    }
  );

  return await cache();
}
