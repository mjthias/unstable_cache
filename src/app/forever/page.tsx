import RevalidateButtons from "@/components/RevalidateButtons";
import { loadDog } from "@/lib/load.dog";
import { loadName } from "@/lib/load.name";

export default async function Page() {
  const dog = await loadDog("forever");
  const name = await loadName("forever");
  const now = new Date().getTime() / 1000;

  return (
    <div>
      <h1 className="text-2xl font-bold">Forever cache</h1>

      <div className="grid grid-cols-3 gap-4 mt-10 items-start">
        <div>
          <h2 className="text-lg font-bold">{name.name}</h2>
          <img src={dog.src} className="w-96" />
        </div>

        <div>
          <div>
            <h2 className="text-lg font-bold">Dog cache info</h2>
            <p>{`Cached at: ${dog.cachedAt.toFixed(0)}`}</p>
            <p>{`Now: ${now.toFixed(0)}`}</p>
            <p>{`Revalidate in: Only on demand`}</p>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold">Name cache info</h2>
            <p>{`Cached at: ${name.cachedAt.toFixed(0)}`}</p>
            <p>{`Now: ${now.toFixed(0)}`}</p>
            <p>{`Revalidate in: Only on demand`}</p>
          </div>
        </div>
        <RevalidateButtons id="forever" />
      </div>
    </div>
  );
}
