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
      <div className="rounded-3xl bg-[#2f2a24] p-6 text-white shadow-sm">
        {selectedPractice ? (
          <>
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#d9c4aa]">
              {selectedContext?.title}
            </p>

            <h2 className="mb-5 text-3xl font-bold">
              {selectedPractice.title}
            </h2>

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
          <p>Нет доступных практик.</p>
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
