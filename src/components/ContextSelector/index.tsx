import PracticeList from "@/components/PracticeList";
import type { Practice, PracticeContext } from "@/types/practice";

type PracticeGroup = PracticeContext & {
  items: Practice[];
};

type ContextSelectorProps = {
  groups: PracticeGroup[];
  selectedPracticeId?: string;
  onSelectPractice: (practice: Practice) => void;
};

export default function ContextSelector({
  groups,
  selectedPracticeId,
  onSelectPractice,
}: ContextSelectorProps) {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <details
          key={group.id}
          open
          className="rounded-3xl bg-white p-5 shadow-sm"
        >
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <span className="rounded-full bg-[#eadfce] px-3 py-1 text-sm font-medium">
                {group.items.length}
              </span>
            </div>
          </summary>

          <div className="mt-5 grid gap-3">
            <PracticeList
              practices={group.items}
              selectedPracticeId={selectedPracticeId}
              onSelectPractice={onSelectPractice}
            />
          </div>
        </details>
      ))}
    </div>
  );
}
