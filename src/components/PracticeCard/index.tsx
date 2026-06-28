import type { Practice } from "@/types/practice";

type PracticeCardProps = {
  practice: Practice;
  contextTitle: string;
  isSelected: boolean;
  onSelect: (practice: Practice) => void;
};

export default function PracticeCard({
  practice,
  contextTitle,
  isSelected,
  onSelect,
}: PracticeCardProps) {
  return (
    <button
      onClick={() => onSelect(practice)}
      className={`rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#9b7050] focus:ring-offset-2 focus:ring-offset-white ${
        isSelected
          ? "border-[#2f2a24] bg-[#2f2a24] text-white shadow-md"
          : "border-[#eadfce] bg-[#f7f1e8] hover:bg-[#eadfce]"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isSelected
              ? "bg-white/15 text-[#eadfce]"
              : "bg-white text-[#65594e]"
          }`}
        >
          {contextTitle}
        </span>
        {practice.durationMinutes ? (
          <span
            className={`text-xs font-medium ${
              isSelected ? "text-[#d9c4aa]" : "text-[#7d6b5b]"
            }`}
          >
            {practice.durationMinutes} минут
          </span>
        ) : null}
      </div>

      <p className="text-base font-semibold leading-snug sm:text-lg">
        {practice.title}
      </p>
      {practice.durationMinutes ? (
        <p className="sr-only">{practice.durationMinutes} минут</p>
      ) : null}
    </button>
  );
}
