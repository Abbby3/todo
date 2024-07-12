import * as z from "zod";

export const schema = z.object({
  task: z.string().min(1),
  completed: z.boolean(),
  importance: z.enum(['low', 'medium', 'high']),
});

export type TaskFormData = z.infer<typeof schema>;
