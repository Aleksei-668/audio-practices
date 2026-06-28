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
        <details key={group.id} open className="rounded-3xl bg-white shadow-sm">
          <summary className="cursor-pointer list-none">
            <div className="flex items-start justify-between gap-3 border-b border-[#f0e6d8] p-5">
              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  {group.title}
                </h2>
                {group.description ? (
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-[#65594e]">
                    {group.description}
                  </p>
                ) : null}
              </div>
              <span className="shrink-0 rounded-full bg-[#eadfce] px-3 py-1 text-sm font-medium">
                {group.items.length}
              </span>
            </div>
          </summary>

          <div className="grid gap-3 p-4 sm:p-5">
            <PracticeList
              practices={group.items}
              contextTitle={group.title}
              selectedPracticeId={selectedPracticeId}
              onSelectPractice={onSelectPractice}
            />
          </div>
        </details>
      ))}
    </div>
  );
}
