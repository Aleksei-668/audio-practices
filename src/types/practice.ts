export type PracticeContentType = "audio" | "video" | "article" | "program";

export type PracticeMedia = {
  type: "audio" | "video";
  src: string;
};

export type PracticeContext = {
  id: string;
  title: string;
  folder: string;
  description?: string;
};

export type Practice = {
  id: string;
  title: string;
  type: PracticeContentType;
  contextId: string;
  description?: string;
  durationMinutes?: number;
  tags: string[];
  media: PracticeMedia;
};
