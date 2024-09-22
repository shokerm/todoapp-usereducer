export type TodoType = {
  id: number;
  name: string;
  complete: boolean;
};

export type Action = { type: string; payload: { name?: string; id?: number } };
