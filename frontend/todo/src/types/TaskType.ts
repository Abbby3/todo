export type TaskType = {
  id: number;
  task: string;
  completed: boolean;
  importance: "low" | "medium" | "high";
  created: string | null;
  edited: string | null;
};
