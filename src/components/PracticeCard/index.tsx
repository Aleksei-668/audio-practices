import type { Practice } from "@/types/practice";

type PracticeCardProps = {
  practice: Practice;
  isSelected: boolean;
  onSelect: (practice: Practice) => void;
};

export default function PracticeCard({
  practice,
  isSelected,
  onSelect,
}: PracticeCardProps) {
  return (
    <button
      onClick={() => onSelect(practice)}
      className={`rounded-2xl p-4 text-left transition ${
        isSelected ? "bg-[#2f2a24] text-white" : "bg-[#f7f1e8] hover:bg-[#eadfce]"
      }`}
    >
      <p className="text-lg font-semibold">{practice.title}</p>
      {practice.durationMinutes ? (
        <p className="mt-1 text-sm opacity-75">
          {practice.durationMinutes} минут
        </p>
      ) : null}
    </button>
  );
}
