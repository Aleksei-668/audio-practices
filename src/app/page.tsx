import fs from "fs";
import path from "path";
import PracticePlayer from "./PracticePlayer";

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
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getPractices(): Practice[] {
  const audioRoot = path.join(process.cwd(), "public", "audio");

  return contextFolders.flatMap((context) => {
    const folderPath = path.join(audioRoot, context.folder);

    if (!fs.existsSync(folderPath)) return [];

    return fs
      .readdirSync(folderPath)
      .filter((file) => /\.(m4a|mp3)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, "ru"))
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
    <main className="min-h-screen bg-[#f7f1e8] px-5 py-6 text-[#2f2a24]">
      <div className="mx-auto max-w-4xl">
        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#9b7050]">
            Audio Practices
          </p>
          <h1 className="mb-4 text-4xl font-bold">Практики по контекстам</h1>
          <p className="text-base text-[#65594e]">
            Выбери контекст и запусти подходящую аудиопрактику.
          </p>
        </section>

        <PracticePlayer practices={practices} contextFolders={contextFolders} />
      </div>
    </main>
  );
}
