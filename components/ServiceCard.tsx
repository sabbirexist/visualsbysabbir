export default function ServiceCard({
  title,
  desc
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-100" />
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
    </div>
  );
}
