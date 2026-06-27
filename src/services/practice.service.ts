import { practiceContexts, practices } from "@/data/practices";

export const practiceService = {
  getAll() {
    return practices;
  },

  getById(id: string) {
    return practices.find((practice) => practice.id === id) ?? null;
  },

  getByContext(contextId: string) {
    return practices.filter((practice) => practice.contextId === contextId);
  },

  getContexts() {
    return practiceContexts;
  },
};
