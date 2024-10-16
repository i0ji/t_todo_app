export interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

interface TaskInputProps {
  addTask: (title: string, completed: boolean) => void;
}


export interface TaskModel {
  id: number;
  title: string;
  completed: boolean;
}