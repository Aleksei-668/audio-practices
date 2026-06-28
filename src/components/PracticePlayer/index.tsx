"use client";

import { useMemo, useState } from "react";

import ContextSelector from "@/components/ContextSelector";
import type { Practice, PracticeContext } from "@/types/practice";

type PracticePlayerProps = {
  practices: Practice[];
  practiceContexts: PracticeContext[];
};

export default function PracticePlayer({
  practices,
  practiceContexts,
}: PracticePlayerProps) {
  const [selectedPractice, setSelectedPractice] = useState<Practice | null>(
    practices[0] ?? null
  );

  const selectedContext = practiceContexts.find(
    (context) => context.id === selectedPractice?.contextId
  );

  const groups = useMemo(() => {
    return practiceContexts.map((group) => ({
      ...group,
      items: practices.filter((practice) => practice.contextId === group.id),
    }));
  }, [practices, practiceContexts]);

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-[#2f2a24] p-5 text-white shadow-sm sm:p-6">
        {selectedPractice ? (
          <>
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#d9c4aa]">
              {selectedContext?.title}
            </p>

            <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">
              {selectedPractice.title}
            </h2>

            <p className="mb-5 text-sm text-[#d9c4aa]">
              Выберите практику и нажмите Play.
            </p>

            {selectedPractice.description ? (
              <p className="mb-5 text-[#eadfce]">
                {selectedPractice.description}
              </p>
            ) : null}

            <audio key={selectedPractice.media.src} controls className="w-full">
              <source src={selectedPractice.media.src} />
              Ваш браузер не поддерживает аудио.
            </audio>
          </>
        ) : (
          <div>
            <h2 className="mb-2 text-2xl font-bold">
              Выберите практику
            </h2>
            <p className="text-[#eadfce]">
              Откройте подходящий контекст, выберите аудиопрактику и нажмите
              Play.
            </p>
          </div>
        )}
      </div>

      <ContextSelector
        groups={groups}
        selectedPracticeId={selectedPractice?.id}
        onSelectPractice={setSelectedPractice}
      />
    </section>
  );
}
