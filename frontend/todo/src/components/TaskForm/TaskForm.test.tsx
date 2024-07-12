import { render, screen } from "@testing-library/react";
import TaskForm from "./TaskForm";
import { TasksContext } from "../../context/TaskContext";
import { describe, it, expect, vi } from "vitest";
// import userEvent from "@testing-library/user-event";
import { TaskType } from "../../types/TaskType";

describe("TaskForm Component", () => {
  const mockTask: TaskType[] = [
    {
      id: 0,
      task: "Task 1",
      completed: false,
      importance: "low",
      created: null,
      edited: null,
    },
  ];

  it("renders task form correctly", () => {
    render(
      <TasksContext.Provider value={{ tasks: mockTask, refreshTasks: vi.fn() }}>
        <TaskForm id={null} onClose={vi.fn()} />
      </TasksContext.Provider>
    );

    const taskInput = screen.getByLabelText(/task/i);
    expect(taskInput).toBeInTheDocument();
  });

  // it("handles form submission", async () => {
  //   const mockRefreshTasks = vi.fn();
  //   render(
  //     <TasksContext.Provider value={{ tasks: mockTask, refreshTasks: vi.fn() }}>
  //       <TaskForm id={mockTask[1].id} onClose={vi.fn()} />
  //     </TasksContext.Provider>
  //   );

  //   const btn = screen.getByRole("button");
  //   await userEvent.setup().click(btn);
  //   expect(mockRefreshTasks).toHaveBeenCalledTimes(1);
  // });
});
