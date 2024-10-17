import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import { useTasks } from "./useTasks";

describe("useTasks Hook", () => {
  test("Should start with emty tasks", () => {
    const { result } = renderHook(() => useTasks());

    expect(result.current.tasks).toEqual([]);
  });

  test("Shoud add new task", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("New task", false);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toEqual({
      id: 1,
      title: "New task",
      completed: false,
    });
  });

  test("Should toggle task", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Toggle task", false);
    });

    act(() => {
      result.current.toggleTask(1);
    });

    expect(result.current.tasks[0].completed).toBe(true);

    act(() => {
      result.current.toggleTask(1);
    });

    expect(result.current.tasks[0].completed).toBe(false);
  });

  test("Should remove completed tasks", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Task 1", true);
      result.current.addTask("Task 2", false);
    });

    act(() => {
      result.current.removeCompleteTasks();
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0]).toEqual({
      id: 2,
      title: "Task 2",
      completed: false,
    });
  });
});
