import RevalidateButtons from "@/components/RevalidateButtons";
import { loadDog } from "@/lib/load.dog";
import { loadName } from "@/lib/load.name";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const slugAsNumber = Number(slug);
  if (!slugAsNumber) return notFound();
  const dog = await loadDog(slugAsNumber);
  const name = await loadName(slugAsNumber);
  const now = new Date().getTime() / 1000;

  return (
    <div>
      <h1 className="text-2xl font-bold">Level 1 page</h1>

      <div className="grid grid-cols-3 gap-4 mt-10 items-start">
        <div>
          <h2 className="text-lg font-bold">{name.name}</h2>
          <img src={dog.src} className="w-96" />
        </div>

        <div className="grid gap-10">
          <div>
            <h2 className="text-lg font-bold">Dog cache info</h2>
            <p>{`Cached at: ${dog.cachedAt.toFixed(0)}`}</p>
            <p>{`Now: ${now.toFixed(0)}`}</p>
            <p>{`Revalidate in: ${(dog.cachedAt + slugAsNumber - now).toFixed(0)}`}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Name cache info</h2>
            <p>{`Cached at: ${name.cachedAt.toFixed(0)}`}</p>
            <p>{`Now: ${now.toFixed(0)}`}</p>
            <p>{`Revalidate in: ${(name.cachedAt + slugAsNumber / 2 - now).toFixed(0)}`}</p>
          </div>

          <div>
            <Link href={`/sub/${slugAsNumber}`} className="underline mt-10" prefetch={false}>
              Same cache level 2 page
            </Link>
          </div>
        </div>
        <RevalidateButtons id={slugAsNumber} />
      </div>
    </div>
  );
}
