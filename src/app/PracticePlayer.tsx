"use client";

import { useMemo, useState } from "react";

type Practice = {
  title: string;
  context: string;
  fileUrl: string;
};

type ContextFolder = {
  label: string;
  folder: string;
};

export default function PracticePlayer({
  practices,
  contextFolders,
}: {
  practices: Practice[];
  contextFolders: ContextFolder[];
}) {
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(
    practices[0] ?? null
  );

  const grouped = useMemo(() => {
    return contextFolders.map((group) => ({
      ...group,
      items: practices.filter((practice) => practice.context === group.label),
    }));
  }, [practices, contextFolders]);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-[#2f2a24] p-6 text-white shadow-sm">
        {selectedPractice ? (
          <>
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#d9c4aa]">
              {selectedPractice.context}
            </p>

            <h2 className="mb-5 text-3xl font-bold">
              {selectedPractice.title}
            </h2>

            <audio key={selectedPractice.fileUrl} controls className="w-full">
              <source src={selectedPractice.fileUrl} />
              Ваш браузер не поддерживает аудио.
            </audio>
          </>
        ) : (
          <p>Нет доступных практик.</p>
        )}
      </div>

      <div className="space-y-4">
        {grouped.map((group) => (
          <details
            key={group.folder}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">{group.label}</h2>
                <span className="rounded-full bg-[#eadfce] px-3 py-1 text-sm font-medium">
                  {group.items.length}
                </span>
              </div>
            </summary>

            <div className="mt-5 grid gap-3">
              {group.items.length === 0 ? (
                <p className="text-[#65594e]">
                  В этой категории пока нет аудиофайлов.
                </p>
              ) : (
                group.items.map((practice) => (
                  <button
                    key={practice.fileUrl}
                    onClick={() => setSelectedPractice(practice)}
                    className={`rounded-2xl p-4 text-left transition ${
                      selectedPractice?.fileUrl === practice.fileUrl
                        ? "bg-[#2f2a24] text-white"
                        : "bg-[#f7f1e8] hover:bg-[#eadfce]"
                    }`}
                  >
                    <p className="text-lg font-semibold">{practice.title}</p>
                  </button>
                ))
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
