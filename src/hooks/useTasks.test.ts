import { renderHook, act } from "../../testUtils.ts";
import { useTasks } from "./useTasks.ts";

describe("useTasks Hook", () => {
  test("Should start empty", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      expect(result.current.tasks).toEqual([]);
    });
  });

  test("Should add new task", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("New Task", false);
    });

    expect(result.current.tasks).toEqual([
      { id: 1, title: "New Task", completed: false },
    ]);
  });

  test("Should toggle tasks", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Test Task", false);
    });
    act(() => {
      result.current.toggleTask(1);
    });
    expect(result.current.tasks[0].completed).toBe(true);
  });

  test("Should remove completed tasks", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Task 1", true);
    });
    act(() => {
      result.current.addTask("Task 2", false);
    });

    act(() => {
      result.current.removeCompleteTasks();
    });
    expect(result.current.tasks).toEqual([
      { id: 2, title: "Task 2", completed: false },
    ]);
  });
});
