import "server-only";
import { unstable_cache } from "next/cache";

export type Dog = {
  src: string;
  cachedAt: number;
};

export async function loadDog(cacheTime: number | "forever"): Promise<Dog> {
  const forever = cacheTime === "forever";
  const revalidate = forever ? false : cacheTime;

  const cache = unstable_cache(
    async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const { message } = (await response.json()) as { message: string };
      return {
        src: message,
        cachedAt: new Date().getTime() / 1000,
      } satisfies Dog;
    },
    [`dog-${cacheTime}`],
    {
      revalidate,
      tags: ["all", `dog-${forever ? "forever" : cacheTime}`],
    }
  );

  return await cache();
}
