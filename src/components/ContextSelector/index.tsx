"use client";

import { useState } from "react";

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
  const [openGroupIds, setOpenGroupIds] = useState(() =>
    groups.map((group) => group.id)
  );

  const allGroupsOpen = openGroupIds.length === groups.length;

  const toggleAllGroups = () => {
    setOpenGroupIds(allGroupsOpen ? [] : groups.map((group) => group.id));
  };

  const toggleGroup = (groupId: string, isOpen: boolean) => {
    setOpenGroupIds((currentIds) => {
      if (isOpen) {
        return currentIds.includes(groupId)
          ? currentIds
          : [...currentIds, groupId];
      }

      return currentIds.filter((id) => id !== groupId);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={toggleAllGroups}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#5f4938] shadow-sm transition hover:bg-[#eadfce] focus:outline-none focus:ring-2 focus:ring-[#9b7050] focus:ring-offset-2 focus:ring-offset-[#f7f1e8]"
        >
          {allGroupsOpen ? "Свернуть все" : "Развернуть все"}
        </button>
      </div>

      {groups.map((group) => (
        <details
          key={group.id}
          open={openGroupIds.includes(group.id)}
          onToggle={(event) => toggleGroup(group.id, event.currentTarget.open)}
          className="rounded-3xl bg-white shadow-sm"
        >
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
