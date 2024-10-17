import { renderHook } from "@testing-library/react-hooks";
import { useTasks } from "./useTasks";
import { act } from "react-dom/test-utils";

test("should add task", () => {
  const { result } = renderHook(() => useTasks());
  act(() => {
    result.current.addTask("New Task", false);
  });
  expect(result.current.tasks.length).toBe(1);
});

// test('should toggle task completion status', () => {
//   const { result } = renderHook(() => useTasks());
//   act(() => {
//     result.current.addTask('New Task', false);
//   });
//   act(() => {
//     result.current.toggleTask(1);
//   });
//   expect(result.current.tasks[0].completed).toBe(true);
// });

// test('should remove completed tasks', () => {
//   const { result } = renderHook(() => useTasks());
//   act(() => {
//     result.current.addTask('New Task 1', true);
//     result.current.addTask('New Task 2', false);
//   });
//   act(() => {
//     result.current.removeCompleteTasks();
//   });
//   expect(result.current.tasks.length).toBe(1);
// });
