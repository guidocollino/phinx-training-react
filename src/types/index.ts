export type Task = {
  name: string;
  editHandler: (task: Task, taskName: string) => void;
  deleteHandler: (task: Task) => void;
}