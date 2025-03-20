// 型定義
export type Combinable = number | string;

export enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

export interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
}
