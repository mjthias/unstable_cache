import { revalidatePath, revalidateTag } from "next/cache";

export default function RevalidateButtons({ id }: { id: number | "forever" }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Revalidaters</h2>
      <ul className="grid gap-2 mt-4">
        <li>
          <button
            className="bg-black text-white px-2 py-1 rounded-md"
            onClick={async () => {
              "use server";
              revalidateTag(`dog-${id}`);
            }}
          >
            Clear this image
          </button>
        </li>
        <li>
          <button
            className="bg-black text-white px-2 py-1 rounded-md"
            onClick={async () => {
              "use server";
              revalidateTag(`name-${id}`);
            }}
          >
            Clear this name
          </button>
        </li>
        <li>
          <button
            className="bg-black text-white px-2 py-1 rounded-md"
            onClick={async () => {
              "use server";
              revalidateTag(`name-${id}`);
              revalidateTag(`dog-${id}`);
            }}
          >
            Clear this name and image
          </button>
        </li>
        <li>
          <button
            className="bg-black text-white px-2 py-1 rounded-md"
            onClick={async () => {
              "use server";
              revalidateTag("all");
            }}
          >
            Clear all by tag
          </button>
        </li>
        <li>
          <button
            className="bg-black text-white px-2 py-1 rounded-md"
            onClick={async () => {
              "use server";
              revalidatePath("/", "layout");
            }}
          >
            Clear all by root layout path
          </button>
        </li>
      </ul>
    </div>
  );
}
