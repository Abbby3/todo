import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import { TasksContext } from "../../context/TaskContext";
import { describe, it, expect, vi } from "vitest";
import { TaskType } from "../../types/TaskType";
// import userEvent from "@testing-library/user-event";

describe("TaskList Component", () => {
  const mockTask: TaskType[] = [
    { id: 0, task: "Task", completed: false, importance: "low", created: null, edited: null },
  ];

  it("renders task list correctly", () => {
    render(
      <TasksContext.Provider value={{ tasks: mockTask, refreshTasks: vi.fn() }}>
        <TaskList onTaskClick={vi.fn()} />
      </TasksContext.Provider>
    );

    const taskItems = screen.getAllByRole("listitem");
    expect(taskItems).toHaveLength(mockTask.length);
  });

  // it("handles task deletion", async () => {
  //   const mockRefreshTasks = vi.fn();
  //   render(
  //     <TasksContext.Provider value={{ tasks: mockTask, refreshTasks: mockRefreshTasks }}>
  //       <TaskList onTaskClick={vi.fn()} />
  //     </TasksContext.Provider>
  //   );
  //   const btn = screen.getByRole("button");
  //   await userEvent.setup().click(btn);
  //   expect(mockRefreshTasks).toHaveBeenCalledTimes(1);
  // });

  // it("handles checkbox toggle", async () => {
  //   const mockRefreshTasks = vi.fn();
  //   render(
  //     <TasksContext.Provider value={{ tasks: mockTask, refreshTasks: mockRefreshTasks }}>
  //       <TaskList onTaskClick={vi.fn()} />
  //     </TasksContext.Provider>
  //   );

  //   const checkbox = screen.getByRole("checkbox");
  //   await userEvent.setup().click(checkbox);
  //   expect(mockRefreshTasks).toHaveBeenCalledTimes(1);
  // });
});
