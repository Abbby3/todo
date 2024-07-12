
import { baseUrl } from "./api-config";
import { TaskFormData } from "../components/TaskForm/schema";
import { TaskType } from "../types/TaskType";

export const createTask = async (data: TaskFormData): Promise<TaskType> => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to create task.`);
  }
  return await response.json();
};

export const getAllTasks = async (): Promise<TaskType[]> => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to fetch tasks.`);
  }
  const data = await response.json();
  return data;
};

export const getTaskById = async (id: number): Promise<TaskType> => {
  const response = await fetch(`${baseUrl}${id}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to fetch task.`);
  }
  return await response.json();
};

export const updateTask = async (id: number, data: TaskFormData): Promise<TaskType> => {
  const response = await fetch(`${baseUrl}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to update task.`);
  }
  return await response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${baseUrl}${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to delete task.`);
  }
};
