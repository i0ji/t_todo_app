export interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

export interface TaskModel {
  id: number;
  title: string;
  completed: boolean;
}
