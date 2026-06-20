import fs from "fs";
import path from "path";

type Practice = {
  title: string;
  context: string;
  fileUrl: string;
};

const contextFolders = [
  { label: "Есть 5 минут", folder: "5-minut" },
  { label: "Лежа", folder: "lezha" },
  { label: "На прогулке", folder: "na-progulke" },
  { label: "Сидя", folder: "sidya" },
];

function formatTitle(fileName: string) {
  return fileName
    .replace(/\.(m4a|mp3)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getPractices(): Practice[] {
  const audioRoot = path.join(process.cwd(), "public", "audio");

  return contextFolders.flatMap((context) => {
    const folderPath = path.join(audioRoot, context.folder);

    if (!fs.existsSync(folderPath)) {
      return [];
    }

    return fs
      .readdirSync(folderPath)
      .filter((file) => /\.(m4a|mp3)$/i.test(file))
      .map((file) => ({
        title: formatTitle(file),
        context: context.label,
        fileUrl: `/audio/${context.folder}/${encodeURIComponent(file)}`,
      }));
  });
}

export default function Home() {
  const practices = getPractices();

  return (
    <main className="min-h-screen bg-[#f7f1e8] px-6 py-8 text-[#2f2a24]">
      <div className="mx-auto max-w-5xl">
        <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9b7050]">
            Audio Practices
          </p>

          <h1 className="mb-4 text-5xl font-bold">
            Практики по контекстам
          </h1>

          <p className="text-lg text-[#65594e]">
            Выбери подходящую аудиопрактику: когда есть 5 минут, лежа, на прогулке или сидя.
          </p>
        </section>

        {contextFolders.map((context) => {
          const items = practices.filter((practice) => practice.context === context.label);

          return (
            <section key={context.folder} className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">{context.label}</h2>

              {items.length === 0 ? (
                <div className="rounded-3xl bg-white/70 p-6 text-[#65594e]">
                  В этой категории пока нет аудиофайлов.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((practice) => (
                    <article key={practice.fileUrl} className="rounded-3xl bg-white p-6 shadow-sm">
                      <div className="mb-4 inline-flex rounded-full bg-[#eadfce] px-4 py-2 text-sm font-medium">
                        {practice.context}
                      </div>

                      <h3 className="mb-4 text-2xl font-semibold">{practice.title}</h3>

                      <audio controls className="w-full">
                        <source src={practice.fileUrl} />
                        Ваш браузер не поддерживает аудио.
                      </audio>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
