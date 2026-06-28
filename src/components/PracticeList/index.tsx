import PracticeCard from "@/components/PracticeCard";
import type { Practice } from "@/types/practice";

type PracticeListProps = {
  practices: Practice[];
  contextTitle: string;
  selectedPracticeId?: string;
  onSelectPractice: (practice: Practice) => void;
};

export default function PracticeList({
  practices,
  contextTitle,
  selectedPracticeId,
  onSelectPractice,
}: PracticeListProps) {
  if (practices.length === 0) {
    return (
      <p className="text-[#65594e]">В этой категории пока нет аудиофайлов.</p>
    );
  }

  return (
    <>
      {practices.map((practice) => (
        <PracticeCard
          key={practice.id}
          practice={practice}
          contextTitle={contextTitle}
          isSelected={selectedPracticeId === practice.id}
          onSelect={onSelectPractice}
        />
      ))}
    </>
  );
}
